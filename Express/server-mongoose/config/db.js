const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://KMP:123789@in-aws.xhv8g.mongodb.net/")

const connection=mongoose.connection;

connection.on('connected',()=>{
    console.log("DB Connected ")
})

connection.on('error',()=>{
    console.log("DB  Error")
})

module.exports =mongoose