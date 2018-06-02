const express = require('express');
const bp = require('body-parser');
const app = express();
const mysql = require('mysql');
const connection = require('express-myconnection');

app.use(bp.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(connection(mysql, {
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'angular'
}, 'pool'));

require('./app/routes')(app);
app.listen(3000);