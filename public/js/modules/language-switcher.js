import Cookies from './cookies.js';
import {getUrlParam, setUrlParam} from './urlParams.js';

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

    const langParam = getUrlParam("lang");

    if (!langParam){
        setUrlParam("lang", currentLanguage);
    }

    languageSwitcher.value = currentLanguage;

    [...document.querySelectorAll('a:not([href*="://"])')].forEach(a => {
        const url = new URL(a.href);
        if (!url.hash){
            a.href += `?lang=${currentLanguage}`;
        }
    });

    languageSwitcher.addEventListener('change', (ev) => {
        const language = ev.target.value;
        Cookies.setCookie('locale', language, 100);
        window.location = `${window.location.pathname}?lang=${language}`; 
        // location.reload();
    });


}

export default switchLanguage;