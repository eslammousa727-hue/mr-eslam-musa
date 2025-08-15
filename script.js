// --- THEME TOGGLE SCRIPT ---
const themeCheckbox = document.getElementById('theme-checkbox');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        themeCheckbox.checked = true;
    } else {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        themeCheckbox.checked = false;
    }
}
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeCheckbox.addEventListener('change', () => {
    const newTheme = themeCheckbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

// --- DYNAMIC ICONS SCRIPT ---
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-icons-container');
    if (container) {
        const icons = [
            `<i class='bx bxs-pyramid'></i>`, `<i class='bx bx-sword'></i>`, `<i class='bx bx-castle'></i>`,
            `<i class='bx bx-globe'></i>`, `<i class='bx bx-map'></i>`,
        ];

        const iconCount = 15;
        for (let i = 0; i < iconCount; i++) {
            const iconWrapper = document.createElement('div');
            iconWrapper.className = 'dynamic-icon';
            iconWrapper.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            
            const size = Math.random() * 6 + 4;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 10;
            
            iconWrapper.style.width = `${size}vw`;
            iconWrapper.style.height = `${size}vw`;
            iconWrapper.style.fontSize = `${size}vw`;
            iconWrapper.style.top = `${Math.random() * 90}%`;
            iconWrapper.style.left = `${Math.random() * 90}%`;
            iconWrapper.style.animationDuration = `${duration}s, ${duration - 5}s`;
            iconWrapper.style.animationDelay = `${delay}s`;
            
            container.appendChild(iconWrapper);
        }
    }
});

// --- MOBILE MENU SCRIPT ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});