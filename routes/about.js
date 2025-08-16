import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/about.handlebars', {
        supported_languages: JSON.stringify(res.locals.languages),
        translations: res.translations,
        attributions: res.attributions,
        current_locale: res.currentLocale,
        footer_scripts: process.env.FOOTER_SCRIPTS
    });
});

export default router;