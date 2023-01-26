const {config} = require('dotenv')

config()

const PORT = process.env.PORT

module.exports = {
    PORT,
    config:{
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        dialect: process.env.DB_DIALECT
    }
}