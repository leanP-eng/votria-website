(function(){
  'use strict';

  const STORAGE_KEY = 'votria_cookie_choice_v1';
  const CONSENT_TTL = 180 * 24 * 60 * 60 * 1000;
  const GA_ID = 'G-WDMPM0P81V';
  let analyticsLoaded = false;

  function readChoice(){
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(!raw) return null;
      const stored = JSON.parse(raw);
      if(!stored || !stored.choice || !stored.expiresAt) return null;
      if(Date.now() > stored.expiresAt){
        localStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return stored.choice;
    }catch(error){
      return null;
    }
  }

  function saveChoice(choice){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        choice: choice,
        savedAt: new Date().toISOString(),
        expiresAt: Date.now() + CONSENT_TTL
      }));
    }catch(error){}
  }

  function deleteCookie(name, domain){
    const domainPart = domain ? '; domain=' + domain : '';
    document.cookie = name + '=; Max-Age=0; path=/' + domainPart + '; SameSite=Lax';
  }

  function deleteAnalyticsCookies(){
    const names = document.cookie.split(';').map(function(item){
      return item.split('=')[0].trim();
    }).filter(function(name){
      return name === '_ga' || name.indexOf('_ga_') === 0;
    });

    names.forEach(function(name){
      deleteCookie(name, '');
      deleteCookie(name, location.hostname);
      deleteCookie(name, '.' + location.hostname.replace(/^www\./, ''));
    });
  }

  function loadAnalytics(){
    if(analyticsLoaded || document.querySelector('script[data-votria-analytics]')) return;
    analyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
    script.setAttribute('data-votria-analytics', 'true');
    document.head.appendChild(script);
  }

  function removeBanner(){
    const banner = document.getElementById('votria-cookie-banner');
    if(banner) banner.remove();
  }

  function createSettingsButton(){
    if(document.getElementById('votria-cookie-settings')) return;

    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'votria-cookie-settings';
    button.className = 'votria-cookie-settings';
    button.textContent = 'Cookies';
    button.addEventListener('click', function(){
      createBanner(true);
    });
    document.body.appendChild(button);
  }

  function applyChoice(choice, fromSettings){
    const previous = readChoice();
    saveChoice(choice);
    removeBanner();
    createSettingsButton();

    if(choice === 'accepted'){
      loadAnalytics();
    }else{
      deleteAnalyticsCookies();
      if(fromSettings && previous === 'accepted'){
        location.reload();
      }
    }
  }

  function createStyles(){
    if(document.getElementById('votria-cookie-styles')) return;

    const style = document.createElement('style');
    style.id = 'votria-cookie-styles';
    style.textContent = `
      .votria-cookie-banner{position:fixed;z-index:10000;left:1rem;right:1rem;bottom:1rem;max-width:760px;margin:auto;background:#fff;color:#24221d;border:1px solid rgba(36,34,29,.18);border-radius:16px;box-shadow:0 14px 40px rgba(0,0,0,.18);padding:1rem 1.1rem;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
      .votria-cookie-banner h2{font:800 1rem/1.3 Manrope,Inter,system-ui,sans-serif;margin:0 0 .4rem}
      .votria-cookie-banner p{font-size:.84rem;line-height:1.55;margin:0;color:#55524c}
      .votria-cookie-banner a{color:#01696f;font-weight:700;text-decoration:underline;text-underline-offset:2px}
      .votria-cookie-actions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.85rem}
      .votria-cookie-actions button{flex:1 1 180px;min-height:44px;border-radius:7px;padding:.7rem 1rem;font:700 .88rem/1 Inter,system-ui,sans-serif;cursor:pointer}
      .votria-cookie-refuse{background:#fff;color:#24221d;border:1.5px solid rgba(36,34,29,.24)}
      .votria-cookie-accept{background:#01696f;color:#fff;border:1.5px solid #01696f}
      .votria-cookie-settings{position:fixed;z-index:9998;left:.75rem;bottom:.75rem;border:1px solid rgba(36,34,29,.2);background:#fff;color:#24221d;border-radius:999px;padding:.45rem .72rem;font:700 .74rem/1 Inter,system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.12);cursor:pointer}
      [data-theme="dark"] .votria-cookie-banner,[data-theme="dark"] .votria-cookie-settings{background:#201f1d;color:#f0efec;border-color:rgba(255,255,255,.16)}
      [data-theme="dark"] .votria-cookie-banner p{color:#c0bdb7}
      [data-theme="dark"] .votria-cookie-refuse{background:#201f1d;color:#f0efec;border-color:rgba(255,255,255,.25)}
      @media(max-width:560px){.votria-cookie-banner{left:.65rem;right:.65rem;bottom:.65rem}.votria-cookie-actions{flex-direction:column}.votria-cookie-actions button{width:100%;flex-basis:auto}}
    `;
    document.head.appendChild(style);
  }

  function createBanner(fromSettings){
    removeBanner();
    createStyles();

    const banner = document.createElement('section');
    banner.id = 'votria-cookie-banner';
    banner.className = 'votria-cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-labelledby', 'votria-cookie-title');
    banner.setAttribute('aria-describedby', 'votria-cookie-text');

    banner.innerHTML = `
      <h2 id="votria-cookie-title">Mesure d’audience</h2>
      <p id="votria-cookie-text">VotrIA utilise Google Analytics uniquement avec votre accord pour mesurer la fréquentation du site. Refuser n’empêche pas l’accès au site. Votre choix est conservé pendant six mois et peut être modifié à tout moment. <a href="/confidentialite">En savoir plus</a>.</p>
      <div class="votria-cookie-actions">
        <button type="button" class="votria-cookie-refuse">Tout refuser</button>
        <button type="button" class="votria-cookie-accept">Accepter la mesure d’audience</button>
      </div>
    `;

    banner.querySelector('.votria-cookie-refuse').addEventListener('click', function(){
      applyChoice('refused', Boolean(fromSettings));
    });

    banner.querySelector('.votria-cookie-accept').addEventListener('click', function(){
      applyChoice('accepted', Boolean(fromSettings));
    });

    document.body.appendChild(banner);
    banner.querySelector('.votria-cookie-refuse').focus();
  }

  function init(){
    createStyles();
    const choice = readChoice();

    if(choice === 'accepted'){
      loadAnalytics();
      createSettingsButton();
    }else if(choice === 'refused'){
      deleteAnalyticsCookies();
      createSettingsButton();
    }else{
      createBanner(false);
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  }else{
    init();
  }
})();