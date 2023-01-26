const {Router} = require('express')
const router = Router()

const apiFilmsRouter = require('./api/films.routes')
router.use('/films', apiFilmsRouter)

const apiUsersRouter = require('./api/users.routes')
router.use('/users', apiUsersRouter)

module.exports = router