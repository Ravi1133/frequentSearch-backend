const mongoose =require("mongoose")
function connection(params) {
        let mongoUrl=process.env.MONGO_URL
        mongoose.connect(mongoUrl,{ useNewUrlParser: true,
            useUnifiedTopology: true,}).then((data)=>{
            console.log( "Database connected Successfully")
        }).catch((err)=>{
            console.log( "Error in mongodb",err)
        })
}

module.exports=connection