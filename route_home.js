const express = require('express');
const route = express.Router();
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/main';

route.get('/',(req,res,next)=>{
    res.status(200);
    res.render('index',{layout:'index.hbs'});
});

module.exports = route;