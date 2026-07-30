document.documentElement.classList.add('js');

(function(){
  'use strict';

  /* Menu mobile — accessible au clavier, sans dépendance externe.
     Le contenu et la navigation restent utilisables sans JavaScript :
     ce script ne fait qu'ouvrir/fermer un panneau, il ne conditionne
     jamais l'accès aux liens (ceux-ci existent déjà dans le HTML). */
  function initMobileMenu(){
    var btn = document.getElementById('menuBtn');
    var menu = document.getElementById('mobileMenu');
    if(!btn || !menu) return;

    function isOpen(){
      return menu.classList.contains('is-open');
    }

    function openMenu(){
      menu.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('menu-open');
    }

    function closeMenu(returnFocus){
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
      if(returnFocus) btn.focus();
    }

    btn.addEventListener('click', function(){
      if(isOpen()) closeMenu(false);
      else openMenu();
    });

    menu.addEventListener('click', function(e){
      if(e.target.tagName === 'A') closeMenu(false);
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && isOpen()) closeMenu(true);
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  }else{
    initMobileMenu();
  }
})();
