import Cookies from './cookies.js';

const switchTheme = () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const htmlElement = document.documentElement;
    let currentTheme = Cookies.getCookie('theme') || 'auto';

    applyTheme(currentTheme);
    themeSwitcher.value = currentTheme;

    themeSwitcher.addEventListener('change', (ev) => {
        const selectedTheme = ev.target.value;
        applyTheme(selectedTheme);
        Cookies.setCookie('theme', selectedTheme, 365);
    });

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', () => {
        if (themeSwitcher.value === 'auto') {
            applyTheme('auto');
        }
    });

    function applyTheme(theme) {
        switch (theme) {
            case 'light':
                htmlElement.dataset.bsTheme = 'light';
                break;
            case 'dark':
                htmlElement.dataset.bsTheme = 'dark';
                break;
            case 'auto':
            default:
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                htmlElement.dataset.bsTheme = prefersDark ? 'dark' : 'light';
        }
    }
};

export default switchTheme;
