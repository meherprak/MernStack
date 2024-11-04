const express = require('express')
const router= express.Router()
const Orders=require('../models/OrderModel')


router.get('/all',async(req,res)=>{
    try{
        const order=await Orders.find()
        res.status(200).json(order)
    }catch(error)
    {
        res.status(500).json({message:error})
    }

})

module.exports = router