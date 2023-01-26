const {Router} = require('express')
const router = Router()
const {checkToken} = require('../routes/middlewares')

const apiFilmsRouter = require('./api/films.routes')
const apiUsersRouter = require('./api/users.routes')

//todas las rutas que pasen x film obligatoriamente pasaran x el middleware checkToken
//para verificar que solo usuarios logeados y con el token indicado puedan acceder a la api y modificar los recursos
router.use('/films', checkToken ,apiFilmsRouter)
router.use('/users', apiUsersRouter)

module.exports = router