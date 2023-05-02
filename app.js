import express  from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import { engine } from 'express-handlebars';

import indexRoute from './routes/index.js';
import joinRoute from './routes/join.js';
import learnRoute from './routes/learn.js';

const app = express();

app.use(compression());
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', indexRoute);
app.use('/join', joinRoute);
app.use('/learn', learnRoute);

export default app;
