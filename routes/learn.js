import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/learn.handlebars', {
        supported_languages: JSON.stringify(res.locals.languages),
        translations: res.translations,
        footer_scripts: process.env.FOOTER_SCRIPTS
    });
});

export default router;