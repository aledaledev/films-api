const Sequelize = require('sequelize')
const filmModel = require('./models/films')
const userModel = require('./models/users')

//                      'database','user','password',{host, dialect:'db'}
const sequelize = new Sequelize('sql10593350','sql10593350','XrfqtsFAA7',{
    host:'sql10.freemysqlhosting.net',
    dialect:'mysql'
})

//sincronizar db
const Film = filmModel(sequelize, Sequelize)
const User = userModel(sequelize, Sequelize)

sequelize.sync({force: false})
.then(() => {
    console.log('Tables Sync!');
})

module.exports = {
    Film,
    User 
}