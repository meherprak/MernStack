const mongoose=require('mongoose')

const ProductSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },

        img:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },

    }
)


const Products = mongoose.model("Products",ProductSchema)

module.exports=mongoose