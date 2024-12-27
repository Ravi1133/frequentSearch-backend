const userModel = require("../database/model/user.model")
const response = require("../middleware")

async function createUser_service(data) {
    try {
        console.log("userCreate", data)
        let modelInstance = new userModel(data)
        let dataUpdated =await  modelInstance.save()
        console.log("saved data userCreate_service ",dataUpdated )
        return {
            code:200,
            status: true,
            data: dataUpdated
        }
    } catch (err) {
        console.log("userCreate_service err", err)
    }
}
 async function getAlluser_service(params) {
    try{
       let userData= await userModel.find({})
       
       return {
        code:200,
        status:true,
        data:userData
       }
    }catch(err){
        console.log("getAlluser_service error ",err)
    }
 }
 

module.exports = {

    createUser_service,
    getAlluser_service
}
