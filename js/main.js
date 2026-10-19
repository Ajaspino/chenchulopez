/* ============================================================
   CHENCHU LÓPEZ — main.js
   ============================================================ */

/* --- Traducciones ----------------------------------------- */
const translations = {
  gl: {
    'nav.works':              'Traballos',
    'nav.about':              'Percorrido',
    'nav.contact':            'Contacto',
    'hero.sub':               'Deseño e produtos dixitais',
    'hero.scroll':            'Continuar',
    'hero.scroll.aria':       'Continuar lendo',
    'intro.label':            'Presentación',
    'intro.text':             'Deseñador gráfico de formación e de produto dixital por evolución. Gústame traballar con boa xente, intentar facer as cousas cada vez un pouco mellor e entregar un traballo do que sentirse orgulloso.',
    'works.label':            'Traballos',
    'works.filter.all':       'Todos',
    'works.graphic.title':    'Deseño Gráfico',
    'works.digital.title':    'Produtos Dixitais',
    'about.label':            'Percorrido',
    'about.p1':               'Nacín en Ribadeo en 1975 e vivo na Coruña desde o ano 2000.',
    'about.p2':               'Estudei Deseño Gráfico en Ourense e comecei a traballar cando a web aínda estaba construíndo as súas propias regras. Aqueles primeiros anos foron a miña entrada ao mundo dixital.',
    'about.p3':               'Máis tarde incorporeime a <a href="https://www.netexlearning.com/" target="_blank" rel="noopener noreferrer">Netex</a>, onde pasei máis dunha década traballando en proxectos dixitais para o ámbito educativo. Co tempo asumín a coordinación de proxectos e a dirección dun equipo de deseño, colaborando con clientes, programadores, ilustradores, pedagogos e outros perfís especializados.',
    'about.p4':               'Nos últimos anos o meu traballo centrouse no deseño de produto dixital. Actualmente traballo en <a href="https://www.nomasystems.com/" target="_blank" rel="noopener noreferrer">Nomasystems</a>, participando na creación de aplicacións e servizos dixitais pensados principalmente para dispositivos móbiles.',
    'about.p5':               'Cambiaron as ferramentas, os formatos e os contextos, pero non tanto o que me interesa: entender os problemas, compartir criterio e construír solucións claras e útiles.',
    'contact.label':          'Contacto',
    'footer.alias':           'Tamén coñecido como Ajaspino',
  },
  es: {
    'nav.works':              'Trabajos',
    'nav.about':              'Recorrido',
    'nav.contact':            'Contacto',
    'hero.sub':               'Diseño & productos digitales',
    'hero.scroll':            'Continuar',
    'hero.scroll.aria':       'Continuar leyendo',
    'intro.label':            'Presentación',
    'intro.text':             'Diseñador gráfico de formación y de producto digital por evolución. Me gusta trabajar con buena gente, intentar hacer las cosas cada vez un poco mejor y entregar un trabajo del que sentirse orgulloso.',
    'works.label':            'Trabajos',
    'works.filter.all':       'Todos',
    'works.graphic.title':    'Diseño Gráfico',
    'works.digital.title':    'Productos Digitales',
    'about.label':            'Recorrido',
    'about.p1':               'Nací en Ribadeo en 1975 y vivo en A Coruña desde el año 2000.',
    'about.p2':               'Estudié Diseño Gráfico en Ourense y empecé a trabajar cuando la web todavía estaba construyendo sus propias reglas. Aquellos primeros años fueron mi entrada al mundo digital.',
    'about.p3':               'Más tarde me incorporé a <a href="https://www.netexlearning.com/" target="_blank" rel="noopener noreferrer">Netex</a>, donde pasé más de una década trabajando en proyectos digitales para el ámbito educativo. Con el tiempo asumí la coordinación de proyectos y la dirección de un equipo de diseño, colaborando con clientes, programadores, ilustradores, pedagogos y otros perfiles especializados.',
    'about.p4':               'En los últimos años mi trabajo se ha centrado en el diseño de producto digital. Actualmente trabajo en <a href="https://www.nomasystems.com/" target="_blank" rel="noopener noreferrer">Nomasystems</a>, participando en la creación de aplicaciones y servicios digitales pensados principalmente para dispositivos móviles.',
    'about.p5':               'Cambiaron las herramientas, los formatos y los contextos, pero no tanto lo que me interesa: entender los problemas, compartir criterio y construir soluciones claras y útiles.',
    'contact.label':          'Contacto',
    'footer.alias':           'También conocido como Ajaspino',
  }
};

/* --- Motor i18n ------------------------------------------- */
let currentLang = localStorage.getItem('lang') || 'gl';

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  document.querySelectorAll('.work-item').forEach(item => {
    const capKey = `caption${lang.charAt(0).toUpperCase() + lang.slice(1)}`;
    const caption = item.dataset[capKey];
    if (caption) {
      item.dataset.caption = caption;
      item.setAttribute('aria-label', caption);
    }
  });

  document.documentElement.lang = lang;

  const titles = {
    gl: 'Chenchu López — Deseñador gráfico e UX/UI',
    es: 'Chenchu López — Diseñador gráfico y UX/UI'
  };
  document.title = titles[lang];

  const metaDesc = {
    gl: 'Portfolio persoal de Chenchu López. Máis de 25 anos traballando entre o deseño gráfico e os produtos dixitais. Ribadeo, 1975. A Coruña, agora.',
    es: 'Portfolio personal de Chenchu López. Más de 25 años trabajando entre el diseño gráfico y los productos digitales. Ribadeo, 1975. A Coruña, ahora.'
  };
  document.querySelector('meta[name="description"]').setAttribute('content', metaDesc[lang]);

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
const menuToggle  = document.getElementById('menu-toggle');
const mobileMenu  = document.getElementById('mobile-menu');

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

/* --- Filtro de trabajos ----------------------------------- */
document.querySelectorAll('.works-filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    document.querySelectorAll('.works-filters button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    document.querySelectorAll('.work-item').forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.classList.remove('is-hidden');
      } else {
        item.classList.add('is-hidden');
      }
    });
  });
});

/* --- Lightbox --------------------------------------------- */
const lightbox      = document.getElementById('lightbox');
const lightboxImg   = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('.work-item[data-src]').forEach(item => {
  item.addEventListener('click', () => {
    lightboxImg.src = item.dataset.src;
    lightboxImg.alt = item.dataset.caption || '';
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); item.click(); }
  });
});

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* --- Scroll spy ------------------------------------------- */
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const sections = document.querySelectorAll('main section[id]');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

/* --- Parallax + fade/scale imaxes grid -------------------- */
const parallaxItems = document.querySelectorAll('.work-item-image');
const pState = Array.from(parallaxItems).map(() => ({ curY: 0, tgtY: 0 }));

function runParallax() {
  const vh = window.innerHeight;
  parallaxItems.forEach((item, i) => {
    const img = item.querySelector('img');
    if (!img) return;
    const rect = item.getBoundingClientRect();

    // Progress: 0 cuando card bajo viewport, 1 cuando base de card visible
    const p = Math.max(0, Math.min(1, (vh - rect.top) / rect.height));

    // Parallax Y con lerp
    pState[i].tgtY = ((rect.top + rect.height / 2 - vh / 2) / vh) * 18;
    pState[i].curY += (pState[i].tgtY - pState[i].curY) * 0.07;

    // Opacidad y escala directas al scroll (sin lerp)
    img.style.opacity   = (0.2 + p * 0.8).toFixed(3);
    img.style.transform = `translateY(${pState[i].curY.toFixed(2)}px) scale(${(0.75 + p * 0.25).toFixed(3)})`;
  });
  requestAnimationFrame(runParallax);
}

runParallax();

