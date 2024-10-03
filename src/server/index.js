const express = require('express')
const path = require('path')
const userRouter = require('./routes/user')

const startSever = () => {
    const app = express()
    const port = 4000
    app.use(express.json())

    //
    const fullPath = path.join(__dirname, '..', 'resource/views')
    app.set('view engine', 'pug')
    app.set('views', fullPath)
    //
    app.get('/', async (request, response) => {})
    app.use('/users', userRouter)
    //
    app.listen(port, () => console.log('Server running at ' + port))
}

startSever()
