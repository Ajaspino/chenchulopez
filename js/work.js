/* ============================================================
   CHENCHU LÓPEZ — work.js
   ============================================================ */

const translations = {
  gl: {
    'nav.works':              'Traballos',
    'nav.about':              'Percorrido',
    'nav.contact':            'Contacto',
    'footer.alias':           'Tamén coñecido como Ajaspino',
    'work.nav.prev':          'Anterior',
    'work.nav.next':          'Seguinte',
    'work.bruar.date':        '2016–Actualidade',
    'work.bruar.category':    'Cultura',
    'work.bruar.discipline':  'Deseño Gráfico',
    'work.bruar.description': 'Identidade visual para BRUAR, asociación cultural dedicada á promoción do jazz e da música moderna en Ribadeo. Un sistema gráfico flexible desenvolvido para acompañar a comunicación dos seus cursos, concertos e actividades desde 2016.',
    'work.bruar.body1':       'Desde hai máis dunha década, BRUAR promove actividades vinculadas á formación musical, o jazz e a música moderna en Ribadeo. A asociación organiza cursos, concertos e encontros que reúnen alumnado, profesorado e afeccionados arredor da práctica e divulgación musical.',
    'work.bruar.body2':       'A colaboración comezou en 2016 coa creación de diferentes materiais de comunicación para o Curso de Iniciación ao Jazz e Música Moderna. Co paso dos anos, o proxecto foi evolucionando ata incorporar unha identidade visual propia capaz de dar coherencia ao conxunto de actividades promovidas pola asociación.',
    'work.bruar.body3':       'O sistema baséase nunha marca de construción simple e adaptable, pensada para convivir con linguaxes gráficas cambiantes e responder ás necesidades específicas de cada edición. A identidade complétase cun símbolo variable utilizado principalmente en contornos dixitais, permitindo manter o recoñecemento da marca sen renunciar á flexibilidade visual.',
    'work.bruar.section2':    'Colaboración continuada',
    'work.bruar.body4':       'Desde 2016 desenvolvéronse diferentes pezas de comunicación para cursos, concertos e actividades divulgativas organizadas por BRUAR. A serie de carteis realizada para o Curso de Iniciación ao Jazz e Música Moderna reflicte esta evolución, explorando distintas solucións gráficas ao tempo que mantén unha relación continuada coa identidade da asociación.',
  },
  es: {
    'nav.works':              'Trabajos',
    'nav.about':              'Recorrido',
    'nav.contact':            'Contacto',
    'footer.alias':           'También conocido como Ajaspino',
    'work.nav.prev':          'Anterior',
    'work.nav.next':          'Siguiente',
    'work.bruar.date':        '2016–Actualidad',
    'work.bruar.category':    'Cultura',
    'work.bruar.discipline':  'Diseño Gráfico',
    'work.bruar.description': 'Identidad visual para BRUAR, asociación cultural dedicada a la promoción del jazz y la música moderna en Ribadeo. Un sistema gráfico flexible desarrollado para acompañar la comunicación de sus cursos, conciertos y actividades desde 2016.',
    'work.bruar.body1':       'Desde hace más de una década, BRUAR promueve actividades vinculadas a la formación musical, el jazz y la música moderna en Ribadeo. La asociación organiza cursos, conciertos y encuentros que reúnen alumnado, profesorado y aficionados alrededor de la práctica y divulgación musical.',
    'work.bruar.body2':       'La colaboración comenzó en 2016 con la creación de diferentes materiales de comunicación para el Curso de Iniciación al Jazz y Música Moderna. Con el paso de los años, el proyecto fue evolucionando hasta incorporar una identidad visual propia capaz de dar coherencia al conjunto de actividades promovidas por la asociación.',
    'work.bruar.body3':       'El sistema se basa en una marca de construcción simple y adaptable, pensada para convivir con lenguajes gráficos cambiantes y responder a las necesidades específicas de cada edición. La identidad se completa con un símbolo variable utilizado principalmente en entornos digitales, permitiendo mantener el reconocimiento de la marca sin renunciar a la flexibilidad visual.',
    'work.bruar.section2':    'Colaboración continuada',
    'work.bruar.body4':       'Desde 2016 se han desarrollado diferentes piezas de comunicación para cursos, conciertos y actividades divulgativas organizadas por BRUAR. La serie de carteles realizada para el Curso de Iniciación al Jazz y Música Moderna refleja esta evolución, explorando distintas soluciones gráficas al tiempo que mantiene una relación continuada con la identidad de la asociación.',
  }
};

let currentLang = localStorage.getItem('lang') || 'gl';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.documentElement.lang = lang;

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('is-active', opt.dataset.lang === lang);
  });

  currentLang = lang;
  localStorage.setItem('lang', lang);
}

applyLang(currentLang);

document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'gl' ? 'es' : 'gl');
});

document.getElementById('lang-toggle-mobile').addEventListener('click', () => {
  applyLang(currentLang === 'gl' ? 'es' : 'gl');
});

/* --- Menú mobile ------------------------------------------ */
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

function openMenu() {
  menuToggle.classList.add('is-open');
  menuToggle.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.contains('is-open') ? closeMenu() : openMenu();
});

document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* --- Entrada de bloques con scroll ------------------------- */
const revealEls = Array.from(
  document.querySelectorAll('.work-images-grid')
).filter(el => el.children.length > 1);

function calcEntryProgress(rect, vh) {
  return Math.max(0, Math.min(1, (vh - rect.top) / (vh * 0.38)));
}

function runReveal() {
  const vh = window.innerHeight;
  revealEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    const p = Math.max(0, Math.min(1, (vh - rect.top) / rect.height));
    el.style.opacity   = (0.2 + p * 0.8).toFixed(3);
    el.style.transform = `scale(${(0.75 + p * 0.25).toFixed(3)})`;
  });
  requestAnimationFrame(runReveal);
}

runReveal();
