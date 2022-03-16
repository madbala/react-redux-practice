// old code start
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');
// const cors = require('cors');
// const passport = require('passport');
// const path = require('path');
// const connectDB = require('./dbfiles/database');


// //initialize the app
// const app = express();

// connectDB();
// //define port
// const PORT = process.env.PORT || 5000;
// //defining middlewares
// app.use(cors());

// // set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// //bodyparser middleware
// app.use(bodyparser.json());

// //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// app.get('/', (req, res) => {
//     return res.json({
//         message: "This is a server(role based)"
//     });
// });

// app.listen(PORT, () => {
//     console.log(`server is running ${PORT}`);
// })
// old code end


const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./dbfiles/database');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');
connectDB();
app.use(bodyparser.json());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
const register = require('./api/register');
const login = require('./api/login'); 
const home = require('./api/home'); 
const forgotPassword = require('./api/forgotPassword');
app.use('/register', register);
app.use('/login', login);
app.use('/home', home);
app.use('/forgotpassword',forgotPassword);
app.use(express.static(path.join(__dirname, '../build')))
app.get('/', (req, res) => {
   return res.sendFile(path.join(__dirname, '../build'))
})

// app.get('/', (req, res) => {
//     return res.json({
//         message: "This is a server(role based)"
//     });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})

console.log(app.listen,"app")