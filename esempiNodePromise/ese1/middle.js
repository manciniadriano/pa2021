var express = require('express');
const jwt = require('jsonwebtoken');
const { isNewExpression } = require('typescript');
//const middlewareProva = require('./middlewareProva')
const auth = require('./auth')
var app = express();

const middlewareProva = (req,res,next) => {
  const {method, url} = req
  const time = new Date().getMinutes()
  console.log(method, url, time)
  //la pagina web continua a caricare senza successo
  next()
  //oppure mando la risposta
  //res.send("invio risposta dal middleware")
}

//app.use(middlewareProva);
//app.use('/about',middlewareProva);
app.use([middlewareProva,auth]);

app.get('/about', function (req, res) {
  res.send("About");
});

app.get('/', function (req, res) {
  res.send('Homepage');
});

app.get('/area',auth, function (req, res) {
  res.send("Area");
});

app.listen(3000);

