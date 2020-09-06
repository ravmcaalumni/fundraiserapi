const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Payment = mongoose.model('Payment')
const crypto = require("crypto")

const tranid = crypto.randomBytes(16).toString("hex")

router.get('/getPayment',(req, res)=>{
    const {tranid,name,upi,pan,amount,comment} = req.body
    Payment.find({tranid:tranid})
    .then((tranidExist)=>{
        return res.status(200).json({
            tranid,
            name,
            pan,
            upi,
            amount,
            comment
        })
})
})

router.get('/checkUserReadiness',(req, res)=>{
    res.send("User Is ready")
})

router.post('/createPayment',(req, res)=>{
    const {name,upi,pan,amount,comment} = req.body
    if( !name || !upi || !pan || !amount){
        return res.status(422).json({error: "Please add all fields"})
    }
    else{
        const payment = new Payment({
            tranid,
            name,
            pan,
            upi,
            amount,
            comment
        }
        )
        payment.save()
        .then(res.status(200).json({message:"Payment created Successfully", tranid}))
        .catch(err=>{
            res.status(400).json(err)
        })
    }
})

module.exports = router