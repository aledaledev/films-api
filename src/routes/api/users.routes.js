const {Router} = require('express')
const router = Router()
const usersController = require('../../controllers/users.controller')
const {check} = require('express-validator')

router.post('/register',[
    //comprueba datos con los que trabajo
    check('username','username is required').not().isEmpty(),
    check('password','password is required').not().isEmpty(),
    check('email','incorrect email').isEmail()
], usersController.registerUser)

router.post('/login', usersController.loginUser)

module.exports = router