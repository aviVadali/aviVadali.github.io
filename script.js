// Highlight active sidebar link by current filename
(function () {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === file || (file === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();

// Mobile sidebar drawer
(function () {
    const button  = document.getElementById('menu-button');
    const sidebar = document.getElementById('sidebar');
    const scrim   = document.getElementById('sidebar-scrim');
    if (!button || !sidebar || !scrim) return;

    const open  = () => { sidebar.classList.add('open');    scrim.classList.add('open'); };
    const close = () => { sidebar.classList.remove('open'); scrim.classList.remove('open'); };

    button.addEventListener('click', e => {
        e.stopPropagation();
        sidebar.classList.contains('open') ? close() : open();
    });
    scrim.addEventListener('click', close);

    sidebar.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.matchMedia('(max-width: 800px)').matches) close();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) close();
    });
})();
