import express from 'express';
const router = express.Router();
// TODO: temporarily use current date for lastmod
const date = new Date().toISOString();

router.get('/', (req, res) => {
    res.type('application/xml');
    res.send(/* xml */`<?xml version="1.0" encoding="UTF-8"?>
        <urlset
              xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
              xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
            <url>
            <loc>https://jointhefediverse.net/</loc>
            <lastmod>${date}</lastmod>
            <priority>1.00</priority>
            </url>
            <url>
            <loc>https://jointhefediverse.net/join</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
            </url>
            <url>
            <loc>https://jointhefediverse.net/learn</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
            </url>
            <url>
            <loc>https://jointhefediverse.net/about</loc>
            <lastmod>${date}</lastmod>
            <priority>0.80</priority>
            </url>
        </urlset>`);
});

export default router;