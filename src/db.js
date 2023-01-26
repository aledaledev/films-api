const Sequelize = require('sequelize')

const filmModel = require('./models/films')

//                      'database','user','password',{host, dialect:'db'}
const sequelize = new Sequelize('sql10593350','sql10593350','XrfqtsFAA7',{
    host:'sql10.freemysqlhosting.net',
    dialect:'mysql'
})

const Film = filmModel(sequelize, Sequelize)

sequelize.sync({force: false})
.then(() => {
    console.log('Table Sync!');
})

module.exports = {
    Film
}