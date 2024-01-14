import Cookies from './cookies.js';

const switchLanguage = () => {
    const languageSwitcher = document.getElementById('language-switcher');
    let currentLanguage = Cookies.getCookie('locale');

    if (!currentLanguage){
        if (navigator.languages){
            const languages = navigator.languages.map(language => language.toLowerCase());
            for (let i = 0, j = languages.length; i < j; i++){
                if (supportedLanguages.includes(languages[i])) {
                    currentLanguage = languages[i];
                    break;
                }
            }
        } else {
            currentLanguage = 'en-us';
        }
    }

    languageSwitcher.value = currentLanguage;

    [...document.querySelectorAll('a:not([href*="://"])')].forEach(a => {
        // a.href += `?lang=${currentLanguage}`;
    });

    languageSwitcher.addEventListener('change', (ev) => {
        const language = ev.target.value;
        Cookies.setCookie('locale', language, 100);
        window.location = `${window.location.pathname}?lang=${language}`; 
        // location.reload();
    });


}

export default switchLanguage;