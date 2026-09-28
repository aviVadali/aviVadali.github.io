// Mark the current page; every navigation link also works without JavaScript.
(() => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
})();
