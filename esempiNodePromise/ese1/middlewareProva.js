const middlewareProva = (req,res,next) => {
    const {method, url} = req
    const time = new Date().getMinutes()
    console.log(method, url, time)
    //la pagina web continua a caricare senza successo
    //next()
    //oppure mando la risposta
    //res.send("invio risposta dal middleware")
  }

module.exports = middlewareProva