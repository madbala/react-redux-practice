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

    

    const user = await User.findOne({ email:email.toLowerCase() });
    // console.log("user start");
    console.log(user,"============================123>");

            if (user && (await bcrypt.compare(password, user.password))?(await bcrypt.compare(password, user.password)):false) {
// console.log("user available");
                const token = jwt.sign(
                    { user_id: user._id, email }, 
                    process.env.TOKEN_KEY,
                    {
                      expiresIn: "2h",
                    }
                  );

                  user.token = token;
                  console.log("rolebased",user,user.role,user.email,user.name);
                  if(user.role === "admin"){
                      
                    return res.json({
                        message: "User available",route:"/adminhome"
                    });
                  }else{
                    return res.json({
                        message: "User available",route:"/userhome"
                    });
                  }
                  
               
                //  return res.redirect('/home') working code
                //   res.status(200).json(user);
                
            } else {
                return res.json({
                    message: "User unavailable kindly register first...",
                    route:"/"
                });
            }
    
}) 
module.exports = router