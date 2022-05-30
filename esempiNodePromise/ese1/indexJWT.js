var express = require('express');
const jwt = require('jsonwebtoken');
const { isNewExpression } = require('typescript');
// const middlewareProva = require('./middlewareProva')
// const auth = require('./auth')
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

function checkToken(req,res,next){
  const bearerHeader = req.headers.authorization;
  if(typeof bearerHeader!=='undefined'){
      const bearerToken = bearerHeader.split(' ')[1];
      req.token=bearerToken;
      next();
  }else{
      res.sendStatus(403);
  }
}

function verifyAndAuthenticate(req,res,next){
  let decoded = jwt.verify(req.token, 'mysupersecretkey');
  if(decoded !== null)
    req.user = decoded;
    next();
}

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
  }

function errorHandler(err, req, res, next) {   
    res.status(500).send({"error": err.message});
}
  

app.use(myLogger);
app.use(requestTime);
app.use(checkToken);
app.use(verifyAndAuthenticate);
app.use(logErrors);
app.use(errorHandler);
//app.use(middlewareProva);
//app.use('/about',middlewareProva);
//app.use([middlewareProva,auth]);

app.get('/', function (req, res) {
  res.send('Hello ' + req.user.GivenName + ' ' + req.user.Surname);
});

/*app.get('/about', function (req, res) {
  res.send("About");
});
*/

/*app.get('/area',auth, function (req, res) {
  res.send("Area");
});
*/
app.listen(3000);

/*
const middlewareProva = (req,res,next) => {
  const {method, url} = req
  const time = new Date().getMinutes()
  console.log(method, url, time)
  //la pagina web continua a caricare senza successo
  //next()
  //oppure mando la risposta
  //res.send("invio risposta dal middleware")
}
app.get('/', middlewareProva, function (req, res) {
  res.send('Homepage');
});
*/