const axios =require("axios")

function RestCall(payload) {
    let response =axios(payload)

    return response
}

module.exports=RestCall