import Cookies from './cookies.js';

const switchLanguage = () => {
    const languageSwitcher = document.getElementById('language-switcher');
    let currentLanguage = Cookies.getCookie('locale');

    if (!currentLanguage){
        if (navigator.languages){
            const languages = navigator.languages.map(language => language.toLowerCase());

            languages.every(language => {
                if (supportedLanguages.includes(language)) {
                    currentLanguage = language;
                    return currentLanguage;
                }
                currentLanguage = 'en-us';
                return currentLanguage;
            });
        } else {
            currentLanguage = 'en-us';
        }
    }

    languageSwitcher.value = currentLanguage;
    languageSwitcher.addEventListener('change', (ev) => {
        const language = ev.target.value;
        Cookies.setCookie('locale', language, 100);
        location.reload();
    });
}

export default switchLanguage;