const {Router} = require('express')
const router = Router()
const filmsController = require('../../controllers/films.controller')

router.get('/', filmsController.getFilms)
router.post('/', filmsController.createFilm)
router.put('/:id', filmsController.editFilm)
router.delete('/:id', filmsController.deleteFilm)

module.exports = router