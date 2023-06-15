import express  from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Handlebars from 'handlebars';
import { engine } from 'express-handlebars';

import indexRoute from './routes/index.js';
import aboutRoute from './routes/about.js';
import joinRoute from './routes/join.js';
import learnRoute from './routes/learn.js';

import { I18n } from 'i18n';
import fs from 'fs';
import path from 'node:path';
import { readdirSync, readFileSync } from 'fs';
import { fileURLToPath } from 'node:url';

import sortArrayOfObjects from './modules/sort-array-of-objects.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
let translationData = [], locales = [];

readdirSync(`${__dirname}/locales`)
.filter(file => path.extname(file) === '.json')
.forEach(locale => {
  locale = locale.replace('.json', '');
  locales.push(locale);

  const translationDataObj = JSON.parse(fs.readFileSync(`${__dirname}/translations/${locale}/${locale}.json`, 'utf8'));
  translationDataObj.code = locale;
  translationData.push(translationDataObj)
});

const i18n = new I18n({
  directory: path.join(__dirname, 'locales'),
  autoReload: true,
  defaultLocale: 'en-us',
  cookie: 'locale'
});

Handlebars.registerHelper('__', function () {
  return i18n.__.apply(this, arguments);
});

Handlebars.registerHelper('__n', function () {
  return i18n.__n.apply(this, arguments);
});

Handlebars.registerHelper('ifEquals', (firstArg, secondArg, options) => {
  return (firstArg === secondArg) ? options.fn(this) : options.inverse(this);
});

const app = express();

app.use(compression());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cookieParser());
app.use(bodyParser.json());

app.use(i18n.init)

app.use((req, res, next) => {
  const cookies = cookieParser.JSONCookies(req.cookies);
  let currentLocale = 'en-us';
  
  res.locals.languages = i18n.getLocales();
  res.translations = sortArrayOfObjects(translationData, 'label_lat');

  if (cookies && cookies.locale){
    currentLocale =  cookies.locale;
  }

  try{
    res.currentLocale =  translationData.filter(locale => locale.code === currentLocale)[0];
  } catch(err){ /* noop */}

  next();
});

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/join', joinRoute);
app.use('/learn', learnRoute);

export default app;
