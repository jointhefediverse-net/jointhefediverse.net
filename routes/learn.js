import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('../views/learn.handlebars', {
        footer_scripts: process.env.FOOTER_SCRIPTS
    });
});

export default router;