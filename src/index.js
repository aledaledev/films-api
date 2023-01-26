const express = require('express')
const {Film} = require('./db')

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('homo')
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})