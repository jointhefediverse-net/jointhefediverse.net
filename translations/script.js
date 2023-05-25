import { readdirSync, readFileSync, writeFileSync } from 'fs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationData = JSON.parse(fs.readFileSync(`${__dirname}/info.json`, 'utf8'));
let availableLanguages = translationData.filter(language => language.available).map(language => language.code);

console.log(availableLanguages);

let locales = [];
let translations = {};

console.log(`loading translation strings...`);
const translationFilesPath = `${__dirname}/data`;

console.log({
    '__dirname': __dirname,
    translationFilesPath,
});

readdirSync(translationFilesPath)
.filter(file => path.extname(file) === '.json')
.forEach(file => {
    const page = file.replace('.json', '');
    const translation = JSON.parse(readFileSync(`${translationFilesPath}/${page}.json`));
    // console.log(translation);

    for (const key in translation) {
        for (const locale in translation[key]) {
            if (availableLanguages.includes(locale)){
                if (!locales.includes(locale)){
                    locales.push(locale);
                    translations[locale] = {};
                }
                translations[locale][`${page}_${key}`] = translation[key][locale];
            }
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