const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const connectDB = require('../../dbfiles/database');


//initialize the app
const app = express();

connectDB();
//define port
const PORT = process.env.PORT || 5000;
//defining middlewares
app.use(cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyparser middleware
app.use(bodyparser.json());

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    return res.json({
        message: "This is a server(role based)"
    });
});

app.listen(PORT, () => {
    console.log(`server is running${PORT}`);
})