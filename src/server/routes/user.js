const express = require('express')
const userController = require('../controllers/user')

const userRouter = express.Router()

userRouter.get('/', userController.index)
userRouter.get('/search', userController.search)
userRouter.get('/create', userController.create)
userRouter.get('/:id', userController.show)

userRouter.post('/create', userController.handleCreate)

module.exports = userRouter
