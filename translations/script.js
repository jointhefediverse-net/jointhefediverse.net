import { readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let locales = [];
let translations = {};

console.log(`loading translation strings...`);

readdirSync(__dirname)
.filter(file => path.extname(file) === '.json')
.forEach(file => {
    const page = file.replace('.json', '');
    const translation = JSON.parse(readFileSync(`${__dirname}/${page}.json`));
    // console.log(translation);

    for (const key in translation) {
        for (const locale in translation[key]) {
            if (!locales.includes(locale)){
                locales.push(locale);
                translations[locale] = {};
            }
            translations[locale][`${page}_${key}`] = translation[key][locale];
        }      
    }
});

// console.log({locales});
// console.log({translations});

console.log(`writing locale files...`);

locales.forEach(locale => {
    writeFileSync(`${__dirname}/../locales/${locale}.json`, JSON.stringify(translations[locale], null, 2), 'utf8');
});

locales.forEach(locale => {
    console.log(` - ${locale}: found ${Object.keys(translations[locale]).filter(str => translations[locale][str].length).length} translation string(s)`)
});