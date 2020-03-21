const express = require('express');
const route = express.Router();
const mongodb = require('mongodb');
const assert =  require('assert');
const bodyParser = require('body-parser');

var url = 'mongodb://localhost:27017/data/main';

var urlencoded = bodyParser.urlencoded({extended:false});

route.get('/',(req,res,next)=>{
    res.render('admin',{layout:'admin.hbs'});
});

route.get('/submit',(req,res,next)=>{
    mongodb.connect(url,(err,db)=>{
        assert.equal(null,err);
        var itemFound = db.collection('products-data').findOne(item,{'$slice':'1'},(err,result)=>{
            assert.equal(null,err);
            console.log('succeed');
            console.log(itemFound);
        })
        res.render('admin',{layout:'admin.hbs'},{item:itemFound});
    });
});

route.post('/',urlencoded,(req,res,next)=>{
    console.log('ok');
    var item = {
        name: req.body.name,
        price: req.body.price,
        brand: req.body.brand,
        discript: req.body.discript,
        measure: req.body.measure,
        comment: req.body.comment,
        type:req.body.type,
        features:{
            color: req.body.color,
            size: req.body.size,
            img: req.body.img,
            ingre: req.body.ingre,
            for: req.body.for,
        }
    };
    mongodb.connect(url,(err,db)=>{
        assert.equal(null,err);
        db.collection('products-data').insertOne(item,(err,result)=>{
            assert.equal(null,err);
            console.log('succeed');
            db.close();
        });
    });

    res.redirect('/');
});


module.exports = route;