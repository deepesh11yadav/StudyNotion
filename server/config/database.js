const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URL } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true, // Corrected typo here
      useUnifiedTopology: true,
    })
    .then((f) => {
      console.log(`DB Connection Success`); // Moved the console.log inside the then block
      console.log(MONGODB_URL);
      console.log(f);
    })
    .catch((err) => {
      console.log(`DB Connection Failed`);
      console.log(err);
      process.exit(1);
    });
};
