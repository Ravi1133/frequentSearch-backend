function response(req,res,code,message) {
    res.status(code).json(message)
}

module.exports=response