const mongoose = require('mongoose');
const URI = "mongodb+srv://mongousername:mongopassword@reactandreduxcluster.jtsp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("db Connected Successfully...!!!");

};
module.exports = connectDB;