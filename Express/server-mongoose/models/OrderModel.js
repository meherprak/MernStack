const mongoose=require('mongoose')

const OrderSchema= new mongoose.Schema(
    {
        userID:{
            type:String,
            required:true
        },

        productID:{
            type:String,
            required:true
        },
        orderPrice:{
            type:Number,
            required:true
        },
        Date:{
            type:String,
            required:true
        },
        ShippingAddress:{
            type:String,
            required:true

        }


    }
)

const Orders=mongoose.model("Orders",OrderSchema)

module.exports=mongoose;