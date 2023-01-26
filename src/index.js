const express = require('express')
const apiRouter = require('./routes/api')

const app = express()

app.use(express.json())

app.use('/api', apiRouter)

app.use((req,res) => {
    res.status(404).json({message:"not found!"})
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})