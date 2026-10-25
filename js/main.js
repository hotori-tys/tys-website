'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  const mobile = window.matchMedia('(max-width: 760px)');
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  const updateMenu = () => { closeMenu(); toggle.hidden = !mobile.matches; document.documentElement.classList.toggle('js-menu', mobile.matches); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
  navigation.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  mobile.addEventListener('change', updateMenu);
  updateMenu();
}
