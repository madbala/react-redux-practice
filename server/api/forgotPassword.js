const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router()
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
//-----
const User = require('../models/loginModels');
const Token = require("../models/tokenModels");

//-----
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err)) 
})
//-----
router.post('/', async (req, res) => {
    try{
    const { email } = req.body;
    const user = await User.findOne({ email:email.toLowerCase() });
    
    if(!user){
        return res.json({
            message: "User unavailable kindly register first...",
            route:"/"
        });
    }
    let token = await Token.findOne({ userId: user._id });

    if (!token) {
        token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();
    }
    const link = `${process.env.BASE_URL}/password-reset/${user._id}/${token.token}`;
    await sendEmail(user.email, "Password reset", link);
}catch{
    res.send("An error occured");
        console.log(error);
}           
    
}) 
module.exports = router