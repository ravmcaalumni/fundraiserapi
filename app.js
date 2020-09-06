const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys') 

require('./models/payment')

app.use(express.json())
app.use(require('./routes/payment'))

mongoose.connect(MONGOURI,{useNewUrlParser: true,useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{
    console.log("Connected to Mongo")
})
mongoose.connection.on('error',(err)=>{
    console.log("Error on Connecting to Mongo",err)
})

const customMiddleware = (req,res,next)=> {
    console.log("Middleware called")
    next()
}

app.get('/paymentRequest',customMiddleware,(req, res)=>{
    res.send("Success")
})

app.listen(PORT,()=>{
    console.log("server is running on port ", PORT)
})