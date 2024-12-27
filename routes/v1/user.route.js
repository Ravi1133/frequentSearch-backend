const { addUser, getAlluser } = require("../../controller/user.controller")
const addUserValidatore = require("../../middleware/validator")

const userRouter =require("express").Router()

userRouter.post("/createUser" ,addUserValidatore,addUser)
userRouter.post("/getAllUser",getAlluser)

module.exports =userRouter
