const {User} = require('../db')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const moment = require('moment')
const jwt = require('jwt-simple')

const registerUser = async (req,res) => {

    //controlamos que devolvemos si existe algun error que asignamos en el check
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({error: errors.array()})
    }

    //encriptamos solo el password y lo guardamos en la base de datos
    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user = await User.create(req.body)
    res.json(user)
} 

const loginUser = async (req,res) => {
    const user = await User.findOne({
        where: {email: req.body.email}
    })

    if(user){
        const same = bcrypt.compareSync(req.body.password, user.password) 
        if(same){
            res.json({success: createToken(user)})
        } else {
            res.json({message:"incorrect email or password"})
        }
    } else {
        res.json({message:"incorrect email or password"})
    }
}

//genera token para que interactue con la api
const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt:moment().unix(),
        expiredAt:moment().add(5, 'minutes').unix()
    }

    return jwt.encode(payload, 'secret key')
}

module.exports = {
    registerUser,
    loginUser
}