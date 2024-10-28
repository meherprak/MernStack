const express=require('express');
const port=3000

const app=express()

app.get('/',(req,res)=>{
    res.status(200).json({
        name:"k meher prakash",
        age:"21"

    });
})

app.listen(port,() => {

    console.log("Server is running in Port : "+port)
})