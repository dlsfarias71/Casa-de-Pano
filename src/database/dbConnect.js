require('dotenv-safe').config()
const DATABASE_MONGO = process.env.DATABASE_MONGO;
const mongoose = require("mongoose");

const connect = async () => {
  try {
    mongoose.connect(DATABASE_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  connect,
};
