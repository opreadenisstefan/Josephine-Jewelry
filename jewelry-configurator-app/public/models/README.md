# Modele 3D Bijuterii

Pune fișierele `.glb` ale bijuteriilor tale REALE în acest folder.
Aplicația le va încărca automat — dacă fișierul nu există, afișează un model procedural.

## Denumiri așteptate

| Tip bijuterie | Fișier GLB          |
|---------------|---------------------|
| Inel          | `ring.glb`          |
| Colier        | `necklace.glb`      |
| Cercei        | `earrings.glb`      |
| Brățară       | `bracelet.glb`      |
| Brosă         | `brooch.glb`        |
| Tiară         | `tiara.glb`         |
| Pandantiv     | `pendant.glb`       |
| Cataramă      | `buckle.glb`        |

## Cum obții modele GLB

- **Modele proprii**: exportează din Blender ca `.glb`
- **Modele gratuite**: https://sketchfab.com (filtrează după licență CC) sau https://poly.pizza
- **Nombim mesh-urile**: dacă mesh-ul se numește `gem`, `stone`, `diamond`, `ruby`, `emerald`, `sapphire`, `crystal` sau `pearl` — va folosi materialul pietrelor; altfel — metalul ales.

## Actualizare materiale în timp real

Aplicația înlocuiește automat materialele modelului GLB cu:
- Metal selectat (Aur Galben/Roz/Alb, Platină, Argint)
- Piatră selectată (Diamant/Safir/Rubin/Smarald/Ametist/Perlă) cu transmission + IOR corect
