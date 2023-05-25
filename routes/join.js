import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/join.handlebars', {
        supported_languages: JSON.stringify(res.locals.languages),
        footer_scripts: process.env.FOOTER_SCRIPTS
    });
});

export default router;