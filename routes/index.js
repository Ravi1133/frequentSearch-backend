const allroutes=(app)=>{
    app.use("/api/v1/user",require("./v1/user.route"))
}

module.exports=allroutes