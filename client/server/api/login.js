const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router()
const jwt = require("jsonwebtoken");
//-----
const User = require('../models/loginModels');

//-----
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err)) 
})
//-----
router.post('/', async (req, res) => {
    // console.log("<=========",req,"=========>",res,"req");
    const { email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    

    const user = await User.findOne({ email:email.toLowerCase() });
    console.log((await bcrypt.compare(password, user.password)),"login console============================123>");

            if (user && (await bcrypt.compare(password, user.password))) {

                const token = jwt.sign(
                    { user_id: user._id, email }, 
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                  );

                  user.token = token;
                  res.status(200).json(user);
                
            } else {
                return res.json({
                    message: "User unavailable kindly register first...",
                });
            }
    
}) 
module.exports = router