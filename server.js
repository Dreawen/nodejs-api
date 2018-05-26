const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(bp.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./app/routes')(app, {});
app.listen(3000);