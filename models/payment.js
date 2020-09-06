const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    tranid:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    pan:{
        type: String,
        required:true
    },
    upi:{
        type: String,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },
    comment:{
        type: String,
        required:true
    }
})

mongoose.model("Payment",paymentSchema)