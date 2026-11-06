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
    'work.bruar.date':        '2021',
    'work.bruar.discipline':  'Deseño Gráfico',
    'work.bruar.description': 'Identidade visual para Bruar, asociación cultural dedicada á promoción do jazz e da música moderna en Ribadeo.',
    'work.bruar.body1':       'A colaboración con Bruar comezou en 2016, desenvolvendo diferentes materiais de comunicación para a asociación. Co paso dos anos, a necesidade dunha identidade propia fíxose evidente e, en 2021, naceu a marca actual.',
    'work.bruar.body2':       'O resultado é un sistema visual sinxelo e flexible, pensado para acompañar a evolución da asociación e adaptarse a soportes moi diversos sen perder recoñecemento.',
    'work.bruar.body3':       'Bruar é unha asociación cultural cun orzamento limitado para comunicación. Esa realidade condicionou o deseño desde o principio: a identidade debía ser económica de producir, doada de reproducir e suficientemente flexible para funcionar en calquera contexto.',
    'work.bruar.body4':       'A marca constrúese a partir dunha forma xeométrica sinxela inspirada nun metrónomo, convertendo un elemento ligado á práctica e ao ensino musical nun símbolo recoñecible e versátil. O sistema permite múltiples aplicacións cromáticas sen perder personalidade nin consistencia.',
    'work.bruar.body5':       'A identidade foi deseñada para convivir con soportes moi diferentes, desde pequenos elementos de uso interno ata aplicacións de gran formato. Máis que un logotipo, o proxecto define un sistema gráfico capaz de adaptarse ás necesidades da asociación mantendo sempre unha linguaxe visual coherente.',
    'work.cachisnamar.date':        '2017',
    'work.cachisnamar.discipline':  'Deseño Gráfico',
    'work.cachisnamar.description': 'Identidade visual para o proxecto persoal do produtor musical Iago Bouzón.',
    'work.cachisnamar.body1':       'O que comezou como unha colaboración para a produción dunha maqueta acabou converténdose no desenvolvemento da identidade visual de Cachisnamar Recording Studio, o estudo persoal de Iago Bouzón.',
    'work.cachisnamar.body2':       'O obxectivo era crear unha marca próxima e recoñecible, afastada da estética técnica habitual dos estudos de gravación e capaz de transmitir personalidade desde o primeiro momento.',
    'work.cachisnamar.body3':       'A identidade parte dunha idea sinxela: dous discos de vinilo e un brazo dun tocadiscos forman un rostro. Este recurso transforma elementos propios do universo musical nun símbolo facilmente recoñecible, achegándolle un carácter desenfadado sen perder a súa relación directa coa gravación e a produción musical.',
    'work.cachisnamar.body4':       'A identidade apóiase nunha paleta moi limitada —amarelo, negro e branco— e nunha combinación tipográfica que achega contraste entre expresividade e funcionalidade. O resultado é un sistema visual sinxelo, doadamente reproducible e adaptable a soportes físicos e dixitais.',
    'work.bruar.body6':       'Desde a creación da identidade en 2021, a marca continúa evolucionando xunto coa asociación, incorporando novas aplicacións e mantendo unha presenza visual consistente en todos os soportes.',
    'work.grot.date':        '2017',
    'work.grot.discipline':  'Deseño Gráfico',
    'work.grot.description': 'Material promocional para Grot, banda de rock formada na Coruña en 2017.',
    'work.grot.body1':       'Grot é unha banda de rock formada na Coruña en 2017, integrada por Carlos Pena (voz e guitarra acústica), Jano García (guitarra eléctrica), Rubén Martínez (baixo) e Chenchu López (batería). <em>Dreaming to Become a Lady</em> foi a súa primeira maqueta, gravada por Aarón Bouzón en Cachisnamar Recording Studio no verán de 2017.',
    'work.grot.body2':       'Para acompañar a publicación, deseñouse un cartel promocional e a portada para unha edición en vinilo que finalmente non chegou a materializarse.',
    'work.trazos.date':        '2001',
    'work.trazos.discipline':  'Deseño Gráfico',
    'work.trazos.description': 'Imaxe principal da exposición e portada do catálogo <em>Trazos de Galicia. Un percorrido pola historia do debuxo contemporáneo galego</em>, organizada pola Deputación da Coruña en 2001.',
    'work.trazos.body1':       'Un proxecto desenvolvido en colaboración coa miña irmá Marigel, deseñadora e maquetadora en Rey de Oros, responsable do deseño e da maquetación da exposición. A miña achega centrouse na creación da imaxe principal, que protagonizou tanto a portada do catálogo como a propia mostra.',
    'work.trazos.body2':       'A exposición, producida por Rey de Oros en colaboración co museógrafo Pepe Barro, reuniu obras dalgúns dos artistas plásticos contemporáneos máis relevantes de Galicia. A proposta poñía o foco no trazo como elemento esencial da linguaxe plástica, con especial atención ao retrato construído a partir de liñas sinxelas. De carácter itinerante, percorreu diferentes concellos e salas da provincia da Coruña e chegou tamén a Milán.',
  },
  es: {
    'nav.works':              'Trabajos',
    'nav.about':              'Recorrido',
    'nav.contact':            'Contacto',
    'footer.alias':           'También conocido como Ajaspino',
    'work.nav.prev':          'Anterior',
    'work.nav.next':          'Siguiente',
    'work.bruar.date':        '2021',
    'work.bruar.discipline':  'Diseño Gráfico',
    'work.bruar.description': 'Identidad visual para Bruar, asociación cultural dedicada a la promoción del jazz y la música moderna en Ribadeo.',
    'work.bruar.body1':       'La colaboración con Bruar comenzó en 2016, desarrollando diferentes materiales de comunicación para la asociación. Con el paso de los años, la necesidad de una identidad propia se hizo evidente y, en 2021, nació la marca actual.',
    'work.bruar.body2':       'El resultado es un sistema visual sencillo y flexible, pensado para acompañar la evolución de la asociación y adaptarse a soportes muy diversos sin perder reconocimiento.',
    'work.bruar.body3':       'Bruar es una asociación cultural con un presupuesto limitado para comunicación. Esa realidad condicionó el diseño desde el principio: la identidad debía ser económica de producir, fácil de reproducir y lo suficientemente flexible como para funcionar en cualquier contexto.',
    'work.bruar.body4':       'La marca se construye a partir de una forma geométrica sencilla inspirada en un metrónomo, convirtiendo un elemento ligado a la práctica y la enseñanza musical en un símbolo reconocible y versátil. El sistema permite múltiples aplicaciones cromáticas sin perder personalidad ni consistencia.',
    'work.bruar.body5':       'La identidad fue diseñada para convivir con soportes muy diferentes, desde pequeños elementos de uso interno hasta aplicaciones de gran formato. Más que un logotipo, el proyecto define un sistema gráfico capaz de adaptarse a las necesidades de la asociación manteniendo siempre un lenguaje visual coherente.',

    'work.bruar.body6':       'Desde la creación de la identidad en 2021, la marca continúa evolucionando junto con la asociación, incorporando nuevas aplicaciones y manteniendo una presencia visual consistente en todos los soportes.',
    'work.cachisnamar.date':        '2017',
    'work.cachisnamar.discipline':  'Diseño Gráfico',
    'work.cachisnamar.description': 'Identidad visual para el proyecto personal del productor musical Iago Bouzón.',
    'work.cachisnamar.body1':       'Lo que comenzó como una colaboración para la producción de una maqueta acabó convirtiéndose en el desarrollo de la identidad visual de Cachisnamar Recording Studio, el estudio personal de Iago Bouzón.',
    'work.cachisnamar.body2':       'El objetivo era crear una marca cercana y reconocible, alejada de la estética técnica habitual de los estudios de grabación y capaz de transmitir personalidad desde el primer momento.',
    'work.cachisnamar.body3':       'La identidad parte de una idea sencilla: dos discos de vinilo y un brazo de un tocadiscos forman un rostro. Este recurso transforma elementos propios del universo musical en un símbolo fácilmente reconocible, aportándole un carácter desenfadado sin perder su relación directa con la grabación y la producción musical.',
    'work.cachisnamar.body4':       'La identidad se apoya en una paleta muy limitada —amarillo, negro y blanco— y en una combinación tipográfica que aporta contraste entre expresividad y funcionalidad. El resultado es un sistema visual sencillo, fácilmente reproducible y adaptable a soportes físicos y digitales.',
    'work.grot.date':        '2017',
    'work.grot.discipline':  'Diseño Gráfico',
    'work.grot.description': 'Material promocional para Grot, banda de rock formada en A Coruña en 2017.',
    'work.grot.body1':       'Grot es una banda de rock formada en A Coruña en 2017, integrada por Carlos Pena (voz y guitarra acústica), Jano García (guitarra eléctrica), Rubén Martínez (bajo) y Chenchu López (batería). <em>Dreaming to Become a Lady</em> fue su primera maqueta, grabada por Aarón Bouzón en Cachisnamar Recording Studio en el verano de 2017.',
    'work.grot.body2':       'Para acompañar la publicación, se diseñó un cartel promocional y la portada para una edición en vinilo que finalmente no llegó a materializarse.',
    'work.trazos.date':        '2001',
    'work.trazos.discipline':  'Diseño Gráfico',
    'work.trazos.description': 'Imagen principal de la exposición y portada del catálogo <em>Trazos de Galicia. Un percorrido pola historia do debuxo contemporáneo galego</em>, organizada por la Deputación da Coruña en 2001.',
    'work.trazos.body1':       'Un proyecto desarrollado en colaboración con mi hermana Marigel, diseñadora y maquetista en Rey de Oros, responsable del diseño y la maquetación de la exposición. Mi aportación se centró en la creación de la imagen principal, que protagonizó tanto la portada del catálogo como la propia muestra.',
    'work.trazos.body2':       'La exposición, producida por Rey de Oros en colaboración con el museógrafo Pepe Barro, reunió obras de algunos de los artistas plásticos contemporáneos más relevantes de Galicia. La propuesta ponía el foco en el trazo como elemento esencial del lenguaje plástico, con especial atención al retrato construido a partir de líneas simples. De carácter itinerante, recorrió diferentes municipios y salas de la provincia de A Coruña y llegó también a Milán.',
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

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
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

