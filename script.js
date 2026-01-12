// Efecto suave al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animación de entrada para las cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a todas las cards
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'es';

    if (langToggle) {
        updateLangIcon();
        
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('lang', currentLang);
            updateLangIcon();
            // Aquí puedes agregar lógica para cambiar el idioma del contenido
        });
    }

    function updateLangIcon() {
        if (langToggle) {
            if (currentLang === 'es') {
                langToggle.innerHTML = '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 3 2\'%3E%3Cpath fill=\'%23C8102E\' d=\'M0 0h3v2H0z\'/%3E%3Cpath fill=\'%23FFFFFF\' d=\'M0 0.67h3v0.67H0z\'/%3E%3Cpath fill=\'%2375AADB\' d=\'M0 0h3v0.67H0z\'/%3E%3C/svg%3E" alt="Argentina">';
                langToggle.title = 'Cambiar a inglés';
            } else {
                langToggle.innerHTML = '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 30\'%3E%3Cpath fill=\'%23B22234\' d=\'M0 0h60v30H0z\'/%3E%3Cpath fill=\'%23FFFFFF\' d=\'M0 0h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0z\'/%3E%3Cpath fill=\'%233C3B6E\' d=\'M0 0h24v16.15H0z\'/%3E%3C/svg%3E" alt="USA">';
                langToggle.title = 'Switch to Spanish';
            }
        }
    }
});



