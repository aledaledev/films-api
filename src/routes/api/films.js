const {Router} = require('express')
const router = Router()
const {Film} = require('../../db')

router.get('/', async (req,res) => {
    const films = await Film.findAll() 
    res.json(films)
})

router.post('/', async (req,res) => {
    const film = await Film.create(req.body)
    res.json(film)
})

router.put('/:id', async (req,res) => {
    const {id} = req.params
    await Film.update(req.body, {
        where: {id}
    })
    res.json({message:'updated film!'})
})

router.delete('/:id', async (req,res) => {
    const {id} = req.params
    await Film.destroy({
        where: {id}
    })
    res.json({message:'deleted film!'})
})

module.exports = router