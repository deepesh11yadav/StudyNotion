const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true, // Corrected typo here
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB Connection Success`); // Moved the console.log inside the then block
    })
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
