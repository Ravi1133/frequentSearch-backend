const response = require("../middleware")
const { getAlluser_service,createUser_service } = require("../services/user.service")

async function addUser(req, res, next) {
    try {
        console.log()
        let { firstName, lastName, eMail, country, state, city, gender, dob } = req.body
       let returnData= await createUser_service({ firstName, lastName, eMail, country, state, city, gender, dob })

        response(req, res, 200, returnData)
    } catch (err) {
        console.log("controller addUser err", err)
    }
}

async function getAlluser(req, res, next) {
    try {

        let payload = {
            message: "hii",
            data: { name: "ravikant" }
        }
        let receivedata=await getAlluser_service()
        response(req, res, 200, receivedata)
    } catch (err) {
        console.log("controller addUser err", err)
    }
}

module.exports = {
    addUser,
    getAlluser
}