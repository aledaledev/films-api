const express = require('express')
const apiRouter = require('./routes/api')
const {PORT} = require('./config')

const app = express()

app.use(express.json())

//dentro de esta se va separar en 2 rutas
app.use('/api', apiRouter)

app.use((req,res) => {
    res.status(404).json({message:"not found!"})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})