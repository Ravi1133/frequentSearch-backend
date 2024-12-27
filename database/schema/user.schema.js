const {Schema} =require("mongoose")


const userSchema = new Schema({
    firstName:{
        type :String,
        trim:true,
        require:[true,"userNameIs Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    },
    lastName:{
        type :String,
        trim:true,
        require:[true,"Last Name is Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    },
    eMail:{
        type :String,
        trim:true, 
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please provide a valid email address',
          ], 
    },
    country:{
        type :String,
        trim:true,
        require:[true,"Last Name is Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    },
    state:{
        type :String,
        trim:true,
        require:[true,"Last Name is Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    },
    city:{
        type :String,
        trim:true,
        require:[true,"Last Name is Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    },
    gender:{
        type :String,
        trim:true,
        require:[true,"Last Name is Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    },
    dob:{
        type :String,
        trim:true,
        require:[true,"Last Name is Required"],
        minLength:[3,"Minimum length is 3"],
        maxLength:[30,"Maximum Length Allow is 4"]
    }
},{
    timestamps: true,
})


module.exports=userSchema