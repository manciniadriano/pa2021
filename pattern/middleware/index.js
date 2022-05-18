var express = require('express');
//const { isNewExpression } = require('typescript');
var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
  };

var checkHeader = function(req, res, next){
    const authHeader = req.headers.authorization;
    if (authHeader) {
        next();
    }else{
        next("no auth header");
    }
};

var checkHeader = function(req, res, next){
    const authHeader = req.headers.authorization;
    if (authHeader) {
        next();
    }else{
        let err = new Error("ahi ahi no auth header");
        next(err);
    }
};

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  }

function errorHandler(err, req, res, next) {   
    res.status(500).send({"error": err.message});
  }
  

app.use(myLogger);
app.use(requestTime);
app.use(checkHeader);
app.use(logErrors);
app.use(errorHandler);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);