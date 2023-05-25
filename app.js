import express  from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Handlebars from 'handlebars';
import { engine } from 'express-handlebars';

import util from 'util';

import indexRoute from './routes/index.js';
import aboutRoute from './routes/about.js';
import joinRoute from './routes/join.js';
import learnRoute from './routes/learn.js';

import { I18n } from 'i18n';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));


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
  res.locals.languages = i18n.getLocales();
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
