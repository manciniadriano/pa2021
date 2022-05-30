const auth = (req,res,next) => {
    const {user} = req.query
    if(user == 'Alex'){
        next()
    }else{
        res.status(401).send("non autorizzato")
    }
  }

module.exports = auth