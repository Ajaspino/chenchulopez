(function () {
  var host = location.hostname;
  if (!host || host === 'localhost' || host === '127.0.0.1') return;
  if (location.pathname.indexOf('/stats') === 0 || location.pathname.indexOf('/404') === 0) return;
  if (navigator.doNotTrack === '1' || navigator.webdriver) return;
  try { if (localStorage.getItem('chenchulopez:no-track')) return; } catch (_) {}
  if (/bot|crawl|spider|scraper|prerender|headless/i.test(navigator.userAgent)) return;

  try {
    if (sessionStorage.getItem('chenchulopez:counted')) return;
    sessionStorage.setItem('chenchulopez:counted', '1');
  } catch (_) { return; }

  var NS  = 'chenchulopez-52d6830ff85e';
  var API = 'https://abacus.jasoncameron.dev';

  var TZ = {"Europe/Amsterdam":"NL","Europe/Brussels":"BE","Europe/Berlin":"DE","Europe/Busingen":"DE","Europe/Madrid":"ES","Africa/Ceuta":"ES","Atlantic/Canary":"ES","Europe/Paris":"FR","Europe/London":"GB","Europe/Dublin":"IE","Europe/Lisbon":"PT","Atlantic/Madeira":"PT","Atlantic/Azores":"PT","Europe/Rome":"IT","Europe/Vienna":"AT","Europe/Zurich":"CH","Europe/Copenhagen":"DK","Europe/Stockholm":"SE","Europe/Oslo":"NO","Europe/Helsinki":"FI","Europe/Warsaw":"PL","Europe/Prague":"CZ","Europe/Budapest":"HU","Europe/Athens":"GR","Europe/Bucharest":"RO","Europe/Sofia":"BG","Europe/Zagreb":"HR","Europe/Belgrade":"RS","Europe/Kiev":"UA","Europe/Kyiv":"UA","Europe/Moscow":"RU","Europe/Istanbul":"TR","Asia/Istanbul":"TR","Europe/Luxembourg":"LU","Europe/Vilnius":"LT","Europe/Riga":"LV","Europe/Tallinn":"EE","Europe/Bratislava":"SK","Europe/Ljubljana":"SI","Atlantic/Reykjavik":"IS","Europe/Malta":"MT","America/New_York":"US","America/Chicago":"US","America/Denver":"US","America/Los_Angeles":"US","America/Phoenix":"US","America/Anchorage":"US","America/Detroit":"US","America/Boise":"US","America/Indiana/Indianapolis":"US","Pacific/Honolulu":"US","America/Toronto":"CA","America/Vancouver":"CA","America/Montreal":"CA","America/Halifax":"CA","America/Edmonton":"CA","America/Winnipeg":"CA","America/St_Johns":"CA","America/Regina":"CA","America/Mexico_City":"MX","America/Cancun":"MX","America/Monterrey":"MX","America/Tijuana":"MX","America/Sao_Paulo":"BR","America/Bahia":"BR","America/Fortaleza":"BR","America/Manaus":"BR","America/Recife":"BR","America/Argentina/Buenos_Aires":"AR","America/Buenos_Aires":"AR","America/Bogota":"CO","America/Lima":"PE","America/Santiago":"CL","America/Caracas":"VE","America/Montevideo":"UY","America/Paramaribo":"SR","America/Curacao":"CW","America/Aruba":"AW","America/Havana":"CU","America/Panama":"PA","America/Costa_Rica":"CR","America/Guatemala":"GT","America/Puerto_Rico":"PR","America/Santo_Domingo":"DO","America/Guayaquil":"EC","America/La_Paz":"BO","America/Asuncion":"PY","Asia/Tokyo":"JP","Asia/Seoul":"KR","Asia/Shanghai":"CN","Asia/Hong_Kong":"HK","Asia/Singapore":"SG","Asia/Kolkata":"IN","Asia/Calcutta":"IN","Asia/Dubai":"AE","Asia/Jerusalem":"IL","Asia/Tel_Aviv":"IL","Asia/Bangkok":"TH","Asia/Jakarta":"ID","Asia/Manila":"PH","Asia/Taipei":"TW","Asia/Kuala_Lumpur":"MY","Asia/Riyadh":"SA","Asia/Tehran":"IR","Asia/Karachi":"PK","Asia/Dhaka":"BD","Asia/Ho_Chi_Minh":"VN","Asia/Saigon":"VN","Africa/Johannesburg":"ZA","Africa/Cairo":"EG","Africa/Lagos":"NG","Africa/Nairobi":"KE","Africa/Casablanca":"MA","Africa/Algiers":"DZ","Africa/Tunis":"TN","Africa/Accra":"GH","Australia/Sydney":"AU","Australia/Melbourne":"AU","Australia/Brisbane":"AU","Australia/Perth":"AU","Australia/Adelaide":"AU","Australia/Hobart":"AU","Australia/Darwin":"AU","Pacific/Auckland":"NZ"};

  var tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (_) {}
  var country = TZ[tz] || 'XX';

  var rawLang = (navigator.language || '').toLowerCase().split('-')[0];
  var validLangs = ['en','es','gl','nl','ca','eu','de','fr','pt','it'];
  var lang = validLangs.indexOf(rawLang) >= 0 ? rawLang : 'other';

  var ua = navigator.userAgent;
  var device = /mobile/i.test(ua) ? 'mobile' : /tablet|ipad/i.test(ua) ? 'tablet' : 'desktop';

  var browser = 'other';
  if      (/SamsungBrowser/i.test(ua)) browser = 'samsung';
  else if (/OPR|Opera/i.test(ua))      browser = 'opera';
  else if (/Edg\//i.test(ua))          browser = 'edge';
  else if (/Firefox/i.test(ua))        browser = 'firefox';
  else if (/Chrome/i.test(ua))         browser = 'chrome';
  else if (/Safari/i.test(ua))         browser = 'safari';

  var day = new Date().toISOString().slice(0, 10);

  // Slug de la página actual
  var seg = location.pathname.replace(/\/$/, '').split('/').pop();
  var page = (!seg || seg === 'chenchulopez') ? 'index' : seg.replace('.html', '');

  ['visits', 'd-' + day, 'c-' + country, 'l-' + lang, 'dv-' + device, 'b-' + browser, 'p-' + page].forEach(function (k) {
    fetch(API + '/hit/' + NS + '/' + k).catch(function () {});
  });
})();
