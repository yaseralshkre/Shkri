// ═══════════════════════════════════════════════════════
//  THEME ENGINE v2 — Yaser Al-Shkre
//  Include AFTER site-data.js. Works with/without localStorage.
// ═══════════════════════════════════════════════════════

const GOOGLE_FONTS_PAIRS = {
  "Cormorant Garamond": "Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300",
  "Playfair Display":   "Playfair+Display:ital,wght@0,300;0,400;0,700;1,300",
  "Libre Baskerville":  "Libre+Baskerville:ital,wght@0,400;0,700;1,400",
  "EB Garamond":        "EB+Garamond:ital,wght@0,300;0,400;0,500;1,300",
  "DM Serif Display":   "DM+Serif+Display:ital,wght@0,400;1,400",
  "Lora":               "Lora:ital,wght@0,400;0,500;0,700;1,400",
  "DM Sans":            "DM+Sans:wght@300;400;500",
  "Inter":              "Inter:wght@300;400;500;600",
  "Outfit":             "Outfit:wght@300;400;500",
  "Jost":               "Jost:wght@300;400;500",
  "Raleway":            "Raleway:wght@300;400;500;600",
  "Poppins":            "Poppins:wght@300;400;500;600",
  "Tajawal":            "Tajawal:wght@300;400;500;700",
  "Cairo":              "Cairo:wght@300;400;500;700",
  "Almarai":            "Almarai:wght@300;400;700",
  "Noto Kufi Arabic":   "Noto+Kufi+Arabic:wght@300;400;500;700",
  "IBM Plex Sans Arabic":"IBM+Plex+Sans+Arabic:wght@300;400;500",
};

function getTypography() {
  // 1. Try localStorage (works on real hosting)
  try {
    const s = localStorage.getItem(SITE_DATA_KEY);
    if (s) { const d = JSON.parse(s); if (d && d.typography) return d.typography; }
  } catch(e) {}
  // 2. Fall back to DEFAULT_SITE baked into site-data.js
  if (typeof DEFAULT_SITE !== 'undefined' && DEFAULT_SITE.typography)
    return DEFAULT_SITE.typography;
  return null;
}

function applyTheme() {
  const typo = getTypography();
  if (!typo) return;

  const en   = typo.en     || {};
  const ar   = typo.ar     || {};
  const glob = typo.global || {};

  const teal  = glob.teal   || '#2dd4bf';
  const teal3 = shadeColor(teal, -20);
  const black = glob.black  || '#0a0a0a';
  const surf  = glob.surface|| '#161616';
  const bord  = glob.border || '#222222';

  // Load Google Fonts
  const fonts = [en.heading_font, en.body_font, ar.heading_font, ar.body_font].filter(Boolean);
  loadGFonts([...new Set(fonts)]);

  const css = `
:root {
  --teal:  ${teal};
  --teal2: ${teal}22;
  --teal3: ${teal3};
  --black: ${black};
  --white: #f5f3ef;
  --g1:    ${surf};
  --g2:    ${bord};
  --g3:    #333;
  --g4:    ${en.body_color || '#666'};
  --g5:    #aaa;
  --serif: '${en.heading_font||'Cormorant Garamond'}', Georgia, serif;
  --sans:  '${en.body_font||'DM Sans'}', sans-serif;
  --ar:    '${ar.heading_font||'Tajawal'}', sans-serif;
}

/* ── English ── */
html[lang="en"] body {
  font-family: '${en.body_font||'DM Sans'}', sans-serif;
  font-size:   ${en.body_size||'0.92rem'};
  font-weight: ${en.body_weight||'300'};
  color:       ${en.body_color||'#666'};
  line-height: ${en.line_height||'1.7'};
}
html[lang="en"] h1,html[lang="en"] h2,html[lang="en"] h3,html[lang="en"] h4 {
  font-family: '${en.heading_font||'Cormorant Garamond'}', Georgia, serif;
  font-weight: ${en.heading_weight||'300'};
  color:       ${en.heading_color||'#f5f3ef'};
  letter-spacing: ${glob.letter_spacing_en||'0.01em'};
}
html[lang="en"] .hero-h1,html[lang="en"] .page-title-serif { font-size: ${en.heading_size||'clamp(2.6rem,4.6vw,4.4rem)'}; }
html[lang="en"] .sec-title,html[lang="en"] .svc-card-title,html[lang="en"] .contact-big,html[lang="en"] .cta-headline,html[lang="en"] .case-headline { font-size: ${en.section_size||'clamp(1.9rem,3.2vw,2.8rem)'}; }
html[lang="en"] .nav-links a,html[lang="en"] .nav-cta,html[lang="en"] .lang-btn { font-size: ${en.nav_size||'0.76rem'}; }
html[lang="en"] .about-name { font-size: 2.3rem; font-family: '${en.heading_font||'Cormorant Garamond'}', Georgia, serif; font-weight: ${en.heading_weight||'300'}; }

/* ── Arabic ── */
html[lang="ar"] body {
  font-family: '${ar.body_font||'Tajawal'}', sans-serif;
  font-size:   ${ar.body_size||'0.95rem'};
  font-weight: ${ar.body_weight||'300'};
  color:       ${ar.body_color||'#666'};
  line-height: ${ar.line_height||'1.85'};
  letter-spacing: 0;
}
html[lang="ar"] h1,html[lang="ar"] h2,html[lang="ar"] h3,html[lang="ar"] h4 {
  font-family: '${ar.heading_font||'Tajawal'}', sans-serif;
  font-weight: ${ar.heading_weight||'300'};
  color:       ${ar.heading_color||'#f5f3ef'};
  letter-spacing: 0;
}
html[lang="ar"] .hero-h1,html[lang="ar"] .page-title-serif { font-size: ${ar.heading_size||'clamp(2rem,4vw,3.6rem)'}; }
html[lang="ar"] .sec-title,html[lang="ar"] .svc-card-title,html[lang="ar"] .contact-big,html[lang="ar"] .cta-headline,html[lang="ar"] .case-headline { font-size: ${ar.section_size||'clamp(1.7rem,2.8vw,2.4rem)'}; }
html[lang="ar"] .nav-links a,html[lang="ar"] .nav-cta,html[lang="ar"] .lang-btn { font-size: ${ar.nav_size||'0.8rem'}; }
html[lang="ar"] .about-name { font-size: 2rem; font-family: '${ar.heading_font||'Tajawal'}', sans-serif; font-weight: ${ar.heading_weight||'300'}; }

/* ── Accent color everywhere ── */
.sec-label,.ph-label,.hero-label,.stat-accent,.ach-number,.impact-num,
.svc-card-idx,.val-title,.case-tag,.ps-title,.pillar-lbl,
.case-view-all,.modal-tag,.svc-num,.ach-card:hover .ach-label,
.ct-link:hover,.qual-dot,.svc-bullet-dot,.modal-item-dot { color: ${teal} !important; }

.btn-primary,.btn-primary-lg,.f-submit,.modal-cta,
.wa-btn { background: ${teal} !important; }
.btn-primary:hover,.btn-primary-lg:hover,.f-submit:hover,.modal-cta:hover,
.wa-btn:hover { background: ${teal3} !important; }

.nav-cta,.svc-cta,.about-corner,.nav-cta:hover { border-color: ${teal} !important; }
.nav-cta:hover,.svc-cta:hover { background: ${teal} !important; color: #000 !important; }

nav a:hover,.nav-links a:hover,.svc-card:hover .svc-card-title,
.step-block:hover { color: ${teal} !important; border-color: ${teal} !important; }

.fi:focus,.fs:focus,.fta:focus,.f-input:focus,.f-textarea:focus { border-color: ${teal} !important; outline: none; }
`;

  let el = document.getElementById('__yas_theme__');
  if (!el) { el = document.createElement('style'); el.id = '__yas_theme__'; document.head.appendChild(el); }
  el.textContent = css;
}

function loadGFonts(names) {
  const fams = names.map(n => GOOGLE_FONTS_PAIRS[n]).filter(Boolean);
  if (!fams.length) return;
  const id = '__yas_gfonts__';
  const old = document.getElementById(id);
  if (old) old.remove();
  const lnk  = document.createElement('link');
  lnk.id     = id;
  lnk.rel    = 'stylesheet';
  lnk.href   = 'https://fonts.googleapis.com/css2?' + fams.map(f=>'family='+f).join('&') + '&display=swap';
  document.head.appendChild(lnk);
}

function shadeColor(hex, amt) {
  const n = parseInt((hex||'#2dd4bf').replace('#',''),16);
  const c = v => Math.min(255,Math.max(0,v));
  return '#'+[c((n>>16)+amt),c(((n>>8)&0xff)+amt),c((n&0xff)+amt)].map(v=>v.toString(16).padStart(2,'0')).join('');
}

// Auto-apply
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyTheme);
} else {
  applyTheme();
}
