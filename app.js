const express = require('express');
const app = express();
const route_home = require('./route_home');
const route_login = require('./route_login');
const hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', layoutsDir: __dirname + '/views/'}));
app.set('view engine','hbs');

app.use(express.static(__dirname + '/public/'))
app.use('/homepage', route_home);
app.use('/login',route_login);

module.exports = app;