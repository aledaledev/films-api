const Sequelize = require('sequelize')
const filmModel = require('./models/films')
const userModel = require('./models/users')
const {config} = require('./config')

//                      'database','user','password',{host, dialect:'db'}
const sequelize = new Sequelize(config.database,config.user,config.password,{
    host:config.host,
    dialect:config.dialect
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