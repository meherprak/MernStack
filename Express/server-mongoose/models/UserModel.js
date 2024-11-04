const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },

        email:{
            type:String,
            required:true,
            unique:true
        },
        phoneno:{
            type:Number,
            required:false,
            unique:true
        },
        password:{
            type:String,
            required:false
        },
        address:{
            type:String,
            required:false

        }


    }
)

const Users=mongoose.model("Users",UserSchema)

module.exports=mongoose;