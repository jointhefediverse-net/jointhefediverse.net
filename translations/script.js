import { readdirSync, readFileSync, writeFileSync } from 'fs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

readdirSync(__dirname)
.filter(file => path.extname(file) === '.json')
.forEach(file => {
    const locale = file.replace('.json', '');
    
    if (!fs.existsSync(locale)){
        fs.mkdirSync(locale);
    }

    const localeInfo = JSON.parse(fs.readFileSync(`${__dirname}/${locale}.json`, 'utf8'));

    if (localeInfo.available){
        console.log(`processing ${localeInfo.label_en} (${locale}) translation...`);
        let translationData = {};

        readdirSync(`${__dirname}/${locale}`)
        .filter(file => path.extname(file) === '.json')
        .forEach(page => {
            page = page.replace('.json', '');

            const translation = JSON.parse(readFileSync(`${__dirname}/${locale}/${page}.json`));

            // console.log(translation);

            for (const key in translation) {
                translationData[`${page}_${key}`] = translation[key];
            }            
    
        });


        console.log(`found ${Object.keys(translationData).filter(str => translationData[str].length).length} translation string(s)`)


        console.log(`writing locale file...`);
        writeFileSync(`${__dirname}/../locales/${locale}.json`, JSON.stringify(translationData, null, 2), 'utf8');
    }



    

});
