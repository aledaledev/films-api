const {Film} = require('../db')

const getFilms = async (req,res) => {
    const films = await Film.findAll() 
    res.json(films)
}

const createFilm = async (req,res) => {
    const film = await Film.create(req.body)
    res.json(film)
}

const editFilm = async (req,res) => {
    const {id} = req.params
    await Film.update(req.body, {
        where: {id}
    })
    res.json({message:'updated film!'})
}

const deleteFilm =  async (req,res) => {
    const {id} = req.params
    await Film.destroy({
        where: {id}
    })
    res.json({message:'deleted film!'})
}

module.exports = {
    getFilms,
    createFilm,
    editFilm,
    deleteFilm
}