const mongoose = require('mongoose');
const URI = "mongodb+srv://admin:admin@hospitalmanagementsystem-xjxng.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true });
    console.log("db Connected Successfully...!!!");

};
module.exports = connectDB;