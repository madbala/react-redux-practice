const mongoose = require("mongoose");
const connection =
  "mongodb+srv://mongousername:mongopassword@reactandreduxcluster.jtsp5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose
    .connect(connection, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
