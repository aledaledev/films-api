const {Router} = require('express')
const router = Router()

const apiFilmsRouter = require('./api/films')
router.use('/films', apiFilmsRouter)

router.get('/', (req,res) => {
    res.send('using /api')
})

module.exports = router