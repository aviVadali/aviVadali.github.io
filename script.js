// Keep the research navigation state accurate when arriving at an anchor.
(() => {
  const links = document.querySelectorAll('nav a');
  const updateNavigation = () => {
    const page = location.pathname.split('/').pop() || 'index.html';
    const current = page === 'index.html' && location.hash === '#research'
      ? 'index.html#research' : page;
    links.forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };
  updateNavigation();
  window.addEventListener('hashchange', updateNavigation);
})();
