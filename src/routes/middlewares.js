const jwt = require('jwt-simple')
const moment = require('moment')

const checkToken = (req,res,next) => {

    if(!req.headers['user-token']){
        return res.json({error: "you must includes user-token in header"})
    }

    const userToken = req.headers['user-token'];
    let payload
    
    try {
        payload = jwt.decode(userToken, 'secret key')    
    } catch (error) {
        return res.json({error: 'incorrect token'})
    }

    if(payload.expiredAt < moment().unix()){
        return res.json({error: "token has expired"})
    }

    //se va delegando en todos lo enrutadores
    req.userId = payload.userId

    next()
}

module.exports = {
    checkToken
}