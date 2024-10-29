const express=require('express')

const port=3000;

const app=express()
app.use(express.json())

const db = require('./config/db')

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"welcome",
    });
})

app.listen(port,() => {

    console.log(`Server is running in port : ${port}`);
})