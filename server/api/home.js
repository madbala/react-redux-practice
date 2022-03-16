require("dotenv").config();
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
//-----


//-----
router.get("/",auth, (req, res) => {
    console.log("homelog");
   return res.status(200).send("Welcome 🙌 ");
});
//-----


module.exports = router;
