// ================================================
//  Smooth scroll for in-page anchor links
// ================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        navLinks.classList.remove('open');
    });
});

// ================================================
//  Active nav link — highlights current section
// ================================================
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAnchors.forEach(a => {
                a.classList.toggle(
                    'active',
                    a.getAttribute('href') === '#' + entry.target.id
                );
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ================================================
//  Mobile nav toggle
// ================================================
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile nav when clicking outside
document.addEventListener('click', e => {
    if (!e.target.closest('#navbar')) {
        navLinks.classList.remove('open');
    }
});
