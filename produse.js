const imageExtensions = ["jpg", "jpeg", "png", "webp"];
const CART_STORAGE_KEY = "josephine_cart";
const WHATSAPP_PHONE = "40754334877";

// Products with low stock (show urgency)
const PRODUCT_STOCK = {
  3: 2, 6: 1, 8: 3, 13: 2, 21: 1, 26: 3, 35: 2, 45: 1, 57: 3, 81: 2, 92: 1, 116: 2, 128: 3, 134: 1,
};

const PRODUCT_BADGES = {
  // NOU — recently added
  4: "NOU", 8: "NOU", 11: "NOU", 13: "NOU", 16: "NOU",
  26: "NOU", 35: "NOU", 41: "NOU", 43: "NOU", 116: "NOU",
  123: "NOU", 128: "NOU", 129: "NOU", 131: "NOU", 136: "NOU",
  140: "NOU", 141: "NOU",
  // POPULAR — bestsellers
  6: "POPULAR", 21: "POPULAR", 45: "POPULAR", 92: "POPULAR",
  134: "POPULAR", 7: "POPULAR", 57: "POPULAR", 98: "POPULAR",
  // OFERTĂ — in monthly deals
  3: "OFERTĂ", 81: "OFERTĂ",
};

const productData = {
  1: {
    name: "Kyanite",
    price: "999 lei",
    description: "Un colier masculin care îmbină energia brută a kyanitului albastru cu eleganța metalului cald.",
    gender: "barbati",
    type: "lanturi"
  },
  2: {
    name: "Lingou",
    price: "1000 lei",
    description: "Un bloc de metal pur, neted ca o decizie luată fără ezitare.",
    gender: "barbati",
    type: "lanturi"
  },
  3: {
    name: "Ruby Link",
    price: "1000,99 lei",
    description: "Elementul central, o inimă roșie lucioasă, aduce un plus de căldură și expresivitate designului minimalist.",
    gender: "femei",
    type: "bratari"
  },
  5: {
    name: "Tangled Cross",
    price: "2300 lei",
    description: "O cruce sculptată cu grijă, ca o promisiune gravată în metal.",
    gender: "barbati",
    type: "lanturi"
  },
  6: {
    name: "Rosey Ring",
    price: "1230 lei",
    description: "Un inel fin și delicat, ce poartă în centrul său un trandafir roz sculptat cu grijă.",
    gender: "femei",
    type: "inele"
  },
  7: {
    name: "Hannah Lavender Petals Ring",
    price: "2000 lei",
    description: "Două flori sunt mai prețioase decât una.",
    gender: "femei",
    type: "inele"
  },
  9: {
    name: "Ribbon Ring",
    price: "1040 lei",
    description: "Un inel rafinat, decorat cu pietre mov și o fundiță delicată.",
    gender: "femei",
    type: "inele"
  },
  10: {
    name: "Interlinked",
    price: "2830 lei",
    description: "Un inel care îmbină forța cu echilibrul — argint și aur într-un dialog al contrastelor.",
    gender: "barbati",
    type: "inele"
  },
  12: {
    name: "Felina Mistica",
    price: "3000 lei",
    description: "Un strop de magie de toamnă, cu zâmbet blând și inimioară strălucitoare.",
    gender: "copii",
    type: "alte"
  },
  14: {
    name: "Excalibur",
    price: "2100 lei",
    description: "Colier statement din argint, suspendat de un medalion gravat cu chip mitic.",
    gender: "barbati",
    type: "lanturi"
  },
  15: {
    name: "Katana",
    price: "2250 lei",
    description: "Un lanț masculin, simplu și puternic, din care atârnă o lamă elegant curbată.",
    gender: "barbati",
    type: "lanturi"
  },
  17: {
    name: "Witch Hour",
    price: "2200 lei",
    description: "Acest ceas îmbină eleganța gotică cu misterul nopții.",
    gender: "barbati",
    type: "ceasuri"
  },
  19: {
    name: "Circle Of Connection",
    price: "1920 lei",
    description: "Un colier masculin din argint – simbol al continuității și legăturilor.",
    gender: "barbati",
    type: "lanturi"
  },
  20: {
    name: "Eternal Light Ring",
    price: "1025 lei",
    description: "Simbolizează strălucirea eternă, dragostea nepieritoare și frumusețea ce transcende timpul.",
    gender: "femei",
    type: "inele"
  },
  21: {
    name: "Mariposa Ring",
    price: "2390 lei",
    description: "Un inel delicat, cu piatră mov strălucitoare și fluture grațios.",
    gender: "femei",
    type: "inele"
  },
  22: {
    name: "Rosé Ring",
    price: "1200,60 lei",
    description: "Rosé este un inel care îmbină delicatețea cu strălucirea într-un design romantic.",
    gender: "femei",
    type: "inele"
  },
  23: {
    name: "Chrome Cross",
    price: "4200 lei",
    description: "Un simbol al protecției și al legăturii sincere.",
    gender: "barbati",
    type: "lanturi"
  },
  24: {
    name: "Heavenly Angel Pendant",
    price: "1700 lei",
    description: "Colier delicat cu înger, simbol al protecției, speranței și păcii.",
    gender: "copii",
    type: "lanturi"
  },
  25: {
    name: "Embrace Necklace",
    price: "2670 lei",
    description: "Un simbol al protecției și al legăturii sincere.",
    gender: "barbati",
    type: "lanturi"
  },
  27: {
    name: "Dragoste fara Rasuflare",
    price: "3000 lei",
    description: "Un simbol al misterului și pasiunii ascunse.",
    gender: "femei",
    type: "alte"
  },
  28: {
    name: "Rosé Embrace",
    price: "2500,50 lei",
    description: "Pereche de cercei stud care îmbină romantismul cu rafinamentul.",
    gender: "femei",
    type: "cercei"
  },
  30: {
    name: "Noaptea Crucilor",
    price: "4000 lei",
    description: "Brățară cu charm-uri din argint, cu spirit misterios.",
    gender: "femei",
    type: "bratari"
  },
  32: {
    name: "Studded Ring",
    price: "2067 lei",
    description: "Un dans de lumină pe degete — acest inel placat cu aur îmbracă mâna cu grație și mister.",
    gender: "femei",
    type: "inele"
  },
  33: {
    name: "Ecoul Timpului",
    price: "1880 lei",
    description: "Ceas de buzunar cu design vintage și simbolism profund.",
    gender: "barbati",
    type: "ceasuri"
  },
  34: {
    name: "Lumen Heart",
    price: "1790 lei",
    description: "Bratara unisex care combină simplitatea modernă cu eleganța.",
    gender: "femei",
    type: "bratari"
  },
  38: {
    name: "Christmas Sheep Necklace",
    price: "1200 lei",
    description: "Colier delicat cu oaie, simbol al blândeții și purității.",
    gender: "copii",
    type: "lanturi"
  },
  44: {
    name: "Crimson Monarch (men)",
    price: "2900,50 lei",
    description: "Ceas care emană autoritate și rafinament.",
    gender: "barbati",
    type: "ceasuri"
  },
  45: {
    name: "Bow Ring",
    price: "2980 lei",
    description: "Delicat ca o promisiune, acest inel poartă grația unei atingeri de lumină.",
    gender: "femei",
    type: "inele"
  },
  46: {
    name: "Imperial Ring",
    price: "3299 lei",
    description: "Bijuterie masculină, unde eleganța metalului întâlnește puterea imperială.",
    gender: "barbati",
    type: "inele"
  },
  47: {
    name: "Piper Pearl Studs",
    price: "2399 lei",
    description: "Cercei din perle ce aduc o notă de rafinament și eleganță pură.",
    gender: "femei",
    type: "cercei"
  },
  48: {
    name: "Embrace Ring",
    price: "1340 lei",
    description: "Două mâini din argint se întâlnesc într-un gest tăcut de apropiere.",
    gender: "barbati",
    type: "inele"
  },
  51: {
    name: "Cordis Argentum (men)",
    price: "1560 lei",
    description: "Ideal pentru cei care îmbină rafinamentul cu expresia personală.",
    gender: "barbati",
    type: "inele"
  },
  53: {
    name: "Palmer Pearl Bracelet",
    price: "1600 lei",
    description: "Brățară delicată cu mărgele translucide și accente aurii fine.",
    gender: "femei",
    type: "bratari"
  },
  54: {
    name: "Evil Eye Necklace - Men",
    price: "1399.99 lei",
    description: "Pandantiv bărbătesc sofisticat, cu simbol protectiv încrustat cu pietre fine.",
    gender: "barbati",
    type: "lanturi"
  },
  55: {
    name: "Silver Tiny Diamond Cross",
    price: "2199.99 lei",
    description: "Colier finuț din argint cu pandantiv cruce, împodobit cu pietre strălucitoare.",
    gender: "femei",
    type: "lanturi"
  },
  56: {
    name: "Heart Loop Chain Ring",
    price: "1760 lei",
    description: "Inel delicat din argint, cu charm inimă suspendat și strălucire subtilă.",
    gender: "femei",
    type: "inele"
  },
  57: {
    name: "Whisper Web",
    price: "1699.99 lei",
    description: "Cercei cu diamant, inspirați din forma păianjenului.",
    gender: "femei",
    type: "cercei"
  },
  59: {
    name: "Aurora",
    price: "1580 lei",
    description: "Bijuterie rafinată, ce reflectă lumina blândă a zorilor.",
    gender: "femei",
    type: "inele"
  },
  61: {
    name: "Farmec etern",
    price: "1300 lei",
    description: "Strălucire atemporală și farmec modern.",
    gender: "femei",
    type: "cercei"
  },
  62: {
    name: "Trandafir de aur",
    price: "900 lei",
    description: "Romantici, dar cu atitudine.",
    gender: "femei",
    type: "cercei"
  },
  63: {
    name: "Floare de cer",
    price: "1000 lei",
    description: "Delicați și plini de lumină.",
    gender: "femei",
    type: "cercei"
  },
  64: {
    name: "Roua de perle",
    price: "800 lei",
    description: "Farmecul natural al perlelor clasice într-o formă modernă.",
    gender: "femei",
    type: "cercei"
  },
  65: {
    name: "Fluturi de trandafir",
    price: "1150 lei",
    description: "Cercei în formă de fluture, jucăuși și feminini.",
    gender: "femei",
    type: "cercei"
  },
  66: {
    name: "Lumina soarelui",
    price: "1230 lei",
    description: "Cercei tip cerc cu o notă de rafinament.",
    gender: "femei",
    type: "cercei"
  },
  67: {
    name: "Stralucirea inimii",
    price: "1420 lei",
    description: "Cercei tip cerc decorați cu mici inimi delicate.",
    gender: "femei",
    type: "cercei"
  },
  68: {
    name: "Fundă de sefir",
    price: "1200 lei",
    description: "Cercei feminini, cu pietre roz pal și fundiță.",
    gender: "femei",
    type: "cercei"
  },
  69: {
    name: "Asul iubirii",
    price: "1000 lei",
    description: "Cercei în miniatură ce înfățișează simbolul inimii.",
    gender: "femei",
    type: "cercei"
  },
  70: {
    name: "Inima de catifea",
    price: "1400 lei",
    description: "Cercei delicați în forma unei inimi strălucitoare.",
    gender: "femei",
    type: "cercei"
  },
  71: {
    name: "Înflorire",
    price: "1490 lei",
    description: "Cercei ce aduc frumusețea unei flori în plină înflorire.",
    gender: "femei",
    type: "cercei"
  },
  72: {
    name: "Petale de grădină",
    price: "1000 lei",
    description: "Colier rafinat ce surprinde grația naturii.",
    gender: "femei",
    type: "lanturi"
  },
  73: {
    name: "Atingerea mentei",
    price: "1200 lei",
    description: "Colier diafan, cu reflexe translucide și tonuri de verde mentă.",
    gender: "femei",
    type: "lanturi"
  },
  74: {
    name: "Petale de lumină",
    price: "890 lei",
    description: "Un dans subtil al petalelor fine, surprins în detalii prețioase.",
    gender: "femei",
    type: "lanturi"
  },
  75: {
    name: "Vis de catifea",
    price: "1300 lei",
    description: "Bijuterie fină ca un vis, cu accente roz și reflexe liliachii.",
    gender: "femei",
    type: "lanturi"
  },
  76: {
    name: "Rafinament perlat",
    price: "1350 lei",
    description: "Inspirat de frumusețea naturală a perlelor și finețea florilor.",
    gender: "femei",
    type: "lanturi"
  },
  77: {
    name: "Linia eleganței",
    price: "1400 lei",
    description: "Colier lariat cu design fluid și sofisticat.",
    gender: "femei",
    type: "lanturi"
  },
  78: {
    name: "Simbolul purității",
    price: "1300 lei",
    description: "Bijuterie ce poartă în sine echilibrul perfect dintre spiritualitate și stil.",
    gender: "femei",
    type: "lanturi"
  },
  79: {
    name: "Nod de catifea",
    price: "1350 lei",
    description: "Colier ce îmbină rafinamentul cu un strop de romantism modern.",
    gender: "femei",
    type: "lanturi"
  },
  80: {
    name: "Inima perlei",
    price: "1200 lei",
    description: "Simbol al iubirii pure și al eleganței atemporale.",
    gender: "femei",
    type: "lanturi"
  },
  81: {
    name: "Scânteia Celestă",
    price: "1350 lei",
    description: "Brățară cu accente mov eterice, misterioasă și elegantă.",
    gender: "femei",
    type: "bratari"
  },
  82: {
    name: "Averie Élégance",
    price: "1000 lei",
    description: "Talisman al rafinamentului modern.",
    gender: "femei",
    type: "bratari"
  },
  83: {
    name: "Zborul Delicat",
    price: "1400 lei",
    description: "Brățară inspirată de dansul ușor al unui fluture.",
    gender: "femei",
    type: "bratari"
  },
  84: {
    name: "Aura Celestă",
    price: "1000 lei",
    description: "Talisman al frumuseții eterne.",
    gender: "femei",
    type: "bratari"
  },
  85: {
    name: "Cristal Rose",
    price: "2000 lei",
    description: "Dans subtil între lumină și finețe.",
    gender: "femei",
    type: "bratari"
  },
  86: {
    name: "Raze Divine",
    price: "1299 lei",
    description: "Joc delicat între lumină și spirit.",
    gender: "femei",
    type: "bratari"
  },
  87: {
    name: "Esenta Norocului",
    price: "2300 lei",
    description: "Eleganță discretă, în care fiecare trifoi devine o promisiune.",
    gender: "femei",
    type: "bratari"
  },
  88: {
    name: "Petale de margaretă",
    price: "1300 lei",
    description: "Flori aurii și accente de perle radiază eleganță și grație.",
    gender: "femei",
    type: "bratari"
  },
  89: {
    name: "Floare de Cristal",
    price: "1200 lei",
    description: "Bijuterie delicată ce radiază grație și eleganță subtilă.",
    gender: "femei",
    type: "bratari"
  },
  90: {
    name: "Ceas Dextera lux",
    price: "3000 lei",
    description: "Ceas elvețian, elegant și strălucitor.",
    gender: "femei",
    type: "ceasuri"
  },
  91: {
    name: "Ceas Dextera chain",
    price: "3000 lei",
    description: "Ceas purtat pe lanț gourmette reglabil, plin de rafinament.",
    gender: "femei",
    type: "ceasuri"
  },
  92: {
    name: "Ceas Illumina",
    price: "5200 lei",
    description: "Ceas elvețian cu brățară reglabilă și cristale roz.",
    gender: "femei",
    type: "ceasuri"
  },
  93: {
    name: "Ceas Matrix Bangle",
    price: "3100 lei",
    description: "Ceas inspirat de bijuterii, cu design în nuanță roz aurie.",
    gender: "femei",
    type: "ceasuri"
  },
  94: {
    name: "Ceas Nova Chrono",
    price: "4200 lei",
    description: "Ceas sport de lux, lucrat pentru a evidenția măiestria designului.",
    gender: "femei",
    type: "ceasuri"
  },
  95: {
    name: "Ceas Octea Chrono",
    price: "4000 lei",
    description: "Ceas elegant amplificat cu cristale.",
    gender: "femei",
    type: "ceasuri"
  },
  96: {
    name: "Ceas Nova Octea",
    price: "4200 lei",
    description: "Ceas sport de lux cu lunetă din cristal fațetat.",
    gender: "femei",
    type: "ceasuri"
  },
  97: {
    name: "Ceas Octea moon",
    price: "5000 lei",
    description: "Ceas ce unește rafinat trecerea timpului cu ciclul lunar.",
    gender: "femei",
    type: "ceasuri"
  },
  98: {
    name: "Ceas Crystalline lustre",
    price: "3900 lei",
    description: "Ceas jucăuș cu cristale într-o nuanță vibrantă de albastru.",
    gender: "femei",
    type: "ceasuri"
  },
  99: {
    name: "Bratara din aur galben cu pandantive",
    price: "2300 lei",
    description: "Bijuterie creată pentru cele mai frumoase momente din copilărie.",
    gender: "copii",
    type: "bratari"
  },
  100: {
    name: "Bratara cu pandantive supereroi",
    price: "1200 lei",
    description: "Charmuri colorate ce inspiră curaj, imaginație și bucuria aventurii.",
    gender: "copii",
    type: "bratari"
  },
  101: {
    name: "Bratara pentru copii din aur alb",
    price: "5300 lei",
    description: "Brățară pentru copii din aur alb, inspirată de libertatea copilăriei.",
    gender: "copii",
    type: "bratari"
  },
  102: {
    name: "Bratara floare de tei",
    price: "3200 lei",
    description: "Brățară pentru copii cu pandantiv delicat floare de tei.",
    gender: "copii",
    type: "bratari"
  },
  103: {
    name: "Bratara din aur galben cu charmuri",
    price: "4000 lei",
    description: "Design fluid, perfect pentru look-ul de zi cu zi.",
    gender: "copii",
    type: "bratari"
  },
  104: {
    name: "Bratara cu pandantiv ursulet",
    price: "4000 lei",
    description: "Simbol al purității și al bucuriei autentice.",
    gender: "copii",
    type: "bratari"
  },
  105: {
    name: "Bratara cu pandantiv ursulet din aur alb",
    price: "4200 lei",
    description: "Notă veselă și luminoasă în fiecare zi.",
    gender: "copii",
    type: "bratari"
  },
  106: {
    name: "Bratara din aur galben cu charm curcubeu",
    price: "4440 lei",
    description: "Surprinde magia copilăriei prin inserții multicolore.",
    gender: "copii",
    type: "bratari"
  },
  107: {
    name: "Bratara cu pandantiv buburuza",
    price: "3900 lei",
    description: "Design gingaș și vesel, perfect pentru amintirile copilăriei.",
    gender: "copii",
    type: "bratari"
  },
  108: {
    name: "Lant cu pandantiv unicorn",
    price: "3000 lei",
    description: "Creat special pentru copii, aducând magie și strălucire.",
    gender: "copii",
    type: "lanturi"
  },
  109: {
    name: "Lant cu pandantive flori de tei",
    price: "2000 lei",
    description: "Univers plin de culoare și visare.",
    gender: "copii",
    type: "lanturi"
  },
  110: {
    name: "Lant cu pandantiv unicorn auriu",
    price: "1000 lei",
    description: "Strop de magie din lumea copilăriei.",
    gender: "copii",
    type: "lanturi"
  },
  111: {
    name: "Lant cu pandantiv ursulet",
    price: "2000 lei",
    description: "Creat pentru a aduce bucurie și strălucire în fiecare zi.",
    gender: "copii",
    type: "lanturi"
  },
  112: {
    name: "Lant cu pandantiv curcubeu",
    price: "3000 lei",
    description: "Inspirat de libertatea și imaginația copilăriei.",
    gender: "copii",
    type: "lanturi"
  },
  113: {
    name: "Lant cu pandantiv fluture",
    price: "4000 lei",
    description: "Surprinde libertatea și energia pozitivă.",
    gender: "copii",
    type: "lanturi"
  },
  114: {
    name: "Lant cu pandantiv pisicuta",
    price: "3000 lei",
    description: "Bijuterie delicată pentru momente pure ale copilăriei.",
    gender: "copii",
    type: "lanturi"
  },
  115: {
    name: "Dragoste Dincolo de Moarte",
    price: "1000 lei",
    description: "Detalii fine și contrast puternic, cu o inimă roșie simbolică.",
    gender: "femei",
    type: "alte"
  },
  125: {
    name: "Trandafiri Eterni (men)",
    price: "3880 lei",
    description: "Inel elegant din metal cu design floral rafinat.",
    gender: "barbati",
    type: "inele"
  },
  126: {
    name: "Broșa Doamnei",
    price: "450 lei",
    description: "Broșă rafinată cu clopoței roz și perle mici.",
    gender: "femei",
    type: "brose"
  },
  132: {
    name: "Azul",
    price: "5455 lei",
    description: "Inel ca o poveste spusă în șoaptă — aur împletit cu albastrul cerului.",
    gender: "femei",
    type: "inele"
  },
  133: {
    name: "Fine Line Ring",
    price: "4800 lei",
    description: "Inel de aur dublu și deschis, ecou al eleganței simple.",
    gender: "femei",
    type: "inele"
  },
  134: {
    name: "Constelație",
    price: "6640 lei",
    description: "Inel din argint inspirat de cerul nopții — stele și luni gravate.",
    gender: "barbati",
    type: "inele"
  },
  135: {
    name: "Rosé Embrace",
    price: "1450,99 lei",
    description: "Lănțișor romantic și rafinat.",
    gender: "femei",
    type: "lanturi"
  },
  137: {
    name: "Panseluța Nocturnă",
    price: "120 lei",
    description: "Broșă în nuanțe de mov și alb, cu farmec floral.",
    gender: "femei",
    type: "brose"
  },
  139: {
    name: "Bow Earrings",
    price: "2030 lei",
    description: "Cercei roșii cu accente aurii și farmec festiv.",
    gender: "femei",
    type: "cercei"
  },
  142: {
    name: "Ruby Charm Earrings",
    price: "3400 lei",
    description: "Cercei eleganți cu detalii roșii și notă sofisticată.",
    gender: "femei",
    type: "cercei"
  },
  4: {
    name: "Miezul Nopții",
    price: "3500 lei",
    description: "Ceas cu design gotic, inspirat de misterul nopții de Halloween — pentru cei care poartă întunericul cu eleganță.",
    gender: "barbati",
    type: "ceasuri"
  },
  8: {
    name: "Golden Bow Ring",
    price: "2200 lei",
    description: "Inel auriu cu fundiță delicată și pietre roz — grație feminină, purtată pe deget.",
    gender: "femei",
    type: "inele"
  },
  11: {
    name: "Lalea de Fildeș",
    price: "380 lei",
    description: "Broșă aurie cu lalea sculptată, combinând sidefata abalone cu perla naturală.",
    gender: "femei",
    type: "brose"
  },
  13: {
    name: "Fleur d'Or",
    price: "1890 lei",
    description: "Brățară aurie cu charm floral delicat — eleganță botanică la purtător.",
    gender: "femei",
    type: "bratari"
  },
  16: {
    name: "Violette Ring Set",
    price: "3500 lei",
    description: "Set de inele cu pietre violet — purtate împreună, spun o poveste completă.",
    gender: "femei",
    type: "inele"
  },
  18: {
    name: "Orbis Argentum",
    price: "3200 lei",
    description: "Colier masculin din argint cu medalion circular gravat — simbol al perfecțiunii.",
    gender: "barbati",
    type: "lanturi"
  },
  26: {
    name: "Fulg de Nea",
    price: "1650 lei",
    description: "Brățară din argint cu charm fulg de nea — delicată ca prima ninsoare.",
    gender: "femei",
    type: "bratari"
  },
  29: {
    name: "Orhidee Albastră",
    price: "290 lei",
    description: "Broșă în forma unei orhidee albastre — rafinament floral în miniatură.",
    gender: "femei",
    type: "brose"
  },
  31: {
    name: "Hortensia Mov",
    price: "320 lei",
    description: "Broșă cu buchet de hortensie violet — feminitate și grație în fiecare petal.",
    gender: "femei",
    type: "brose"
  },
  35: {
    name: "Brândușe de Primăvară",
    price: "1100 lei",
    description: "Cercei cu brândușe violet — parfumul primăverii prins în metal.",
    gender: "femei",
    type: "cercei"
  },
  36: {
    name: "Crocus Argintiu",
    price: "1450 lei",
    description: "Colier din argint cu pandantiv brândușă — simbol al renașterii și speranței.",
    gender: "femei",
    type: "lanturi"
  },
  37: {
    name: "Zar Norocos",
    price: "1800 lei",
    description: "Colier masculin cu pandantiv zaruri — pentru cei care câștigă mereu.",
    gender: "barbati",
    type: "lanturi"
  },
  39: {
    name: "Mielul și Steaua",
    price: "2200 lei",
    description: "Colier pentru copii cu pandantiv mielușel și steluță — puritate și magie în fiecare zi.",
    gender: "copii",
    type: "lanturi"
  },
  40: {
    name: "Stea Căzătoare",
    price: "1300 lei",
    description: "Brățară din argint cu charm steluță — pentru cei care visează cu ochii deschiși.",
    gender: "femei",
    type: "bratari"
  },
  41: {
    name: "Liliac în Floare",
    price: "980 lei",
    description: "Cercei cu buchețel de liliac violet — parfum de mai prins în argint.",
    gender: "femei",
    type: "cercei"
  },
  42: {
    name: "Panseluța Violet",
    price: "1580 lei",
    description: "Inel cu panseluță violet pictată — floarea care zâmbește la tot ce-o privești.",
    gender: "femei",
    type: "inele"
  },
  43: {
    name: "Floare cu Perlă",
    price: "260 lei",
    description: "Broșă romantică cu floare roz și perlă centrală — feminitate simplă și elegantă.",
    gender: "femei",
    type: "brose"
  },
  49: {
    name: "Stelar Triple Chain",
    price: "2100 lei",
    description: "Colier din trei lanțuri de argint unite de un pandantiv stea — pentru femei care strălucesc.",
    gender: "femei",
    type: "lanturi"
  },
  50: {
    name: "Narcisă Bicolor",
    price: "1250 lei",
    description: "Cercei stud cu narcisă argintie și centru auriu — primăvara purtată la urechi.",
    gender: "femei",
    type: "cercei"
  },
  52: {
    name: "Violet Bloom Necklace",
    price: "1600 lei",
    description: "Lanț de argint cu pandantiv floare violet — discret, delicat, irezistibil.",
    gender: "femei",
    type: "lanturi"
  },
  58: {
    name: "Wave Diamond Ring",
    price: "4900 lei",
    description: "Inel din aur cu formă ondulată și diamante — ca valul mării prins în aur.",
    gender: "femei",
    type: "inele"
  },
  60: {
    name: "Dragon Ring",
    price: "3600 lei",
    description: "Inel masculin din argint cu dragon sculptat — putere și mister pe deget.",
    gender: "barbati",
    type: "inele"
  },
  116: {
    name: "Lacramioare de Aur",
    price: "3800 lei",
    description: "Colier din aur cu lăcrămioare fine — puritate și delicatețe în fiecare detaliu.",
    gender: "femei",
    type: "lanturi"
  },
  117: {
    name: "Ceas Inimă de Argint",
    price: "4500 lei",
    description: "Ceas feminin cu carcasă în formă de inimă — pentru cele care duc iubirea la purtător.",
    gender: "femei",
    type: "ceasuri"
  },
  123: {
    name: "Violet Fleur Bracelet",
    price: "2700 lei",
    description: "Brățară din aur ornată cu pietre florale violet — opulență botanică la purtător.",
    gender: "femei",
    type: "bratari"
  },
  124: {
    name: "White Blossom Ring",
    price: "3200 lei",
    description: "Inel din aur cu detalii florale albe — eleganță pură și feminitate rafinată.",
    gender: "femei",
    type: "inele"
  },
  127: {
    name: "Bold Star Ring",
    price: "2450 lei",
    description: "Inel masculin din argint masiv în formă de stea — prezență puternică, stil distinct.",
    gender: "barbati",
    type: "inele"
  },
  128: {
    name: "Iris Auriu",
    price: "3100 lei",
    description: "Colier din aur cu pandantiv iris albastru — pictura naturii suspendată la gât.",
    gender: "femei",
    type: "lanturi"
  },
  129: {
    name: "Narcisă de Argint",
    price: "1950 lei",
    description: "Colier din argint cu pandantiv narcisă — discret și plin de grație.",
    gender: "femei",
    type: "lanturi"
  },
  130: {
    name: "Iepurașul de Argint",
    price: "1800 lei",
    description: "Colier pentru copii cu pandantiv iepuraș — blândețe și joacă la purtător.",
    gender: "copii",
    type: "lanturi"
  },
  131: {
    name: "Bambi Ring",
    price: "1700 lei",
    description: "Inel din argint cu pui de căprioară sculptat — delicat și plin de farmec.",
    gender: "femei",
    type: "inele"
  },
  136: {
    name: "Iris Deschis",
    price: "1900 lei",
    description: "Inel deschis din aur cu iris albastru emailat și boboc cu cristal violet — natură prinsă în bijuterie.",
    gender: "femei",
    type: "inele"
  },
  140: {
    name: "Inimă Regală",
    price: "2600 lei",
    description: "Inel din aur cu inimă din diamant roz și filigran — pentru femeia care poartă dragostea cu eleganță.",
    gender: "femei",
    type: "inele"
  },
  141: {
    name: "Pietre de Râu",
    price: "2300 lei",
    description: "Colier din argint cu pandantiv pietre rotunjite stivuite — minimalismul naturii la purtător.",
    gender: "barbati",
    type: "lanturi"
  }
};

function parsePrice(price) {
  const value = String(price)
    .replace(/\s+/g, "")
    .replace("lei", "")
    .replace(/\./g, "")
    .replace(",", ".");
  return parseFloat(value) || 0;
}

function formatPrice(value) {
  return new Intl.NumberFormat("ro-RO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value) + " lei";
}

function getValidProducts() {
  return Object.entries(productData)
    .map(([id, product]) => ({ id: Number(id), ...product }))
    .filter(product => product.name && product.price && product.description)
    .sort((a, b) => a.id - b.id);
}

function getProductById(productId) {
  const product = productData[productId];
  if (!product) return null;
  return { id: Number(productId), ...product };
}

function getImagePath(index, imageElement) {
  let extensionIndex = 0;

  function tryNextImage() {
    if (extensionIndex >= imageExtensions.length) {
      imageElement.src = "logo.png";
      return;
    }

    imageElement.src = "produse/" + index + "." + imageExtensions[extensionIndex];

    imageElement.onerror = function () {
      extensionIndex++;
      tryNextImage();
    };
  }

  tryNextImage();
}

function showNotification(message) {
  const notification = document.getElementById("site-notification");
  if (!notification) return;

  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 2200);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cartCount");
  const cartHeaderCount = document.getElementById("cartHeaderCount");

  if (cartCount) cartCount.textContent = count;
  if (cartHeaderCount) cartHeaderCount.textContent = count > 0 ? `(${count})` : "";
}

function addToCart(productId, sourceEl) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartCount();
  renderCart();
  flyToCart(sourceEl);
  showNotification("Produsul a fost adăugat în coș.");
}

function flyToCart(sourceEl) {
  const cartBtn = document.querySelector(".cart-toggle");
  if (!cartBtn) return;

  const cartRect = cartBtn.getBoundingClientRect();

  // Starting position: near source element or center of viewport
  let startX = window.innerWidth / 2;
  let startY = window.innerHeight / 2;
  if (sourceEl) {
    const r = sourceEl.getBoundingClientRect();
    startX = r.left + r.width / 2;
    startY = r.top + r.height / 2;
  }

  const gem = document.createElement("div");
  gem.className = "fly-gem";
  gem.style.left = startX + "px";
  gem.style.top  = startY + "px";
  document.body.appendChild(gem);

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      gem.style.left    = (cartRect.left + cartRect.width / 2) + "px";
      gem.style.top     = (cartRect.top  + cartRect.height / 2) + "px";
      gem.style.opacity = "0";
      gem.style.transform = "translate(-50%, -50%) scale(0.2)";
    });
  });

  setTimeout(function () {
    gem.remove();
    cartBtn.classList.add("bouncing");
    setTimeout(() => cartBtn.classList.remove("bouncing"), 450);
  }, 650);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function changeCartQuantity(productId, change) {
  const cart = getCart();
  const item = cart.find(entry => entry.id === productId);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart(cart);
  updateCartCount();
  renderCart();
}

function clearCart() {
  saveCart([]);
  updateCartCount();
  renderCart();
  showNotification("Coșul a fost golit.");
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (!cartItems || !cartTotal) return;

  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="cart-empty">Coșul este gol</p>';
    cartTotal.textContent = "0,00 lei";
    return;
  }

  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = parsePrice(item.price) * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    // Product image
    const img = document.createElement("img");
    img.className = "cart-item-img";
    img.alt = item.name;
    getImagePath(item.id, img);

    // Body
    const body = document.createElement("div");
    body.className = "cart-item-body";

    body.innerHTML = `
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.price}</p>
      </div>
      <div class="cart-item-actions">
        <button onclick="changeCartQuantity(${item.id}, -1)">−</button>
        <span>${item.quantity}</span>
        <button onclick="changeCartQuantity(${item.id}, 1)">+</button>
      </div>
      <div class="cart-item-remove">
        <button onclick="removeFromCart(${item.id})">Șterge</button>
      </div>
    `;

    cartItem.appendChild(img);
    cartItem.appendChild(body);
    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = formatPrice(total);
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");

  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("open");
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const overlay = document.getElementById("cartOverlay");

  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
}

function toggleCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;

  if (drawer.classList.contains("open")) {
    closeCart();
  } else {
    openCart();
  }
}

function askProductWhatsApp(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const message = `Bună! Sunt interesat(ă) de produsul "${product.name}" (${product.price}).`;
  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function sendOrderWhatsApp() {
  const cart = getCart();

  if (cart.length === 0) {
    showNotification("Coșul este gol.");
    return;
  }

  let total = 0;
  let message = "Bună! Doresc să comand următoarele produse:%0A%0A";

  cart.forEach((item, index) => {
    const itemTotal = parsePrice(item.price) * item.quantity;
    total += itemTotal;
    message += `${index + 1}. ${item.name} - ${item.price} x ${item.quantity}%0A`;
  });

  message += `%0A Total: ${formatPrice(total)}`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
  window.open(url, "_blank");
}

let _currentModalProductId = null;

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;
  _currentModalProductId = productId;
  addRecentlyViewed(productId);

  const overlay = document.getElementById("productModalOverlay");
  const modal = document.getElementById("productModal");
  const image = document.getElementById("productModalImage");
  const category = document.getElementById("productModalCategory");
  const title = document.getElementById("productModalTitle");
  const description = document.getElementById("productModalDescription");
  const price = document.getElementById("productModalPrice");
  const cartBtn = document.getElementById("productModalCartBtn");
  const whatsappBtn = document.getElementById("productModalWhatsAppBtn");

  if (!overlay || !modal || !image || !category || !title || !description || !price || !cartBtn || !whatsappBtn) {
    return;
  }

  getImagePath(product.id, image);
  category.textContent = `${product.gender} • ${product.type}`;
  title.textContent = product.name;
  description.textContent = product.description;
  price.textContent = product.price;

  // Live viewers — pseudo-random but consistent per product
  const viewersEl = document.getElementById("liveViewersText");
  if (viewersEl) {
    const count = ((product.id * 7 + 3) % 6) + 2; // 2–7
    viewersEl.textContent = count + " persoane se uită acum la acest produs";
  }

  cartBtn.onclick = function () {
    addToCart(product.id, document.getElementById("productModalImage"));
  };

  whatsappBtn.onclick = function () {
    askProductWhatsApp(product.id);
  };

  // Share button
  const shareBtn = document.getElementById("shareProductBtn");
  if (shareBtn) shareBtn.onclick = function () { shareProduct(productId); };

  // Ring size guide — only for rings
  const sizeGuideBtn = document.getElementById("sizeGuideBtn");
  if (sizeGuideBtn) sizeGuideBtn.style.display = product.type === "inele" ? "inline-block" : "none";

  // Reset qty
  const qtyEl = document.getElementById("modalQtyVal");
  if (qtyEl) qtyEl.textContent = "1";

  // Stock urgency badge
  const stockBadge = document.getElementById("modalStockBadge");
  if (stockBadge) {
    const left = PRODUCT_STOCK[product.id];
    if (left) {
      stockBadge.textContent = "⚠ Doar " + left + " bucăți rămase!";
      stockBadge.style.display = "block";
    } else {
      stockBadge.style.display = "none";
    }
  }

  // Wire cart btn to qty
  cartBtn.onclick = function () {
    const qty = parseInt(document.getElementById("modalQtyVal").textContent, 10) || 1;
    for (let i = 0; i < qty; i++) addToCart(product.id, document.getElementById("productModalImage"));
  };

  // Related products
  renderModalRelated(product);

  overlay.classList.add("show");
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(renderRecentlyViewed, 50);
}

function closeProductModal() {
  const overlay = document.getElementById("productModalOverlay");
  const modal = document.getElementById("productModal");

  if (overlay) overlay.classList.remove("show");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "product-card reveal";
  revealObserver.observe(card);

  // ── 3D TILT ──
  card.addEventListener("mouseenter", function () {
    card.style.transition = "transform 0.08s ease";
  });
  card.addEventListener("mousemove", function (e) {
    if (!card.classList.contains("visible")) return;
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    card.style.transform = "perspective(700px) rotateY(" + (dx * 9) + "deg) rotateX(" + (-dy * 6) + "deg) translateY(-8px) scale(1.02)";
  });
  card.addEventListener("mouseleave", function () {
    card.style.transition = "transform 0.55s cubic-bezier(0.16,1,0.3,1)";
    card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
    setTimeout(function () { card.style.transform = ""; card.style.transition = ""; }, 560);
  });

  // Image wrap — clips zoom, preserves card shadow
  const wrap = document.createElement("div");
  wrap.className = "product-image-wrap";
  wrap.addEventListener("click", function () { openProductModal(product.id); });

  const badgeKey = PRODUCT_BADGES[product.id];
  if (badgeKey) {
    const badgeEl = document.createElement("div");
    const cls = badgeKey === "NOU" ? "badge-nou" : badgeKey === "POPULAR" ? "badge-popular" : "badge-oferta";
    badgeEl.className = "product-badge " + cls;
    badgeEl.textContent = badgeKey;
    wrap.appendChild(badgeEl);
  }

  // Stock urgency badge
  if (PRODUCT_STOCK[product.id]) {
    const stockBadge = document.createElement("div");
    stockBadge.className = "badge-stock";
    stockBadge.textContent = "Doar " + PRODUCT_STOCK[product.id] + " rămase!";
    wrap.appendChild(stockBadge);
  }

  // Wishlist heart button
  const wlBtn = document.createElement("button");
  wlBtn.className = "wishlist-btn";
  wlBtn.setAttribute("aria-label", "Favorite");
  updateWishlistBtn(wlBtn, isWishlisted(product.id));
  wlBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleWishlist(product.id, wlBtn);
  });
  wrap.appendChild(wlBtn);

  const img = document.createElement("img");
  img.className = "product-image";
  img.alt = product.name;
  img.loading = "lazy";
  getImagePath(product.id, img);
  wrap.appendChild(img);

  const h3 = document.createElement("h3");
  h3.textContent = product.name;
  h3.style.cursor = "pointer";
  h3.addEventListener("click", function () {
    openProductModal(product.id);
  });

  const p = document.createElement("p");
  p.textContent = product.description;

  const span = document.createElement("span");
  span.textContent = product.price;

  const actions = document.createElement("div");
  actions.className = "product-card-actions";

  const cartBtn = document.createElement("button");
  cartBtn.className = "primary-card-btn";
  cartBtn.textContent = "Adaugă în coș";
  cartBtn.addEventListener("click", function () {
    addToCart(product.id, wrap);
  });
  // ── MAGNETIC ──
  cartBtn.addEventListener("mousemove", function (e) {
    const r = cartBtn.getBoundingClientRect();
    const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    cartBtn.style.transform = "translate(" + (dx * 5) + "px, " + (dy * 3) + "px)";
  });
  cartBtn.addEventListener("mouseleave", function () {
    cartBtn.style.transform = "";
  });

  const detailsBtn = document.createElement("button");
  detailsBtn.className = "secondary-card-btn";
  detailsBtn.textContent = "Detalii";
  detailsBtn.addEventListener("click", function () {
    openProductModal(product.id);
  });

  actions.appendChild(cartBtn);
  actions.appendChild(detailsBtn);

  card.appendChild(wrap);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(span);
  card.appendChild(actions);

  return card;
}

function filterProducts(products, searchValue, priceFilter) {
  let filtered = [...products];

  if (searchValue) {
    const search = searchValue.trim().toLowerCase();
    filtered = filtered.filter(product =>
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  }

  if (priceFilter && priceFilter !== "toate") {
    filtered = filtered.filter(product => {
      const price = parsePrice(product.price);

      if (priceFilter === "0-1500") return price >= 0 && price <= 1500;
      if (priceFilter === "1500-3000") return price > 1500 && price <= 3000;
      if (priceFilter === "3000-6000") return price > 3000 && price <= 6000;
      if (priceFilter === "6000+") return price > 6000;

      return true;
    });
  }

  return filtered;
}

function renderSkeletons(gridId, count) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = "";
  for (let i = 0; i < (count || 8); i++) {
    const sk = document.createElement("div");
    sk.className = "product-card skeleton-card";
    sk.innerHTML = `
      <div class="skeleton-img shimmer"></div>
      <div class="skeleton-line w70 shimmer"></div>
      <div class="skeleton-line w50 shimmer"></div>
      <div class="skeleton-line w40 shimmer"></div>
    `;
    grid.appendChild(sk);
  }
}

function renderHomepageProducts(gridId, searchInputId, priceFilterId) {
  const grid = document.getElementById(gridId);
  const searchInput = document.getElementById(searchInputId);
  const priceSelect = document.getElementById(priceFilterId);

  if (!grid) return;

  const allProducts = getValidProducts();
  const searchValue = searchInput ? searchInput.value : "";
  const priceFilter = priceSelect ? priceSelect.value : "toate";
  const sortSelect = document.getElementById("sortFilter");
  const sortValue = sortSelect ? sortSelect.value : "noutati";
  const isFiltering = searchValue !== "" || (priceFilter && priceFilter !== "toate");

  const filtered = filterProducts(allProducts, searchValue, priceFilter);
  const products = sortProducts(filtered, sortValue);

  // Show skeletons only on initial unfiltered load
  if (!isFiltering && sortValue === "noutati") {
    renderSkeletons(gridId, 8);
    setTimeout(function () {
      grid.innerHTML = "";
      if (products.length === 0) {
        grid.innerHTML = '<p class="empty-products">Nu există produse care să corespundă filtrării.</p>';
        return;
      }
      products.forEach(product => grid.appendChild(createProductCard(product)));
    }, 180);
    return;
  }

  grid.innerHTML = "";
  if (products.length === 0) {
    grid.innerHTML = '<p class="empty-products">Nu există produse care să corespundă filtrării.</p>';
    return;
  }
  products.forEach(product => grid.appendChild(createProductCard(product)));
}

function renderCategoryPage(gridId, titleId, gender, type, titleText) {
  const grid = document.getElementById(gridId);
  const title = document.getElementById(titleId);

  if (!grid) return;
  if (title) title.textContent = titleText;

  let products = getValidProducts().filter(product => product.gender === gender);

  if (type && type !== "toate") {
    products = products.filter(product => product.type === type);
  }

  grid.innerHTML = "";

  if (products.length === 0) {
    grid.innerHTML = '<p class="empty-products">Nu există produse în această categorie.</p>';
    return;
  }

  products.forEach(product => {
    grid.appendChild(createProductCard(product));
  });
}

function initCategoryPageFromUrl() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  const gender = params.get("gen") || "femei";
  const type = params.get("tip") || "toate";
  const title = params.get("titlu") || "Categorie";

  renderCategoryPage("categoryGrid", "categoryTitle", gender, type, title);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeCart();
    closeProductModal();
  }
});

window.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
  renderCart();
  initCategoryPageFromUrl();
  initScrollProgress();
  initCustomCursor();
  initNewsletter();
  initSplash();
  initLightbox();
  initSparkle();
  initCounters();
  initBackToTop();
  renderRecentlyViewed();
  renderWishlistPage();
  initMagneticButtons();
  initTextReveal();
  initCookieConsent();
  initWheelAutoShow();
  updateWishlistBadge();
  initTypewriter();
  renderTrending();
  initTheme();
  initParallax();
});

/* ── NEWSLETTER POPUP ── */
function initNewsletter() {
  if (localStorage.getItem("jj_nl_shown")) return;
  setTimeout(function () {
    const overlay = document.getElementById("newsletterOverlay");
    if (overlay) overlay.classList.add("show");
  }, 3500);
}

function closeNewsletter() {
  const overlay = document.getElementById("newsletterOverlay");
  if (overlay) overlay.classList.remove("show");
  localStorage.setItem("jj_nl_shown", "1");
}

function subscribeNewsletter() {
  const email = document.getElementById("newsletterEmail");
  if (email && email.value.includes("@")) {
    const box = document.querySelector(".newsletter-box");
    if (box) {
      box.innerHTML = `
        <div class="newsletter-gem">♦</div>
        <h3>Mulțumim!</h3>
        <p style="margin-bottom:0">Vei fi printre primii care află de ofertele noastre.</p>
      `;
    }
    localStorage.setItem("jj_nl_shown", "1");
    setTimeout(closeNewsletter, 2200);
  } else {
    if (email) email.style.borderColor = "#e05";
    setTimeout(() => { if (email) email.style.borderColor = ""; }, 1200);
  }
}

/* ── SCROLL PROGRESS BAR ── */
function initScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.prepend(bar);

  window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + "%";
  }, { passive: true });
}

/* ── CUSTOM DIAMOND CURSOR ── */
function initCustomCursor() {
  // Skip on touch/mobile devices
  if (window.matchMedia("(pointer: coarse)").matches) return;

  document.body.classList.add("has-custom-cursor");

  const gem = document.createElement("div");
  gem.className = "cursor-gem";
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  document.body.appendChild(gem);
  document.body.appendChild(trail);

  let tx = -100, ty = -100;

  document.addEventListener("mousemove", function (e) {
    gem.style.left = e.clientX + "px";
    gem.style.top  = e.clientY + "px";
    tx = e.clientX;
    ty = e.clientY;
    setTimeout(function () {
      trail.style.left = tx + "px";
      trail.style.top  = ty + "px";
    }, 75);
  });

  document.addEventListener("mouseleave", function () {
    gem.style.opacity = "0";
    trail.style.opacity = "0";
  });

  document.addEventListener("mouseenter", function () {
    gem.style.opacity = "1";
    trail.style.opacity = "0.55";
  });

  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("a, button, .product-image-wrap, .product-card, [onclick], .catalog-arrow, .cart-toggle")) {
      gem.classList.add("on-hover");
    } else {
      gem.classList.remove("on-hover");
    }
  });
}

/* ── SPLASH SCREEN ── */
function initSplash() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;
  // Hide after 2.1s (loader animation = 1.8s + buffer)
  setTimeout(function () {
    splash.classList.add("hide");
    setTimeout(function () { splash.remove(); }, 950);
  }, 2100);
}

/* ── LIGHTBOX (full-screen image) ── */
function initLightbox() {
  const overlay = document.createElement("div");
  overlay.id = "lightboxOverlay";
  overlay.className = "lightbox-overlay";
  overlay.innerHTML =
    '<button class="lightbox-close" onclick="closeLightbox()">&#10005;</button>' +
    '<img class="lightbox-img" id="lightboxImg" src="" alt="Produs">' +
    '<span class="lightbox-hint">Click oriunde pentru a închide</span>';
  overlay.addEventListener("click", function (e) {
    if (!e.target.closest(".lightbox-img")) closeLightbox();
  });
  document.body.appendChild(overlay);

  document.addEventListener("click", function (e) {
    const img = e.target.closest("#productModalImage");
    if (img && img.src) openLightbox(img.src);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(src) {
  const overlay = document.getElementById("lightboxOverlay");
  const img = document.getElementById("lightboxImg");
  if (!overlay || !img) return;
  img.src = src;
  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const overlay = document.getElementById("lightboxOverlay");
  if (overlay) overlay.classList.remove("show");
  document.body.style.overflow = "";
}

/* ── SPARKLE PARTICLES ── */
let _sparkleTime = 0;

function spawnSparkle(e) {
  const now = Date.now();
  if (now - _sparkleTime < 85) return;
  _sparkleTime = now;

  const s = document.createElement("div");
  s.className = "sparkle-particle";
  const size = 4 + Math.random() * 7;
  const angle = Math.random() * Math.PI * 2;
  const dist = 28 + Math.random() * 38;
  s.style.cssText =
    "left:" + e.clientX + "px;" +
    "top:" + e.clientY + "px;" +
    "width:" + size + "px;" +
    "height:" + size + "px;" +
    "--tx:" + (Math.cos(angle) * dist) + "px;" +
    "--ty:" + (Math.sin(angle) * dist - 20) + "px;";
  document.body.appendChild(s);
  setTimeout(function () { s.remove(); }, 880);
}

function initSparkle() {
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document.addEventListener("mousemove", function (e) {
    if (e.target.closest(".product-image-wrap, .product-card")) {
      spawnSparkle(e);
    }
  }, { passive: true });
}

/* ── WISHLIST ── */
const WISHLIST_KEY = "jj_wishlist";

function getWishlist() {
  try { return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || []; }
  catch (e) { return []; }
}

function saveWishlist(list) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

function isWishlisted(id) {
  return getWishlist().includes(id);
}

function updateWishlistBtn(btn, active) {
  if (!btn) return;
  btn.textContent = active ? "♥" : "♡";
  btn.classList.toggle("active", active);
  btn.title = active ? "Elimină din favorite" : "Adaugă la favorite";
}

function toggleWishlist(id, btn) {
  const list = getWishlist();
  const idx = list.indexOf(id);
  if (idx === -1) {
    list.push(id);
  } else {
    list.splice(idx, 1);
  }
  saveWishlist(list);
  updateWishlistBtn(btn, list.includes(id));
  updateWishlistBadge();
}

function renderWishlistPage() {
  const grid = document.getElementById("wishlistGrid");
  const emptyMsg = document.getElementById("wishlistEmpty");
  if (!grid) return;
  const list = getWishlist();
  grid.innerHTML = "";
  if (list.length === 0) {
    if (emptyMsg) emptyMsg.style.display = "block";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = "none";
  list.forEach(function (id) {
    const product = getProductById(id);
    if (product) grid.appendChild(createProductCard(product));
  });
}

/* ── SORT PRODUCTS ── */
function sortProducts(products, sortValue) {
  const arr = products.slice();
  if (sortValue === "pret-asc")  return arr.sort(function (a, b) { return parsePrice(a.price) - parsePrice(b.price); });
  if (sortValue === "pret-desc") return arr.sort(function (a, b) { return parsePrice(b.price) - parsePrice(a.price); });
  if (sortValue === "az") return arr.sort(function (a, b) { return a.name.localeCompare(b.name, "ro"); });
  if (sortValue === "za") return arr.sort(function (a, b) { return b.name.localeCompare(a.name, "ro"); });
  // noutati = higher ID first
  return arr.sort(function (a, b) { return b.id - a.id; });
}

/* ── RECENTLY VIEWED ── */
const RECENT_KEY = "jj_recently_viewed";

function addRecentlyViewed(id) {
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem(RECENT_KEY)) || []; } catch (e) {}
  recent = recent.filter(function (x) { return x !== id; });
  recent.unshift(id);
  if (recent.length > 6) recent.length = 6;
  localStorage.setItem(RECENT_KEY, JSON.stringify(recent));
}

function renderRecentlyViewed() {
  const grid = document.getElementById("recentlyViewedGrid");
  const section = document.getElementById("recentlyViewedSection");
  if (!grid || !section) return;
  let recent = [];
  try { recent = JSON.parse(localStorage.getItem(RECENT_KEY)) || []; } catch (e) {}
  if (recent.length === 0) { section.style.display = "none"; return; }
  section.style.display = "";
  grid.innerHTML = "";
  recent.forEach(function (id) {
    const product = getProductById(id);
    if (product) grid.appendChild(createProductCard(product));
  });
}

/* ── SHARE PRODUCT ── */
function shareProduct(productId) {
  const id = productId || _currentModalProductId;
  if (!id) return;
  const url = window.location.origin + window.location.pathname + "?p=" + id;
  const btn = document.getElementById("shareProductBtn");
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(function () {
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = "&#10003; Copiat!";
        setTimeout(function () { btn.innerHTML = orig; }, 2200);
      }
    });
  } else {
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = "&#10003; Copiat!";
      setTimeout(function () { btn.innerHTML = orig; }, 2200);
    }
  }
}

/* ── AUTOCOMPLETE SEARCH ── */
function updateAutocomplete() {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("autocompleteDropdown");
  if (!input || !dropdown) return;

  const val = input.value.trim().toLowerCase();
  if (val.length < 2) { dropdown.style.display = "none"; return; }

  const matches = getValidProducts()
    .filter(p => p.name.toLowerCase().includes(val) || p.type.toLowerCase().includes(val))
    .slice(0, 6);

  if (!matches.length) { dropdown.style.display = "none"; return; }

  dropdown.innerHTML = "";
  matches.forEach(function (p) {
    const item = document.createElement("div");
    item.className = "autocomplete-item";
    const nameHl = p.name.replace(new RegExp("(" + val.replace(/[.*+?^${}()|[\]\\]/g,"\\$&") + ")", "gi"), "<mark>$1</mark>");
    item.innerHTML = '<span class="ac-name">' + nameHl + '</span><span class="ac-price">' + p.price + '</span>';
    item.addEventListener("mousedown", function (e) {
      e.preventDefault();
      input.value = p.name;
      dropdown.style.display = "none";
      openProductModal(p.id);
    });
    dropdown.appendChild(item);
  });
  dropdown.style.display = "block";
}

document.addEventListener("click", function (e) {
  if (!e.target.closest(".search-wrap")) {
    var d = document.getElementById("autocompleteDropdown");
    if (d) d.style.display = "none";
  }
});

/* ── MODAL QUANTITY ── */
function changeModalQty(delta) {
  const el = document.getElementById("modalQtyVal");
  if (!el) return;
  const cur = parseInt(el.textContent, 10) || 1;
  const next = Math.max(1, Math.min(10, cur + delta));
  el.textContent = next;
}

/* ── RELATED PRODUCTS IN MODAL ── */
function renderModalRelated(product) {
  const section = document.getElementById("modalRelated");
  const grid = document.getElementById("modalRelatedGrid");
  if (!section || !grid) return;

  const related = getValidProducts()
    .filter(p => p.id !== product.id && (p.type === product.type || p.gender === product.gender))
    .slice(0, 4);

  if (!related.length) { section.style.display = "none"; return; }

  grid.innerHTML = "";
  related.forEach(function (p) {
    const item = document.createElement("div");
    item.className = "related-item";
    item.addEventListener("click", function () { openProductModal(p.id); });

    const img = document.createElement("img");
    img.className = "related-img";
    img.alt = p.name;
    getImagePath(p.id, img);

    const name = document.createElement("span");
    name.className = "related-name";
    name.textContent = p.name;

    const price = document.createElement("span");
    price.className = "related-price";
    price.textContent = p.price;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);
    grid.appendChild(item);
  });
  section.style.display = "block";
}

/* ── FAQ ACCORDION ── */
function toggleFaq(el) {
  const item = el.closest(".faq-item");
  const isOpen = item.classList.contains("open");
  document.querySelectorAll(".faq-item.open").forEach(function (i) { i.classList.remove("open"); });
  if (!isOpen) item.classList.add("open");
}

/* ── RING SIZE GUIDE ── */
function openSizeGuide() {
  const overlay = document.getElementById("sizeGuideOverlay");
  if (overlay) overlay.classList.add("show");
}

function closeSizeGuide() {
  const overlay = document.getElementById("sizeGuideOverlay");
  if (overlay) overlay.classList.remove("show");
}

/* ── HAMBURGER MOBILE NAV ── */
function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("hamburgerBtn");
  if (!nav || !btn) return;
  const isOpen = nav.classList.toggle("open");
  btn.classList.toggle("open", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMobileNav() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("hamburgerBtn");
  if (nav) nav.classList.remove("open");
  if (btn) btn.classList.remove("open");
  document.body.style.overflow = "";
}

/* ── BACK TO TOP ── */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  window.addEventListener("scroll", function () {
    btn.classList.toggle("visible", window.scrollY > 420);
  }, { passive: true });
  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ── MAGNETIC BUTTONS ── */
function initMagneticButtons() {
  document.querySelectorAll(".cart-checkout, .primary-btn, .cart-wa-ask, .float-asistent-btn").forEach(function (btn) {
    btn.addEventListener("mousemove", function (e) {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) / (r.width / 2);
      const dy = (e.clientY - r.top - r.height / 2) / (r.height / 2);
      btn.style.transform = "translate(" + (dx * 6) + "px, " + (dy * 4) + "px)";
    });
    btn.addEventListener("mouseleave", function () {
      btn.style.transition = "transform 0.4s ease";
      btn.style.transform = "";
      setTimeout(function () { btn.style.transition = ""; }, 400);
    });
  });
}

/* ── TEXT REVEAL ON SCROLL ── */
function initTextReveal() {
  document.querySelectorAll(".section h2").forEach(function (h2) {
    if (h2.dataset.trDone) return;
    h2.dataset.trDone = "1";
    const words = h2.textContent.trim().split(/\s+/);
    h2.innerHTML = words.map(function (w, i) {
      return '<span class="word"><span class="word-inner" style="transition-delay:' + (i * 0.09) + 's">' + w + '</span></span>';
    }).join(" ");
  });
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("tr-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll(".section h2[data-tr-done]").forEach(function (h2) { obs.observe(h2); });
}

/* ── ANIMATED COUNTERS ── */
function initCounters() {
  const items = document.querySelectorAll(".stat-counter[data-target]");
  if (!items.length) return;
  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      const target = parseInt(entry.target.dataset.target, 10);
      const suffix = entry.target.dataset.suffix || "";
      const duration = 1800;
      const stepMs = 16;
      const steps = duration / stepMs;
      let current = 0;
      const interval = setInterval(function () {
        current++;
        const val = Math.round((current / steps) * target);
        entry.target.textContent = (val >= target ? target : val) + suffix;
        if (current >= steps) clearInterval(interval);
      }, stepMs);
    });
  }, { threshold: 0.5 });
  items.forEach(function (item) { obs.observe(item); });
}

/* ── GDPR COOKIE CONSENT ── */
function initCookieConsent() {
  if (localStorage.getItem("jj_cookies")) return;
  setTimeout(function () {
    var banner = document.getElementById("cookieConsent");
    if (banner) banner.classList.add("show");
  }, 1800);
}

function acceptCookies() {
  localStorage.setItem("jj_cookies", "accepted");
  var banner = document.getElementById("cookieConsent");
  if (banner) banner.classList.remove("show");
}

function rejectCookies() {
  localStorage.setItem("jj_cookies", "rejected");
  var banner = document.getElementById("cookieConsent");
  if (banner) banner.classList.remove("show");
}

/* ── WISHLIST BADGE ── */
function updateWishlistBadge() {
  var badge = document.getElementById("wishlistNavBadge");
  if (!badge) return;
  var count = typeof getWishlist === "function" ? getWishlist().length : 0;
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
  if (count > 0) {
    badge.classList.add("pop");
    setTimeout(function () { badge.classList.remove("pop"); }, 350);
  }
}

/* ── TYPEWRITER EFFECT on hero ── */
function initTypewriter() {
  var el = document.querySelector(".hero-video-text");
  if (!el) return;
  var texts = [
    "Descoperă colecțiile Josephine create pentru femei, bărbați și copii.",
    "Bijuterii premium pentru momentele care contează.",
    "Rafinament în fiecare detaliu — colecții exclusive.",
    "Cadoul perfect pentru orice ocazie specială."
  ];
  var idx = 0, char = 0, deleting = false;

  function tick() {
    var txt = texts[idx];
    if (!deleting) {
      char++;
      el.innerHTML = txt.slice(0, char) + '<span class="typewriter-cursor"></span>';
      if (char >= txt.length) { deleting = true; setTimeout(tick, 2800); }
      else setTimeout(tick, 40);
    } else {
      char--;
      el.innerHTML = txt.slice(0, char) + '<span class="typewriter-cursor"></span>';
      if (char === 0) {
        deleting = false;
        idx = (idx + 1) % texts.length;
        setTimeout(tick, 550);
      } else {
        setTimeout(tick, 22);
      }
    }
  }
  setTimeout(tick, 2800);
}

/* ══════════════════════════════════════════════════════════
   JOSEPHINE AI CHAT  —  Google Gemini + fallback offline
   ══════════════════════════════════════════════════════════ */

/* !! ADAUGĂ CHEIA TA GOOGLE GEMINI AICI !!
   Obține-o GRATUIT în 2 minute la: aistudio.google.com → Get API Key */
var GEMINI_API_KEY = "AIzaSyA8QLaLzLTFFeCX-xE3sUE5t7CZbHYiXvs";

var JOSEPHINE_SYSTEM = [
  "Ești Luna, asistenta AI elegantă a magazinului premium Josephine Jewelry din Galați, România. Numele tău este Luna.",
  "Magazinul vinde bijuterii de lux: inele, brățări, coliere, cercei, ceasuri, broșe pentru femei, bărbați și copii.",
  "Materiale: aur 14k și 18k, argint 925, oțel inoxidabil premium, pietre semiprețioase naturale (safir, rubin, ametist, topaz, turmalină, kyanit, labradorit, moonstone).",
  "Prețuri: 500 – 8000 lei în funcție de material și model.",
  "Livrare: 2–5 zile lucrătoare în toată România, ambalaj premium Josephine.",
  "Retur: 30 zile pentru produse nedeterioriate.",
  "Configurator 3D disponibil pe site pentru bijuterii personalizate.",
  "Cod promoțional activ: JOSEPHINE10 (-10%), JJ15 (-15%), TARG20 (-20%).",
  "Contact: WhatsApp 0754334877, email jewelryjosephine715@gmail.com.",
  "Răspunzi EXCLUSIV în română. Ești caldă, elegantă și concisă (2-4 propoziții).",
  "La recomandări, menționează că produsele se văd pe site și se pot adăuga în coș sau configura 3D.",
  "Dacă nu știi exact un produs, recomandă categoria potrivită și invită clientul să navigheze sau să contacteze echipa pe WhatsApp."
].join(" ");

var _chatHistory = [];
var _chatOpen    = false;
var _chatGreeted = false;

function toggleJosephineChat() {
  if (_chatOpen) { closeJosephineChat(); } else { openJosephineChat(); }
}

function openJosephineChat() {
  var chat = document.getElementById("josephineChat");
  var badge = document.getElementById("jchatBadge");
  if (!chat) return;
  chat.classList.add("open");
  _chatOpen = true;
  if (badge) badge.style.display = "none";
  setTimeout(function () {
    var input = document.getElementById("jchatInput");
    if (input) input.focus();
  }, 350);
}

function closeJosephineChat() {
  var chat = document.getElementById("josephineChat");
  if (chat) chat.classList.remove("open");
  _chatOpen = false;
}

function sendSuggestion(text) {
  /* hide suggestion chips */
  var sug = document.getElementById("jchatSuggestions");
  if (sug) sug.style.display = "none";
  var input = document.getElementById("jchatInput");
  if (input) input.value = text;
  sendChatMessage();
}

function sendChatMessage() {
  var input = document.getElementById("jchatInput");
  if (!input) return;
  var text = input.value.trim();
  if (!text) return;
  input.value = "";

  /* Add user bubble */
  appendChatMsg("user", text);
  _chatHistory.push({ role: "user", content: text });

  /* Scroll + disable send */
  var sendBtn = document.querySelector(".jchat-send");
  if (sendBtn) sendBtn.disabled = true;

  /* Typing indicator */
  var typingId = showTypingIndicator();

  /* Call AI */
  callJosephineAI(_chatHistory).then(function (reply) {
    removeTypingIndicator(typingId);
    if (sendBtn) sendBtn.disabled = false;
    appendChatMsg("bot", reply);
    _chatHistory.push({ role: "assistant", content: reply });
    /* Keep last 12 messages to avoid context overflow */
    if (_chatHistory.length > 12) _chatHistory = _chatHistory.slice(-12);
  }).catch(function () {
    removeTypingIndicator(typingId);
    if (sendBtn) sendBtn.disabled = false;
    var errMsg = "Îmi pare rău, am întâmpinat o problemă temporară. Te rog încearcă din nou sau contactează-ne pe WhatsApp la 0754334877.";
    appendChatMsg("bot", errMsg);
  });
}

function appendChatMsg(role, text) {
  var container = document.getElementById("jchatMessages");
  if (!container) return;

  var msg  = document.createElement("div");
  msg.className = "jchat-msg " + (role === "bot" ? "jchat-bot" : "jchat-user");

  var bubble = document.createElement("div");
  bubble.className = "jchat-bubble";
  /* render line breaks */
  bubble.innerHTML = text.replace(/\n/g, "<br>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  msg.appendChild(bubble);
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function showTypingIndicator() {
  var container = document.getElementById("jchatMessages");
  if (!container) return null;
  var id = "typing_" + Date.now();
  var msg = document.createElement("div");
  msg.className = "jchat-msg jchat-bot jchat-typing";
  msg.id = id;
  msg.innerHTML =
    '<div class="jchat-bubble">' +
    '<span class="jchat-typing-dot"></span>' +
    '<span class="jchat-typing-dot"></span>' +
    '<span class="jchat-typing-dot"></span>' +
    '</div>';
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
  return id;
}

function removeTypingIndicator(id) {
  if (!id) return;
  var el = document.getElementById(id);
  if (el) el.remove();
}

/* ── GOOGLE GEMINI CALL ── */
async function callJosephineAI(messages) {
  if (!GEMINI_API_KEY) return josephineFallback(messages);

  try {
    var contents = messages.map(function (m) {
      return { role: m.role === "assistant" ? "model" : "user", parts: [{ text: m.content }] };
    });
    var url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY;
    var res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: contents,
        systemInstruction: { parts: [{ text: JOSEPHINE_SYSTEM }] },
        generationConfig: { maxOutputTokens: 320, temperature: 0.72 }
      })
    });
    if (!res.ok) throw new Error(res.status);
    var data = await res.json();
    return data.candidates[0].content.parts[0].text;
  } catch (e) {
    return josephineFallback(messages);
  }
}

/* ── SMART OFFLINE FALLBACK ── */
var JJ_KB = [
  { k: ["bună","salut","hello","hey","buna ziua","buna seara"],
    r: "Bună ziua! Sunt Luna, asistenta ta Josephine Jewelry. ✦ Cum te pot ajuta astăzi — cauți o bijuterie pentru tine sau un cadou special?" },
  { k: ["mulțumesc","mersi","mulțumiri","ok"],
    r: "Cu mare drag! Dacă mai ai întrebări despre bijuteriile noastre, sunt aici oricând. ✦ O zi frumoasă!" },
  { k: ["inel","logodna","logodnă","cerere","verigheta","verighetă"],
    r: "Inelele noastre de logodnă sunt realizate din **aur 14k sau 18k** cu pietre prețioase — diamant, safir, rubin sau ametist. Prețurile pornesc de la 1.200 lei. Poți crea inelul perfect în **Configuratorul 3D** de pe site! Vrei să afli mai multe despre un model anume?" },
  { k: ["colier","lant","lănțișor","pandantiv","pandant"],
    r: "Colierele Josephine sunt disponibile în **argint 925, aur 14k și 18k**, cu sau fără pietre. Avem modele de la 500 lei — de la coliere fine zi de zi până la piese statement pentru ocazii speciale. Îți recomand să navighezi categoria Lănțișoare pe site!" },
  { k: ["bratara","brățară","bratari","brățări"],
    r: "Brățările noastre pornesc de la 600 lei și sunt disponibile în **argint 925, aur și oțel inoxidabil premium**. Avem modele cu zale, cu pietre sau cu charme. Un cadou minunat! Dorești pentru femei, bărbați sau copii?" },
  { k: ["cercei","cercel"],
    r: "Cerceii Josephine variază de la modele fine cu **pietre semiprețioase** până la cercei statement pentru ocazii speciale. Prețuri între 450 și 3.500 lei. Îi găsești în secțiunea Cercei din meniu!" },
  { k: ["ceas","ceasuri"],
    r: "Ceasurile Josephine combină **eleganța clasică cu mecanisme de precizie**. Disponibile pentru femei și bărbați, cu brățări din oțel, piele sau silicon premium. Prețuri între 800 și 5.000 lei." },
  { k: ["aur","14k","18k","karate","carată"],
    r: "**Aurul 14k** (58,5% aur pur) este mai rezistent și ideal pentru purtare zilnică. **Aurul 18k** (75% aur pur) are o culoare mai bogată și este preferat pentru bijuterii de ocazie. Ambele sunt disponibile în Josephine la prețuri diferite. Care ți se potrivește mai bine?" },
  { k: ["argint","925","sterling"],
    r: "Argintul **925 (sterling silver)** este standardul premium — 92,5% argint pur. Este hipioalergenic, durabil și arată impecabil. Bijuteriile noastre din argint pornesc de la **500 lei** și sunt perfecte pentru purtare zilnică." },
  { k: ["piatră","piatra","safir","rubin","ametist","topaz","diamant","smarald","perle","pietre"],
    r: "Lucrăm cu **pietre semiprețioase naturale**: safir albastru, rubin roșu, ametist violet, topaz albastru, turmalină, kyanit, labradorit și moonstone. Fiecare piatră are o semnificație aparte — spune-mi ocazia și îți recomand piatra potrivită!" },
  { k: ["pret","preț","cost","cât costă","cat costa","buget","ieftin","scump"],
    r: "Colecția Josephine are prețuri între **500 și 8.000 lei**, în funcție de material și model. Avem bijuterii pentru orice buget! În plus, poți folosi codurile promoționale: **JOSEPHINE10** (-10%), **JJ15** (-15%) sau **TARG20** (-20%)." },
  { k: ["reducere","discount","promotie","promoție","cod","cupon"],
    r: "Avem coduri promoționale active: **JOSEPHINE10** pentru 10% reducere, **JJ15** pentru 15% și **TARG20** pentru 20%! Le poți introduce în pagina de comandă la câmpul 'Cod promoțional'. ✦" },
  { k: ["livrare","transport","curier","expediere","trimitere"],
    r: "Livrăm în **toată România în 2–5 zile lucrătoare** prin curier rapid. Fiecare comandă vine în **ambalaj premium Josephine** — cutie elegantă, gata de oferit cadou. Livrarea este la prețuri competitive!" },
  { k: ["retur","schimb","returna","înapoi","inapoi","garantie","garanție"],
    r: "Acceptăm retururi în **30 de zile** de la primire, pentru produse nedeterioriate și în ambalajul original. Contactează-ne pe WhatsApp la **0754334877** sau pe email și ne ocupăm rapid!" },
  { k: ["marime","mărime","mărimea","masura","măsura","numar","număr","talie"],
    r: "Pe site găsești **Ghidul de mărimi Josephine** (butonul 'Ghid mărimi inele' din orice produs). Măsoară circumferința degetului cu o sfoară și compară cu tabelul EU/US. Sau vino la noi și îți măsurăm gratuit!" },
  { k: ["cadou","gift","surpriza","surpriză","aniversare","ziua","onomastica","craciun","crăciun","valentine","indragostiti","îndrăgostiți"],
    r: "Pentru cadouri, recomand: un **inel sau colier din aur cu piatră prețioasă** pentru ea, o **brățară sau ceas** pentru el, și **lănțișor sau brățară din argint** pentru copii. Spune-mi vârsta și bugetul și găsim ceva perfect! ✦" },
  { k: ["configurator","3d","personaliz","custom","gravura","gravură"],
    r: "**Configuratorul 3D Josephine** îți permite să creezi bijuteria visată: alegi materialul (aur/argint), forma, piatra prețioasă și finisajul. Îl găsești în meniu la '✦ Configurator 3D'. Este unic în România!" },
  { k: ["contact","telefon","whatsapp","email","mesaj","sunati","sunați"],
    r: "Ne găsești pe **WhatsApp la 0754334877** (răspundem în cel mai scurt timp) sau pe email la **jewelryjosephine715@gmail.com**. Suntem în Galați, str. Strungarilor nr. 31. Cu drag te ajutăm!" },
  { k: ["copii","copil","fetita","fetiță","baiat","băiat","junior"],
    r: "Pentru copii avem **lănțișoare fine și brățări din argint 925** — hipoalergice, rezistente și adorabile. Prețuri între 500–1.200 lei. Perfecte cadou pentru orice ocazie!" },
  { k: ["barbati","bărbați","barbat","bărbat","masculin","lui"],
    r: "Pentru bărbați avem **inele, lănțișoare și ceasuri** din aur, argint și oțel inoxidabil premium. Designuri moderne, masculine. Prețuri între 600–5.000 lei. Vrei ceva clasic sau mai statement?" },
  { k: ["femei","femeie","ea","dama","damă","ei","fetelor"],
    r: "Colecția feminină Josephine este cea mai bogată — **inele, coliere, brățări, cercei și ceasuri** în stiluri de la minimalist la statement. Prețuri 500–8.000 lei. Care categorie te interesează?" },
  { k: ["material","otel","oțel","inoxidabil","hipoalergenic"],
    r: "Oțelul inoxidabil **316L** este premium, hipoalergenic, rezistent la coroziune și se potrivește perfect pentru purtare zilnică. Bijuteriile din oțel Josephine arată la fel ca argintul și sunt extrem de durabile!" },
  { k: ["ingrijire","îngrijire","pastrare","păstrare","curatare","curățare","lustruit"],
    r: "Bijuteriile Josephine se întretin ușor: **șterge cu o lavetă moale**, evită contactul cu parfumuri și produse chimice, păstrează în cutia originală. Nu purta bijuteriile la duș sau piscină pentru a le menține strălucirea!" },
  { k: ["despre","cine","companie","firma","firmă","brand","josephine"],
    r: "**Josephine Jewelry** este un brand premium de bijuterii din Galați, creat cu pasiune pentru frumos. Fiecare piesă este selecționată cu grijă pentru calitate și estetică. Suntem o firmă de exercițiu a Colegiului Economic 'Virgil Madgearu' Galați. ✦" }
];

function josephineFallback(messages) {
  var last = messages.length ? messages[messages.length - 1].content.toLowerCase() : "";
  for (var i = 0; i < JJ_KB.length; i++) {
    var entry = JJ_KB[i];
    for (var j = 0; j < entry.k.length; j++) {
      if (last.includes(entry.k[j])) return Promise.resolve(entry.r);
    }
  }
  return Promise.resolve(
    "Mulțumesc pentru întrebare! ✦ Pentru detalii specifice despre produse sau prețuri, te invit să navighezi colecțiile noastre pe site sau să ne contactezi direct pe **WhatsApp la 0754334877** — echipa noastră îți răspunde cu drag!"
  );
}

/* Badge on first message if chat is closed */
(function () {
  setTimeout(function () {
    if (!_chatOpen) {
      var badge = document.getElementById("jchatBadge");
      if (badge) badge.style.display = "inline-flex";
    }
  }, 12000);
})();

/* ══════════════════════════════════════════════════════════
   ROATĂ NOROC
   ══════════════════════════════════════════════════════════ */
var _wheelSpun = false;

function initWheelAutoShow() {
  /* Arată roata o singură dată (prima vizită), după splash (~2.8s) */
  if (localStorage.getItem("jj_wheel_seen")) return;
  setTimeout(function () {
    localStorage.setItem("jj_wheel_seen", "1");
    openWheel();
  }, 2800);
}

var WHEEL_PRIZES = [
  { label: "−5%",           code: "LUCKY5",      emoji: "✦", text: "Ai câștigat <strong>5% reducere</strong> la întreaga comandă!", weight: 38 },
  { label: "Transport",     code: "FREEDELIVERY", emoji: "✦", text: "Ai câștigat <strong>transport gratuit</strong> la prima comandă!", weight: 28 },
  { label: "−10%",          code: "LUCKY10",     emoji: "✦", text: "Ai câștigat <strong>10% reducere</strong> la întreaga comandă!", weight: 24 },
  { label: "−15%",          code: "LUCKY15",     emoji: "✦", text: "Felicitări! Ai câștigat <strong>15% reducere</strong> — cea mai mare reducere!", weight: 10 }
];
/* Segment centers (degrees, clockwise from top): 45 / 135 / 225 / 315 */
var WHEEL_ANGLES = [45, 135, 225, 315];

function openWheel() {
  var overlay = document.getElementById("wheelOverlay");
  if (overlay) overlay.classList.add("show");
}

function closeWheel() {
  var overlay = document.getElementById("wheelOverlay");
  if (overlay) overlay.classList.remove("show");
}

function goToWheel() {
  var emailEl = document.getElementById("wheelEmail");
  var email = emailEl ? emailEl.value.trim() : "";
  if (!email || !email.includes("@") || !email.includes(".")) {
    if (emailEl) { emailEl.style.borderColor = "#e05"; setTimeout(function(){ emailEl.style.borderColor = ""; }, 1200); }
    return;
  }
  var key = "jj_wheel_" + email.toLowerCase();
  if (localStorage.getItem(key)) {
    alert("Această adresă de email a participat deja. Încearcă cu altă adresă! 😊");
    return;
  }
  document.getElementById("wheelStep1").style.display = "none";
  document.getElementById("wheelStep2").style.display = "block";
  _wheelSpun = false;
}

function spinWheel() {
  if (_wheelSpun) return;
  _wheelSpun = true;

  var btn = document.getElementById("wheelSpinBtn");
  if (btn) btn.disabled = true;

  /* Weighted random prize */
  var total = WHEEL_PRIZES.reduce(function(s, p){ return s + p.weight; }, 0);
  var rand = Math.random() * total, cumul = 0, prizeIdx = 0;
  for (var i = 0; i < WHEEL_PRIZES.length; i++) {
    cumul += WHEEL_PRIZES[i].weight;
    if (rand <= cumul) { prizeIdx = i; break; }
  }

  var prize = WHEEL_PRIZES[prizeIdx];
  var segCenter = WHEEL_ANGLES[prizeIdx];

  /* Calculate rotation: 6 full spins + land on segment */
  var fullSpins = 6 * 360;
  var landAngle = 360 - segCenter + (Math.random() * 30 - 15); /* ±15° wobble */
  var totalRot = fullSpins + landAngle;

  var wheel = document.getElementById("wheelFace");
  if (wheel) wheel.style.transform = "rotate(" + totalRot + "deg)";

  /* Show result after animation (4s) */
  setTimeout(function() {
    showWheelResult(prize);
    /* Save email so can't spin twice */
    var emailEl = document.getElementById("wheelEmail");
    if (emailEl && emailEl.value) {
      localStorage.setItem("jj_wheel_" + emailEl.value.trim().toLowerCase(), "1");
    }
  }, 4200);
}

function showWheelResult(prize) {
  document.getElementById("wheelStep2").style.display = "none";
  var step3 = document.getElementById("wheelStep3");
  step3.style.display = "block";
  document.getElementById("wheelResultEmoji").textContent = prize.emoji;
  document.getElementById("wheelResultText").innerHTML = prize.text;
  document.getElementById("wheelResultCode").textContent = prize.code;
}

function copyWheelCode() {
  var code = document.getElementById("wheelResultCode");
  var btn = document.getElementById("wheelCopyBtn");
  if (!code) return;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code.textContent).then(function() {
      if (btn) { btn.textContent = "✓ Copiat!"; setTimeout(function(){ btn.textContent = "Copiază"; }, 2000); }
    });
  } else {
    if (btn) { btn.textContent = "✓ Copiat!"; setTimeout(function(){ btn.textContent = "Copiază"; }, 2000); }
  }
}

/* ── DARK / LIGHT THEME ── */
function initTheme() {
  var saved = localStorage.getItem("jj_theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    var btn = document.getElementById("themeToggleBtn");
    if (btn) btn.textContent = "🌙";
  }
}

function toggleTheme() {
  var isLight = document.body.classList.toggle("light-mode");
  localStorage.setItem("jj_theme", isLight ? "light" : "dark");
  var btn = document.getElementById("themeToggleBtn");
  if (btn) btn.textContent = isLight ? "🌙" : "☀";
}

/* ── PARALLAX HERO ── */
function initParallax() {
  var video = document.querySelector(".hero-video");
  var section = document.querySelector(".hero-video-section");
  if (!video || !section) return;
  if (window.matchMedia("(pointer: coarse)").matches) return; // skip on mobile

  window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    var sectionH = section.offsetHeight;
    if (scrollY <= sectionH) {
      video.style.transform = "translateY(" + (scrollY * 0.38) + "px)";
    }
  }, { passive: true });
}

/* ── TRENDING PRODUCTS ── */
function renderTrending() {
  var grid = document.getElementById("trendingGrid");
  if (!grid || typeof getProductById !== "function") return;
  var TRENDING_IDS = [81, 42, 3, 21, 6, 41];
  grid.innerHTML = "";
  TRENDING_IDS.forEach(function (id) {
    var p = getProductById(id);
    if (!p) return;
    var card = createProductCard(p);
    // add HOT badge
    var imgWrap = card.querySelector(".product-image-wrap");
    if (imgWrap) {
      var badge = document.createElement("div");
      badge.className = "trending-badge";
      badge.textContent = "HOT";
      imgWrap.appendChild(badge);
    }
    grid.appendChild(card);
  });
}