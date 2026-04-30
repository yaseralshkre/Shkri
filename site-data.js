// ═══════════════════════════════════════════════════════
//  YASER AL-SHKRE — CENTRAL SITE DATA
//  Edit via admin.html — do not edit manually
// ═══════════════════════════════════════════════════════

const SITE_DATA_KEY = 'yas_site_v1';

// ── SVG Placeholder Images (inline data URIs) ──────────
const PLACEHOLDERS = {
  hero: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="#0f0f0f"/><rect x="0" y="0" width="1200" height="600" fill="url(#g1)"/><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0a0a0a"/><stop offset="100%" style="stop-color:#1a2420"/></linearGradient></defs><line x1="0" y1="200" x2="1200" y2="200" stroke="#1a2a25" stroke-width="0.5"/><line x1="0" y1="400" x2="1200" y2="400" stroke="#1a2a25" stroke-width="0.5"/><line x1="300" y1="0" x2="300" y2="600" stroke="#1a2a25" stroke-width="0.5"/><line x1="600" y1="0" x2="600" y2="600" stroke="#1a2a25" stroke-width="0.5"/><line x1="900" y1="0" x2="900" y2="600" stroke="#1a2a25" stroke-width="0.5"/><circle cx="900" cy="300" r="200" fill="none" stroke="#2dd4bf" stroke-width="0.5" opacity="0.3"/><circle cx="900" cy="300" r="120" fill="none" stroke="#2dd4bf" stroke-width="0.5" opacity="0.2"/><circle cx="900" cy="300" r="60" fill="#2dd4bf" opacity="0.05"/></svg>`)}`,
  
  case1: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="#0d1a18"/><rect x="0" y="0" width="800" height="450" fill="url(#cg1)"/><defs><linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0a1210"/><stop offset="100%" style="stop-color:#0d1f1a"/></linearGradient></defs><rect x="50" y="80" width="220" height="290" fill="none" stroke="#2dd4bf" stroke-width="0.8" opacity="0.4"/><rect x="60" y="90" width="200" height="270" fill="none" stroke="#2dd4bf" stroke-width="0.4" opacity="0.2"/><rect x="320" y="120" width="180" height="30" fill="#2dd4bf" opacity="0.15"/><rect x="320" y="165" width="140" height="8" fill="#2dd4bf" opacity="0.3"/><rect x="320" y="183" width="160" height="8" fill="#2dd4bf" opacity="0.2"/><rect x="320" y="201" width="120" height="8" fill="#2dd4bf" opacity="0.2"/><rect x="320" y="240" width="80" height="60" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.5"/><text x="360" y="278" font-family="monospace" font-size="18" fill="#2dd4bf" opacity="0.8" text-anchor="middle">3×</text><rect x="420" y="240" width="80" height="60" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.5"/><text x="460" y="278" font-family="monospace" font-size="14" fill="#2dd4bf" opacity="0.8" text-anchor="middle">100M</text><rect x="520" y="240" width="80" height="60" fill="none" stroke="#2dd4bf" stroke-width="1" opacity="0.3"/><text x="560" y="278" font-family="monospace" font-size="12" fill="#2dd4bf" opacity="0.6" text-anchor="middle">5%</text><line x1="50" y1="390" x2="750" y2="390" stroke="#2dd4bf" stroke-width="0.5" opacity="0.2"/><text x="50" y="420" font-family="monospace" font-size="10" fill="#2dd4bf" opacity="0.4">AL-JASSER GROUP — SYSTEMS ENGINEERING</text></svg>`)}`,

  case2: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="#0d1015"/><defs><linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#080c12"/><stop offset="100%" style="stop-color:#0d1520"/></linearGradient></defs><rect width="800" height="450" fill="url(#cg2)"/><rect x="100" y="60" width="600" height="330" fill="none" stroke="#2dd4bf" stroke-width="0.4" opacity="0.15"/><rect x="100" y="60" width="600" height="80" fill="#2dd4bf" opacity="0.04"/><text x="400" y="108" font-family="monospace" font-size="11" fill="#2dd4bf" opacity="0.5" text-anchor="middle">ROSHN NATIONAL HOUSING — PHASE 1</text><rect x="120" y="170" width="80" height="200" fill="none" stroke="#2dd4bf" stroke-width="0.8" opacity="0.5"/><rect x="220" y="200" width="80" height="170" fill="none" stroke="#2dd4bf" stroke-width="0.8" opacity="0.4"/><rect x="320" y="185" width="80" height="185" fill="none" stroke="#2dd4bf" stroke-width="0.8" opacity="0.4"/><rect x="420" y="220" width="80" height="150" fill="none" stroke="#2dd4bf" stroke-width="0.8" opacity="0.3"/><rect x="520" y="195" width="80" height="175" fill="none" stroke="#2dd4bf" stroke-width="0.8" opacity="0.3"/><rect x="620" y="160" width="80" height="210" fill="#2dd4bf" opacity="0.08" stroke="#2dd4bf" stroke-width="0.8"/><text x="660" y="145" font-family="monospace" font-size="9" fill="#2dd4bf" opacity="0.6" text-anchor="middle">378</text><line x1="100" y1="370" x2="700" y2="370" stroke="#2dd4bf" stroke-width="0.5" opacity="0.3"/></svg>`)}`,

  case3: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"><rect width="800" height="450" fill="#120d0a"/><defs><linearGradient id="cg3" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:#0a0806"/><stop offset="100%" style="stop-color:#1a1208"/></linearGradient></defs><rect width="800" height="450" fill="url(#cg3)"/><circle cx="400" cy="225" r="160" fill="none" stroke="#2dd4bf" stroke-width="0.5" opacity="0.2"/><circle cx="400" cy="225" r="100" fill="none" stroke="#2dd4bf" stroke-width="0.5" opacity="0.3"/><circle cx="400" cy="225" r="50" fill="#2dd4bf" opacity="0.06"/><text x="400" y="218" font-family="monospace" font-size="13" fill="#2dd4bf" opacity="0.7" text-anchor="middle">BIKAR</text><text x="400" y="236" font-family="monospace" font-size="8" fill="#2dd4bf" opacity="0.4" text-anchor="middle">BRAND IDENTITY</text><line x1="400" y1="65" x2="400" y2="275" stroke="#2dd4bf" stroke-width="0.4" opacity="0.2"/><line x1="240" y1="225" x2="560" y2="225" stroke="#2dd4bf" stroke-width="0.4" opacity="0.2"/><text x="100" y="230" font-family="monospace" font-size="9" fill="#2dd4bf" opacity="0.4">MARKET</text><text x="600" y="230" font-family="monospace" font-size="9" fill="#2dd4bf" opacity="0.4">ENTRY</text><text x="400" y="100" font-family="monospace" font-size="9" fill="#2dd4bf" opacity="0.4" text-anchor="middle">GCC</text></svg>`)}`,

  consultant: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 530"><rect width="400" height="530" fill="#111"/><rect width="400" height="530" fill="url(#pg)"/><defs><linearGradient id="pg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0e0e0e"/><stop offset="100%" style="stop-color:#1a1a1a"/></linearGradient></defs><circle cx="200" cy="185" r="85" fill="#1a1a1a" stroke="#2dd4bf" stroke-width="0.5" opacity="0.8"/><circle cx="200" cy="165" r="48" fill="#222"/><path d="M110 320 Q200 280 290 320 L300 530 L100 530 Z" fill="#1c1c1c"/><rect x="0" y="480" width="400" height="50" fill="#2dd4bf" opacity="0.08"/><text x="200" y="510" font-family="monospace" font-size="9" fill="#2dd4bf" opacity="0.6" text-anchor="middle">YASER AHMED AL-SHKRE</text><line x1="40" y1="460" x2="360" y2="460" stroke="#2dd4bf" stroke-width="0.4" opacity="0.3"/></svg>`)}`,

  service1: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340"><rect width="600" height="340" fill="#0a0f0e"/><rect x="40" y="40" width="520" height="260" fill="none" stroke="#2dd4bf" stroke-width="0.4" opacity="0.2"/><rect x="40" y="40" width="160" height="260" fill="#2dd4bf" opacity="0.03"/><text x="120" y="175" font-family="monospace" font-size="28" fill="#2dd4bf" opacity="0.3" text-anchor="middle">SOP</text><rect x="220" y="80" width="300" height="8" fill="#2dd4bf" opacity="0.4"/><rect x="220" y="100" width="240" height="6" fill="#2dd4bf" opacity="0.2"/><rect x="220" y="116" width="260" height="6" fill="#2dd4bf" opacity="0.2"/><rect x="220" y="150" width="300" height="8" fill="#2dd4bf" opacity="0.3"/><rect x="220" y="168" width="200" height="6" fill="#2dd4bf" opacity="0.2"/><rect x="220" y="200" width="300" height="8" fill="#2dd4bf" opacity="0.25"/><rect x="220" y="218" width="180" height="6" fill="#2dd4bf" opacity="0.15"/></svg>`)}`,
};

// ── Default Site Data ──────────────────────────────────
const DEFAULT_SITE = {
  _version: 1,
  _updated: new Date().toISOString(),

  hero: {
    image: '', // set to PLACEHOLDERS.hero dynamically
    headline: {
      en: "Leading the Transformation from Operational Chaos to Institutional Excellence.",
      ar: "قيادة التحوّل من الفوضى التشغيلية إلى التميز المؤسسي."
    },
    sub: {
      en: "Empowering ambitious firms in the construction and furnishing sectors to re-engineer their systems, build authoritative brands, and enable their workforce to achieve sustainable growth aligned with Saudi Vision 2030.",
      ar: "تمكين الشركات الطموحة في قطاعَي الإنشاء والأثاث من إعادة هندسة أنظمتها وبناء علامات تجارية راسخة وتطوير كوادرها لتحقيق نمو مستدام متوافق مع رؤية 2030."
    },
    cta: { en: "Book Your Strategic Call", ar: "احجز استشارتك الاستراتيجية" },
    stats: [
      { num: "20+", label: { en: "Years GCC Experience", ar: "سنة خبرة خليجية" } },
      { num: "100M", label: { en: "SAR Investment Salvaged", ar: "ريال استثمار تم إنقاذه" } },
      { num: "3×", label: { en: "Production Capacity", ar: "الطاقة الإنتاجية" } }
    ],
    values: [
      { num:"01", title:{ en:"Strategic Economic Thinking", ar:"التفكير الاقتصادي الاستراتيجي" }, text:{ en:"Business plans rooted in rigorous market and data analysis, not guesswork or generic templates.", ar:"خطط أعمال مبنية على تحليل دقيق للسوق والبيانات، لا على التخمين أو القوالب الجاهزة." } },
      { num:"02", title:{ en:"Operational Realism", ar:"الواقعية التشغيلية" }, text:{ en:"Field-tested SOPs implemented within major groups such as Abyat and Al-Fozan Group.", ar:"إجراءات تشغيلية مُختبرة ميدانياً داخل مجموعات كبرى كأبيات ومجموعة الفوزان." } },
      { num:"03", title:{ en:"Market Positioning", ar:"التموضع السوقي" }, text:{ en:"Establishing brands from the ground up to become leaders in their niche.", ar:"تأسيس علامات تجارية من الصفر لتصبح رائدة في مجالها." } },
      { num:"04", title:{ en:"Three Parallel Tracks", ar:"ثلاثة مسارات متوازية" }, text:{ en:"Identity · Systems · People — all three working simultaneously to ensure market dominance.", ar:"الهوية · الأنظمة · الكوادر — الثلاثة معاً في آنٍ واحد لضمان الريادة السوقية." } }
    ]
  },

  services: [
    { id:"sv1", image:'',
      title:{ en:"Operations Engineering & Excellence", ar:"هندسة العمليات والتميز التشغيلي" },
      sub:{ en:"SOP Development · Design-to-Production Integration · Supply Chain Optimization", ar:"تطوير الإجراءات · ربط التصميم بالإنتاج · تحسين سلاسل الإمداد" },
      desc:{ en:"Transforming complexity and chaos into streamlined, automated workflows that guarantee output quality independent of individual personnel.", ar:"تحويل التعقيد والفوضى إلى سير عمل منظمة ومؤتمتة تضمن جودة الناتج بصرف النظر عن الأفراد." },
      items:[
        { en:"SOP Development: Building comprehensive workflow maps for all departments.", ar:"تطوير الإجراءات المعيارية: بناء خرائط عمل شاملة لجميع الأقسام." },
        { en:"Design-to-Production Integration: Activating technical systems (iMOS) linking points of sale to the factory floor.", ar:"ربط التصميم بالإنتاج: تفعيل أنظمة تقنية (iMOS) تربط نقاط البيع بأرضية المصنع." },
        { en:"Supply Chain & Pricing Optimization: Re-engineering procurement and pricing strategies to maximize margins.", ar:"تحسين سلاسل الإمداد والتسعير: إعادة هندسة استراتيجيات الشراء والتسعير لتعظيم الهوامش." }
      ]
    },
    { id:"sv2", image:'',
      title:{ en:"Corporate Branding & Strategic Positioning", ar:"الهوية المؤسسية والتموضع الاستراتيجي" },
      sub:{ en:"Strategic Identity · Reputation Management · Market Entry Strategies", ar:"بناء الهوية · إدارة السمعة · استراتيجيات الدخول للأسواق" },
      desc:{ en:"A brand is not just a logo; it is the perceived value in the eyes of the client. We build brands that attract high-quality clientele and reflect institutional strength.", ar:"العلامة التجارية ليست مجرد شعار؛ إنها القيمة المُدرَكة في أعين العميل. نبني علامات تجارية تجذب العملاء وتعكس القوة المؤسسية." },
      items:[
        { en:"Strategic Identity Foundations: Building brands from the ground up aligned with mega-project requirements.", ar:"بناء هوية استراتيجية من الأساس متوافقة مع متطلبات المشاريع العملاقة." },
        { en:"Corporate Reputation Management: Ensuring alignment between brand image and field operational reality.", ar:"إدارة السمعة المؤسسية: ضمان التوافق بين صورة العلامة والواقع التشغيلي الميداني." },
        { en:"Market Entry Strategies: Roadmaps for geographical expansion based on economic analysis.", ar:"استراتيجيات الدخول: خرائط طريق للتوسع الجغرافي مبنية على تحليل اقتصادي دقيق." }
      ]
    },
    { id:"sv3", image:'',
      title:{ en:"B2B & Project Sector Restructuring", ar:"إعادة هيكلة قطاع المشاريع والأعمال" },
      sub:{ en:"PMO Establishment · Consultative Sales Model · Risk & Contract Management", ar:"إنشاء PMO · نموذج البيع الاستشاري · إدارة المخاطر والعقود" },
      desc:{ en:"Empowering organizations to win and execute high-scale contracts with professional precision — from government housing to luxury developers.", ar:"تمكين المنظمات من الفوز بعقود واسعة النطاق وتنفيذها بدقة احترافية — من الإسكان الحكومي إلى المطورين الفاخرين." },
      items:[
        { en:"PMO Establishment: Building specialized Project Management Offices for major contracts.", ar:"إنشاء مكاتب إدارة المشاريع المتخصصة للعقود الكبرى." },
        { en:"Consultative Sales Model: Training teams in high-level negotiation and closing multi-million dollar deals.", ar:"نموذج البيع الاستشاري: تدريب الفرق على التفاوض رفيع المستوى وإتمام صفقات بملايين الريالات." },
        { en:"Risk & Contract Management: Strict protocols ensuring projects remain on schedule and within budget.", ar:"إدارة المخاطر والعقود: بروتوكولات صارمة لضمان سير المشاريع في الموعد وضمن الميزانية." }
      ]
    },
    { id:"sv4", image:'',
      title:{ en:"People, Culture & Organizational Behavior", ar:"الكوادر والثقافة والسلوك المؤسسي" },
      sub:{ en:"Organizational Design · Specialized Training · Performance Management (KPIs)", ar:"التصميم الهيكلي · التدريب المتخصص · إدارة الأداء (KPIs)" },
      desc:{ en:"Investing in human capital is the only guarantee for systemic sustainability. We build organizations that grow without depending on any single individual.", ar:"الاستثمار في رأس المال البشري هو الضمان الوحيد للاستدامة المنهجية. نبني مؤسسات تنمو دون الاعتماد على فرد واحد." },
      items:[
        { en:"Organizational Design: Re-aligning structures to ensure the right talent in the right role.", ar:"التصميم الهيكلي: إعادة مواءمة الهياكل لضمان المواهب المناسبة في الأدوار المناسبة." },
        { en:"Specialized Training Programs: Intensive workshops in Organizational Behavior and leadership.", ar:"برامج تدريبية متخصصة: ورش عمل مكثفة في السلوك التنظيمي والقيادة." },
        { en:"Performance Management (KPIs): Dashboards linking employee incentives directly to strategic objectives.", ar:"إدارة الأداء (KPIs): لوحات تربط حوافز الموظفين مباشرة بالأهداف الاستراتيجية." }
      ]
    }
  ],

  cases: [
    { id:"c001", featured:true, date:"2024-03",
      image:'',
      industry:{ en:"Advanced Furniture & Woodworking Manufacturing", ar:"تصنيع الأثاث المتطور والأعمال الخشبية" },
      scope:{ en:"End-to-End Technical Integration", ar:"التكامل التقني الشامل" },
      title:{ en:"Engineering Systems & Production Automation to Safeguard a 100M SAR Investment", ar:"هندسة الأنظمة وأتمتة الإنتاج لحماية استثمار بقيمة 100 مليون ريال" },
      summary:{ en:"A state-of-the-art facility was completely idle despite a 100M SAR investment. We re-engineered the entire operation — tripling capacity and cutting errors from 18% to under 5%.", ar:"منشأة حديثة كانت متوقفة تماماً رغم استثمار 100 مليون ريال. أعدنا هندسة العملية بأكملها — تضاعفت الطاقة ثلاثة أضعاف وانخفضت الأخطاء من 18% إلى أقل من 5%." },
      challenge:{ en:"A major industry player faced a critical strategic challenge: a state-of-the-art manufacturing facility with modern production lines was completely idle, despite a massive investment of 100 Million SAR. The root cause was a 'Technical Gap' — sophisticated iMOS engineering software required to operate these machines remained inactive while the company relied on obsolete methods incompatible with the high-tech machinery.", ar:"واجه أحد اللاعبين الرئيسيين في القطاع تحدياً محورياً: منشأة تصنيع حديثة بخطوط إنتاج متطورة متوقفة كلياً رغم استثمار ضخم بلغ 100 مليون ريال. كان السبب الجذري 'فجوة تقنية' — إذ ظلت برمجيات iMOS المطلوبة لتشغيل الآلات معطّلة، فيما استمرت الشركة في أساليب قديمة لا تتوافق مع الآلات الحديثة." },
      intervention:{ en:"Developed an extensive design library on iMOS as the universal language between showrooms and machinery. Established a Technical Review Office to audit designs pre-production. Expanded specialized software support teams. Conducted firm-wide intensive training for all designers. Enforced the new software as the sole production pathway, decommissioning all legacy systems.", ar:"تطوير مكتبة تصميم واسعة على iMOS كلغة موحّدة بين صالات العرض والآلات. إنشاء مكتب مراجعة تقنية للتحقق من التصاميم. توسيع فرق الدعم المتخصصة. تنفيذ برنامج تدريبي مكثف لجميع المصممين. فرض البرنامج الجديد مساراً إنتاجياً وحيداً مع إيقاف جميع الأنظمة القديمة." },
      results:{ en:"The re-engineering delivered transformative results: fully reactivated the idle factory, reduced error rates from 18% to under 5%, tripled production capacity through automation and barcode integration, enabled complex new product lines, and drove consistent sales growth.", ar:"حققت إعادة الهندسة نتائج تحولية: إعادة تفعيل المصنع بالكامل، خفض معدل الخطأ من 18% إلى أقل من 5%، مضاعفة الطاقة الإنتاجية ثلاث مرات بفضل الأتمتة، وتمكين خطوط منتجات جديدة ومعقدة ونمو مستمر في المبيعات." },
      metrics:[
        { value:"100M", unit:"SAR", label_en:"Investment Reactivated", label_ar:"استثمار تم إنقاذه" },
        { value:"3×", unit:"", label_en:"Production Capacity", label_ar:"الطاقة الإنتاجية" },
        { value:"18%→5%", unit:"", label_en:"Error Rate Reduced", label_ar:"انخفاض معدل الخطأ" }
      ],
      tags_en:["Manufacturing","Systems Engineering","iMOS","Operations"],
      tags_ar:["تصنيع","هندسة الأنظمة","iMOS","العمليات"]
    },
    { id:"c002", featured:false, date:"2023-09",
      image:'',
      industry:{ en:"Real Estate Development", ar:"التطوير العقاري" },
      scope:{ en:"National Project Management — Roshn Initiative", ar:"إدارة المشاريع الوطنية — مبادرة روشن" },
      title:{ en:"Supervising Execution of the First Phase of Roshn — 378 Villas Delivered On Time", ar:"الإشراف على تنفيذ المرحلة الأولى من روشن — تسليم 378 فيلا في الموعد" },
      summary:{ en:"Led senior project management for the first phase of the Roshn national housing initiative — one of Saudi Arabia's flagship Vision 2030 mega-projects — delivering 378 villas on time.", ar:"قيادة إدارة المشاريع للمرحلة الأولى من مبادرة روشن السكنية الوطنية — أحد المشاريع العملاقة الرائدة في رؤية 2030 — وتسليم 378 فيلا في الموعد." },
      challenge:{ en:"Managing a mega-scale national housing project with complex coordination requirements between developers, contractors, and government entities — all within strict Vision 2030 quality and timeline mandates.", ar:"إدارة مشروع إسكان وطني ضخم بمتطلبات تنسيق معقدة بين المطورين والمقاولين والجهات الحكومية — ضمن معايير الجودة والجداول الزمنية الصارمة لرؤية 2030." },
      intervention:{ en:"Established a dedicated PMO structure tailored for the project scale. Implemented rigorous contract management protocols, coordinated all stakeholder workflows, and enforced quality assurance checkpoints across all 378 units.", ar:"إنشاء هيكل مكتب إدارة مشاريع مخصص يتناسب مع حجم المشروع. تطبيق بروتوكولات صارمة لإدارة العقود، تنسيق جميع سير عمل أصحاب المصلحة، وتطبيق نقاط تفتيش ضمان الجودة عبر الوحدات الـ378." },
      results:{ en:"Successfully delivered 378 villas in the first phase of Roshn on schedule and within budget. Established a repeatable PMO framework now used as a template for subsequent phases.", ar:"تسليم 378 فيلا في المرحلة الأولى من روشن بنجاح في الموعد وضمن الميزانية. وضع إطار مكتب إدارة مشاريع قابل للتكرار يُستخدم نموذجاً للمراحل اللاحقة." },
      metrics:[
        { value:"378", unit:"", label_en:"Villas Delivered", label_ar:"فيلا تم تسليمها" },
        { value:"100%", unit:"", label_en:"On-Time Delivery", label_ar:"تسليم في الموعد" },
        { value:"V2030", unit:"", label_en:"Vision Aligned", label_ar:"متوافق مع الرؤية" }
      ],
      tags_en:["Real Estate","PMO","Roshn","Vision 2030"],
      tags_ar:["عقارات","إدارة مشاريع","روشن","رؤية 2030"]
    },
    { id:"c003", featured:false, date:"2022-06",
      image:'',
      industry:{ en:"Retail & Brand Building", ar:"التجزئة وبناء العلامات التجارية" },
      title:{ en:"Launching Bikar & Closets and More — Two Leading Brands Built from Zero", ar:"إطلاق بيكار و Closets & More — علامتان تجاريتان رائدتان من الصفر" },
      scope:{ en:"Brand Launch — Full Identity & Operations", ar:"إطلاق العلامة التجارية — الهوية والعمليات الكاملة" },
      summary:{ en:"Founded and built Bikar and Closets & More from the ground up — developing the complete brand identity, operational backbone, and go-to-market strategy that positioned both brands as niche leaders in the GCC.", ar:"تأسيس وبناء بيكار و Closets & More من الصفر — تطوير هوية العلامة الكاملة والعمود الفقري التشغيلي واستراتيجية الدخول للسوق." },
      challenge:{ en:"Entering a competitive GCC market with zero brand recognition, requiring simultaneous development of identity, operations, supply chain, and sales — while differentiating from established international competitors.", ar:"الدخول إلى سوق خليجي تنافسي بدون أي تعريف بالعلامة التجارية، مما يستلزم التطوير المتزامن للهوية والعمليات وسلسلة الإمداد والمبيعات." },
      intervention:{ en:"Built complete brand identities aligned with luxury market positioning. Designed and implemented operational infrastructure including supply chain, pricing architecture, and showroom experience. Developed B2B sales models targeting mega-project contractors.", ar:"بناء هويات علامة تجارية كاملة متوافقة مع التموضع في السوق الفاخرة. تصميم وتنفيذ البنية التحتية التشغيلية بما في ذلك سلسلة الإمداد وهيكل التسعير وتجربة صالة العرض." },
      results:{ en:"Both brands achieved strong market positioning within their first two years. Established distribution networks, won contracts with Tier-1 developers, and built replicable operational SOPs enabling scaling across the GCC.", ar:"حققت كلتا العلامتين تموضعاً سوقياً قوياً خلال العامين الأولين. إنشاء شبكات توزيع والفوز بعقود مع مطورين من الدرجة الأولى وبناء إجراءات تشغيلية قابلة للنسخ." },
      metrics:[
        { value:"2", unit:"+", label_en:"Brands Built", label_ar:"علامة تجارية مبنية" },
        { value:"GCC", unit:"", label_en:"Market Reach", label_ar:"نطاق السوق" },
        { value:"0→1", unit:"", label_en:"From Scratch", label_ar:"من الصفر" }
      ],
      tags_en:["Branding","Retail","B2B","Market Entry"],
      tags_ar:["علامة تجارية","تجزئة","أعمال","دخول السوق"]
    }
  ],

  about: {
    photo: '',
    name: { en:"Yaser Ahmed Al-Shkre", ar:"ياسر أحمد الشكري" },
    role: { en:"Economist · Strategic Planner · Institutional Engineer", ar:"اقتصادي · مخطط استراتيجي · مهندس مؤسسي" },
    years: "20",
    bio: { en:"An Economist and Strategic Planner with nearly two decades of deep-rooted experience in the GCC market, specializing in Institutional Engineering and driving behavioral change — particularly in the construction fittings and advanced furniture sectors. From managing national-scale projects like Roshn to establishing brands from the ground up, I believe a robust system is the only true guarantee for sustainable growth.", ar:"اقتصادي ومخطط استراتيجي بخبرة تمتد لما يقارب عقدين في سوق الخليج، متخصص في الهندسة المؤسسية وقيادة التغيير السلوكي — لا سيما في قطاعَي التجهيزات الإنشائية والأثاث المتطور. من إدارة مشاريع وطنية كروشن إلى تأسيس علامات تجارية من الصفر، أؤمن بأن النظام الراسخ هو الضمان الحقيقي الوحيد للنمو المستدام." },
    pillars: [
      { label:{ en:"Identity", ar:"الهوية" }, text:{ en:"How does the world perceive your value?", ar:"كيف يرى العالم قيمتك؟" } },
      { label:{ en:"System", ar:"النظام" }, text:{ en:"How do processes run in your absence?", ar:"كيف تسير العمليات في غيابك؟" } },
      { label:{ en:"Human Capital", ar:"رأس المال البشري" }, text:{ en:"How does your team adopt a leadership mindset?", ar:"كيف يتبنّى فريقك عقلية القيادة؟" } }
    ],
    quals: [
      { en:"Bachelor's in Economics & Planning — University of Aleppo | Ongoing: Organizational Behavior & Managerial Accounting", ar:"بكالوريوس اقتصاد وتخطيط — جامعة حلب | دراسة مستمرة: السلوك التنظيمي والمحاسبة الإدارية" },
      { en:"Founder & Director: Bikar and Closets & More brands", ar:"مؤسس ومدير: علامة بيكار و Closets & More" },
      { en:"Former Senior Projects Manager at Abyat — Roshn projects (378 villas)", ar:"مدير مشاريع أول سابق في أبيات — مشاريع روشن (378 فيلا)" },
      { en:"Expert in industrial process automation & iMOS software integration", ar:"خبير في أتمتة العمليات الصناعية ودمج برنامج iMOS" }
    ],
    testimonials: [
      { id:"t1", name:"Ahmed Al-Rashidi", role:"CEO, Al-Jasser Group", quote:{ en:"Yaser didn't just deliver a report — he embedded himself in our operations and transformed a paralyzed factory into our most competitive asset.", ar:"ياسر لم يقدم تقريراً فحسب — بل اندمج في عملياتنا وحوّل مصنعاً متوقفاً إلى أصلنا الأكثر تنافسية." } },
      { id:"t2", name:"Khalid Al-Fozan", role:"Director of Projects, Abyat", quote:{ en:"The PMO framework Yaser built for Roshn became the standard we use for all national-scale projects today.", ar:"الإطار الذي بناه ياسر لروشن أصبح المعيار الذي نستخدمه اليوم لجميع المشاريع الوطنية." } }
    ]
  },

  contact: {
    wa: "+966 5X XXX XXXX",
    email: "yaser@alshkre.com",
    cal: "https://calendly.com/yaser-alshkre",
    linkedin: "https://linkedin.com/in/yaser-alshkre",
    notify: "",
    head: { en:"Ready to take your organization to the next level?", ar:"مستعد للانتقال بمؤسستك إلى المستوى التالي؟" },
    note: { en:"Don't let administrative randomness hinder your expansion goals. Let us lay the right foundations for the future of your company.", ar:"لا تدع الفوضى الإدارية تعيق أهداف توسعك. دعنا نضع الأسس الصحيحة لمستقبل شركتك." },
    formFields: [
      { label:{ en:"Full Name", ar:"الاسم الكامل" } },
      { label:{ en:"Company", ar:"الشركة" } },
      { label:{ en:"Email or WhatsApp", ar:"البريد الإلكتروني أو واتساب" } },
      { label:{ en:"Tell us about your challenge", ar:"أخبرنا عن تحديك" } }
    ]
  },

  typography: {
    // English fonts
    en: {
      heading_font:  "Cormorant Garamond",
      body_font:     "DM Sans",
      heading_size:  "clamp(2.6rem, 4.6vw, 4.4rem)",
      section_size:  "clamp(1.9rem, 3.2vw, 2.8rem)",
      body_size:     "0.92rem",
      nav_size:      "0.76rem",
      heading_weight:"300",
      body_weight:   "300",
      heading_color: "#f5f3ef",
      body_color:    "#666666",
      accent_color:  "#2dd4bf",
      line_height:   "1.7",
    },
    // Arabic fonts
    ar: {
      heading_font:  "Tajawal",
      body_font:     "Tajawal",
      heading_size:  "clamp(2rem, 4vw, 3.6rem)",
      section_size:  "clamp(1.7rem, 2.8vw, 2.4rem)",
      body_size:     "0.95rem",
      nav_size:      "0.8rem",
      heading_weight:"300",
      body_weight:   "300",
      heading_color: "#f5f3ef",
      body_color:    "#666666",
      accent_color:  "#2dd4bf",
      line_height:   "1.85",
    },
    // Global
    global: {
      teal:        "#2dd4bf",
      black:       "#0a0a0a",
      surface:     "#161616",
      border:      "#222222",
      letter_spacing_en: "0.01em",
      letter_spacing_ar: "0",
    }
  },

  settings: {
    defLang: "en",
    titleEn: "Yaser Al-Shkre | Strategic Consulting",
    titleAr: "ياسر الشكري | استشارات استراتيجية"
  },

  whatsapp: {
    enabled: true,
    number: "966500000000",
    greeting: {
      en: "Hello Yaser! I'd like to discuss a consulting opportunity.",
      ar: "مرحباً ياسر! أود مناقشة فرصة استشارية."
    },
    bubble_text: {
      en: "Chat with us",
      ar: "تواصل معنا"
    },
    tooltip: {
      en: "Typically replies within 1 hour",
      ar: "يرد عادةً خلال ساعة"
    },
    position: "bottom-right",
    color: "#25D366",
    show_after_seconds: 3
  },

  achievements: [
    { id:"ach1", icon:"🏗️", number:"378", label:{ en:"Villas Delivered — Roshn Phase 1", ar:"فيلا تم تسليمها — المرحلة الأولى من روشن" } },
    { id:"ach2", icon:"💰", number:"100M+", label:{ en:"SAR Investment Reactivated", ar:"ريال سعودي استثمار تم إنقاذه" } },
    { id:"ach3", icon:"⚙️", number:"3×", label:{ en:"Production Capacity Tripled", ar:"تضاعف الطاقة الإنتاجية ثلاث مرات" } },
    { id:"ach4", icon:"🏆", number:"2", label:{ en:"Leading Brands Founded", ar:"علامة تجارية رائدة أُسست" } },
    { id:"ach5", icon:"🌍", number:"20+", label:{ en:"Years GCC Experience", ar:"سنة خبرة في سوق الخليج" } },
    { id:"ach6", icon:"📋", number:"50+", label:{ en:"SOPs Developed & Implemented", ar:"إجراء تشغيلي تم تطويره وتنفيذه" } }
  ]
};

// ── Data Access Layer ──────────────────────────────────
function getSiteData() {
  try {
    const stored = localStorage.getItem(SITE_DATA_KEY);
    if (stored) {
      const d = JSON.parse(stored);
      // Always ensure whatsapp exists with defaults
      if (!d.whatsapp) d.whatsapp = DEFAULT_SITE.whatsapp;
      if (!d.achievements) d.achievements = DEFAULT_SITE.achievements;
      injectPlaceholders(d);
      return d;
    }
  } catch(e) {}
  const d = JSON.parse(JSON.stringify(DEFAULT_SITE));
  injectPlaceholders(d);
  return d;
}

function setSiteData(data) {
  try {
    data._updated = new Date().toISOString();
    localStorage.setItem(SITE_DATA_KEY, JSON.stringify(data));
    return true;
  } catch(e) { return false; }
}

function injectPlaceholders(d) {
  if (!d.hero.image) d.hero.image = PLACEHOLDERS.hero;
  if (!d.about.photo) d.about.photo = PLACEHOLDERS.consultant;
  const imgs = [PLACEHOLDERS.case1, PLACEHOLDERS.case2, PLACEHOLDERS.case3];
  (d.cases || []).forEach((c, i) => { if (!c.image) c.image = imgs[i % imgs.length]; });
  const si = [PLACEHOLDERS.service1];
  (d.services || []).forEach((s, i) => { if (!s.image) s.image = si[i % si.length]; });
}
