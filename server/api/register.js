require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
//-----
const User = require("../models/registerModels");

//-----
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});
//-----
router.post("/", async (req, res) => {
  // console.log("<=========",req,"=========>",res,"req");
  const { name, email, password } = req.body;

//   console.log(name, email, password,"step1log");

  const oldUser = await User.findOne({ email:email.toLowerCase() });

  if (oldUser) {
    return res.json({
      message: "User already registered...",
    });
  } 
  else {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user_role = process.env.ADMIN_EMAIL===email? "admin":"user";
    const user = new User({
      name: name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      role:user_role
    });
    const token = jwt.sign(
      { user_id: user._id, email }, 
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );
    user.token = token;
    
    user
      .save()
      .then(() =>
        res.json({
          message: "Account created successfully",
        })
      )
      .catch((err) =>
        res.status(400).json({
          error: err,
          message: "Error creating account",
        })
      );

    // res.status(200).json(user);
  }
});

module.exports = router;
