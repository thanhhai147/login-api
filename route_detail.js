const express = require('express');
const route = express.Router();
const mongodb = require('mongodb');

var url = 'mongodb://localhost:27017/data/main';

route.get('/',(req,res,next)=>{
    res.render('single-product',{layout:'single-product.hbs'});
});

module.exports = route;