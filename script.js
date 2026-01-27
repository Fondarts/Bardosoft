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
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (themeToggle) {
            const lang = localStorage.getItem('lang') || 'es';
            const t = translations && translations[lang] ? translations[lang] : null;
            
            if (theme === 'dark') {
                themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
                themeToggle.title = t ? t.themeToggleTitleLight : 'Cambiar a modo claro';
            } else {
                themeToggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
                themeToggle.title = t ? t.themeToggleTitleDark : 'Cambiar a modo oscuro';
            }
        }
    }

    // Language Toggle
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'es';

    // Load translations and apply them
    function applyTranslations(lang) {
        if (typeof translations === 'undefined') return;
        
        const t = translations[lang];
        if (!t) return;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.value = t[key];
                } else {
                    el.textContent = t[key];
                }
            }
        });

        // Update title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (t[key]) {
                el.title = t[key];
            }
        });

        // Update theme toggle title
        if (themeToggle) {
            const theme = document.documentElement.getAttribute('data-theme');
            themeToggle.title = theme === 'dark' ? t.themeToggleTitleLight : t.themeToggleTitleDark;
        }

        // Update page-specific content based on current page
        const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
        updatePageContent(pageName, lang, t);
    }

    function updatePageContent(pageName, lang, t) {
        // Update descriptions and features based on page
        if (pageName === 'quizlo' || pageName === 'horarios' || pageName === 'mundial2026' || pageName === 'truedup' || pageName === 'facturacion' || pageName === 'ig-text') {
            let prefix = pageName === 'mundial2026' ? 'mundial' : pageName;
            if (pageName === 'ig-text') prefix = 'igText';
            
            // Update description paragraphs
            const descParagraphs = document.querySelectorAll('.project-description p');
            if (descParagraphs.length > 0 && t[prefix + 'Description1']) {
                descParagraphs[0].textContent = t[prefix + 'Description1'];
            }
            if (descParagraphs.length > 1 && t[prefix + 'Description2']) {
                descParagraphs[1].textContent = t[prefix + 'Description2'];
            }
            if (descParagraphs.length > 2 && t[prefix + 'Description3']) {
                descParagraphs[2].textContent = t[prefix + 'Description3'];
            }

            // Update features list
            const featuresList = document.querySelectorAll('.project-features li');
            featuresList.forEach((li, index) => {
                const featureKey = prefix + 'Feature' + (index + 1);
                if (t[featureKey]) {
                    li.textContent = t[featureKey];
                }
            });

            // Update features title
            const featuresTitle = document.querySelector('.project-features h2');
            if (featuresTitle && t.quizloFeatures) {
                featuresTitle.textContent = t.quizloFeatures;
            }

            // Update buttons
            const demoButton = document.querySelector('.project-demo-inline a, .project-demo-inline span');
            if (demoButton) {
                if (demoButton.tagName === 'A') {
                    if (pageName === 'quizlo' || pageName === 'mundial2026') {
                        demoButton.textContent = t.tryIt;
                    } else if (pageName === 'horarios' || pageName === 'facturacion') {
                        demoButton.textContent = t.viewDemo;
                    }
                } else if (demoButton.tagName === 'SPAN') {
                    demoButton.textContent = t.soon;
                }
            }
        }

        // Update footer
        const footer = document.querySelector('footer p');
        if (footer && t.footer) {
            footer.textContent = t.footer;
        }

        // Update back link
        const backLink = document.querySelector('.back-link');
        if (backLink && t.backToProjects) {
            backLink.textContent = t.backToProjects;
        }
    }

    if (langToggle) {
        updateLangIcon();
        applyTranslations(currentLang);
        
        langToggle.addEventListener('click', function() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('lang', currentLang);
            updateLangIcon();
            applyTranslations(currentLang);
        });
    }

    function updateLangIcon() {
        if (langToggle) {
            if (currentLang === 'es') {
                langToggle.innerHTML = '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 3 2\'%3E%3Cpath fill=\'%2375AADB\' d=\'M0 0h3v0.67H0z\'/%3E%3Cpath fill=\'%23FFFFFF\' d=\'M0 0.67h3v0.67H0z\'/%3E%3Cpath fill=\'%2375AADB\' d=\'M0 1.33h3v0.67H0z\'/%3E%3Ccircle cx=\'1.5\' cy=\'1\' r=\'0.3\' fill=\'%23F6B40E\'/%3E%3C/svg%3E" alt="Argentina">';
                langToggle.title = translations && translations.es ? translations.es.langToggleTitle : 'Cambiar a inglés';
            } else {
                langToggle.innerHTML = '<img src="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 60 30\'%3E%3Cpath fill=\'%23B22234\' d=\'M0 0h60v30H0z\'/%3E%3Cpath fill=\'%23FFFFFF\' d=\'M0 0h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0zm0 4.62h60v2.31H0z\'/%3E%3Cpath fill=\'%233C3B6E\' d=\'M0 0h24v16.15H0z\'/%3E%3C/svg%3E" alt="USA">';
                langToggle.title = translations && translations.en ? translations.en.langToggleTitle : 'Switch to Spanish';
            }
        }
    }
});



