// Active nav link — match by filename
(function () {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === file || (file === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();

// Mobile nav toggle
const navToggle  = document.getElementById('nav-toggle');
const navLinksEl = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinksEl.classList.toggle('open');
});

document.addEventListener('click', e => {
    if (!e.target.closest('#navbar')) {
        navLinksEl.classList.remove('open');
    }
});
