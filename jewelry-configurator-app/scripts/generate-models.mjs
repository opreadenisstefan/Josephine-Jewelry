/**
 * generate-models.mjs
 * Generates GLB jewelry models for the Josephine configurator.
 * Run: node scripts/generate-models.mjs
 */
// Node.js polyfill — GLTFExporter uses FileReader internally
if (typeof FileReader === 'undefined') {
  global.FileReader = class {
    readAsArrayBuffer(blob) {
      (blob.arrayBuffer ? blob.arrayBuffer() : Promise.resolve(blob))
        .then(buf => {
          this.result = buf;
          this.onload?.({ target: this });
          this.onloadend?.({ target: this });
        })
        .catch(e => {
          this.onerror?.({ target: this, error: e });
          this.onloadend?.({ target: this });
        });
    }
  };
}

import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'models');
mkdirSync(OUT, { recursive: true });

const exporter = new GLTFExporter();

async function saveGLB(scene, filename) {
  // Three.js r152+ uses parseAsync; older versions use callback-style parse
  let result;
  if (typeof exporter.parseAsync === 'function') {
    result = await exporter.parseAsync(scene, { binary: true });
  } else {
    result = await new Promise((resolve, reject) =>
      exporter.parse(scene, resolve, reject, { binary: true })
    );
  }
  writeFileSync(join(OUT, filename), Buffer.from(result));
  console.log(`  ✓  ${filename}`);
}

// ── MESH HELPER ──
// name: 'gem' → piatra pretioasa, orice altceva → metal
function m(geo, name = 'metal') {
  const mat = new THREE.MeshStandardMaterial({
    color: name === 'gem' ? 0x1030CC : 0xCFA548,
    metalness: name === 'gem' ? 0 : 1,
    roughness: name === 'gem' ? 0.02 : 0.10,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = name;
  mesh.castShadow = mesh.receiveShadow = true;
  return mesh;
}

// ── RING ──
function buildRing() {
  const g = new THREE.Group();
  const shank = m(new THREE.TorusGeometry(1.2, 0.185, 64, 200));
  shank.rotation.x = 0.06 * Math.PI;
  g.add(shank);

  const basket = m(new THREE.CylinderGeometry(0.33, 0.29, 0.44, 8));
  basket.position.y = 1.22; g.add(basket);

  const stone = m(new THREE.SphereGeometry(0.33, 64, 64), 'gem');
  stone.scale.set(1.0, 1.35, 0.9); stone.position.y = 1.64; g.add(stone);

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const p = m(new THREE.CylinderGeometry(0.04, 0.03, 0.56, 8));
    p.position.set(Math.cos(a) * 0.27, 1.44, Math.sin(a) * 0.27);
    p.rotation.z = -Math.cos(a) * 0.21; p.rotation.x = Math.sin(a) * 0.21;
    g.add(p);
  }
  // Pavé side stones
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2;
    if (Math.abs(Math.cos(a)) < 0.4) continue;
    const ms = m(new THREE.SphereGeometry(0.075, 16, 16), 'gem');
    ms.position.set(Math.cos(a) * 0.82, 1.18, Math.sin(a) * 0.20); g.add(ms);
  }
  g.position.y = -0.4;
  return g;
}

// ── NECKLACE ──
function buildNecklace() {
  const g = new THREE.Group();
  for (let i = 0; i < 28; i++) {
    const t = i / 27 - 0.5, a = t * Math.PI * 0.88;
    const link = m(new THREE.TorusGeometry(0.12, 0.032, 12, 32));
    link.position.set(Math.sin(a) * 3.2, -Math.cos(a) * 3.2 + 3.2, 0);
    link.rotation.z = a; if (i % 2) link.rotation.y = Math.PI / 2;
    g.add(link);
  }
  const gem = m(new THREE.SphereGeometry(0.54, 64, 64), 'gem');
  gem.scale.set(0.9, 1.4, 0.65); g.add(gem);
  const bezel = m(new THREE.TorusGeometry(0.57, 0.075, 12, 80));
  bezel.scale.set(0.9, 1.4, 0.65); g.add(bezel);
  const cap = m(new THREE.CylinderGeometry(0.08, 0.06, 0.22, 8));
  cap.position.y = 0.82; g.add(cap);
  g.position.y = 0.3;
  return g;
}

// ── EARRINGS ──
function buildEarrings() {
  const g = new THREE.Group();
  [-1.4, 1.4].forEach(xOff => {
    const side = new THREE.Group();
    const hook = m(new THREE.TorusGeometry(0.38, 0.05, 16, 80, Math.PI * 1.35));
    hook.rotation.z = -0.14 * Math.PI; side.add(hook);
    const stem = m(new THREE.CylinderGeometry(0.04, 0.04, 0.7, 8));
    stem.position.y = -0.72; side.add(stem);
    const drop = m(new THREE.SphereGeometry(0.30, 48, 48), 'gem');
    drop.scale.set(1, 1.5, 1); drop.position.y = -1.35; side.add(drop);
    const bz = m(new THREE.TorusGeometry(0.32, 0.05, 12, 64));
    bz.scale.set(1, 0.1, 1); bz.position.y = -1.05; side.add(bz);
    side.position.x = xOff; g.add(side);
  });
  g.position.y = 0.6;
  return g;
}

// ── BRACELET ──
function buildBracelet() {
  const g = new THREE.Group();
  const R = 1.95;
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * Math.PI * 2;
    const seg = m(new THREE.CylinderGeometry(0.12, 0.12, 0.44, 10));
    seg.position.set(Math.cos(a) * R, 0, Math.sin(a) * R);
    seg.rotation.y = -a; seg.rotation.z = Math.PI / 2; g.add(seg);
  }
  for (let i = 0; i < 20; i++) {
    const a = (i / 20) * Math.PI * 2;
    const gem = m(new THREE.SphereGeometry(0.13, 24, 24), 'gem');
    gem.position.set(Math.cos(a) * R, 0.18, Math.sin(a) * R); g.add(gem);
  }
  g.rotation.x = 0.28 * Math.PI;
  g.position.y = -0.3;
  return g;
}

// ── BROOCH ──
function buildBrooch() {
  const g = new THREE.Group();
  g.add(m(new THREE.TorusGeometry(1.4, 0.10, 20, 80)));
  g.add(m(new THREE.TorusGeometry(0.88, 0.07, 16, 64)));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const petal = m(new THREE.SphereGeometry(0.32, 24, 16));
    petal.position.set(Math.cos(a) * 0.75, Math.sin(a) * 0.75, 0);
    petal.scale.set(0.9, 1.7, 0.28); g.add(petal);
    const pg = m(new THREE.SphereGeometry(0.14, 24, 24), 'gem');
    pg.position.set(Math.cos(a) * 0.75, Math.sin(a) * 0.75, 0.14); g.add(pg);
  }
  g.add(m(new THREE.SphereGeometry(0.36, 48, 48), 'gem'));
  g.rotation.x = -0.08 * Math.PI;
  return g;
}

// ── TIARA ──
function buildTiara() {
  const g = new THREE.Group();
  const R = 3.1;
  for (let i = 0; i < 28; i++) {
    const t = i / 27, a = (t - 0.5) * Math.PI * 0.8;
    const seg = m(new THREE.CylinderGeometry(0.055, 0.055, 0.30, 8));
    seg.position.set(Math.cos(a) * R, Math.sin(a) * 0.5, 0);
    seg.rotation.z = a + Math.PI / 2; g.add(seg);
  }
  [
    { x: 0, h: 2.2, r: 0.20 }, { x: -1.3, h: 1.5, r: 0.16 }, { x: 1.3, h: 1.5, r: 0.16 },
    { x: -2.4, h: 0.9, r: 0.12 }, { x: 2.4, h: 0.9, r: 0.12 }
  ].forEach(s => {
    const by = Math.sin(Math.atan2(s.x * 0.16, R)) * 0.5;
    const spire = m(new THREE.ConeGeometry(s.r, s.h, 6));
    spire.position.set(s.x, by + s.h / 2 + 0.14, 0); g.add(spire);
    const tg = m(new THREE.SphereGeometry(s.r, 32, 32), 'gem');
    tg.position.set(s.x, by + s.h + 0.26, 0); g.add(tg);
    const br = m(new THREE.TorusGeometry(s.r * 1.1, s.r * 0.2, 8, 32));
    br.position.set(s.x, by + 0.1, 0); br.rotation.x = Math.PI / 2; g.add(br);
  });
  g.position.y = -0.5;
  return g;
}

// ── PENDANT ──
function buildPendant() {
  const g = new THREE.Group();
  const bail = m(new THREE.TorusGeometry(0.30, 0.085, 16, 40));
  bail.position.y = 1.3; g.add(bail);
  const stem = m(new THREE.CylinderGeometry(0.06, 0.06, 0.42, 10));
  stem.position.y = 0.94; g.add(stem);
  const frame = m(new THREE.TorusGeometry(0.72, 0.09, 16, 80));
  frame.scale.set(1, 1.38, 0.55); g.add(frame);
  const gem = m(new THREE.SphereGeometry(0.64, 64, 64), 'gem');
  gem.scale.set(1, 1.38, 0.55); g.add(gem);
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    const ms = m(new THREE.SphereGeometry(0.055, 12, 12), 'gem');
    ms.position.set(Math.cos(a) * 0.72, Math.sin(a) * 0.72 * 1.38, 0.06); g.add(ms);
  }
  return g;
}

// ── BUCKLE ──
function buildBuckle() {
  const g = new THREE.Group();
  const W = 2.4, H = 1.6, T = 0.15, D = 0.12;
  const top = m(new THREE.BoxGeometry(W, T, D)); top.position.y = H / 2; g.add(top);
  const bot = m(new THREE.BoxGeometry(W, T, D)); bot.position.y = -H / 2; g.add(bot);
  const lft = m(new THREE.BoxGeometry(T, H, D)); lft.position.x = -W / 2; g.add(lft);
  const rgt = m(new THREE.BoxGeometry(T, H, D)); rgt.position.x = W / 2; g.add(rgt);
  const bar = m(new THREE.CylinderGeometry(0.07, 0.07, H - 0.05, 16));
  bar.rotation.z = Math.PI / 2; bar.position.x = -0.35; g.add(bar);
  for (let i = -2; i <= 2; i++) {
    const gem = m(new THREE.SphereGeometry(0.12, 24, 24), 'gem');
    gem.position.set(i * 0.45, H / 2, 0.16); g.add(gem);
  }
  g.rotation.x = -0.08 * Math.PI;
  return g;
}

// ── MAIN ──
const MODELS = [
  ['ring.glb', buildRing],
  ['necklace.glb', buildNecklace],
  ['earrings.glb', buildEarrings],
  ['bracelet.glb', buildBracelet],
  ['brooch.glb', buildBrooch],
  ['tiara.glb', buildTiara],
  ['pendant.glb', buildPendant],
  ['buckle.glb', buildBuckle],
];

console.log('\nGenerating jewelry 3D models...\n');
for (const [filename, builder] of MODELS) {
  const scene = new THREE.Scene();
  scene.add(builder());
  await saveGLB(scene, filename);
}
console.log(`\nDone! Models saved to public/models/\n`);
