const express = require('express');
const app = express();
const route_home = require('./route_home');
const route_login = require('./route_login');
const route_category = require('./route_category');
const route_detail = require('./route_detail');
const route_admin = require('./route_admin');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');


app.engine('hbs', hbs({extname: 'hbs', layoutsDir: __dirname + '/views/'}));
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public/'))
app.use('/homepage', route_home);
app.use('/login',route_login);
app.use('/category',route_category);
app.use('/detail',route_detail);
app.use('/admin',route_admin);

module.exports = app;