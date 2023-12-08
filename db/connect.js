const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://brajamohamed:helloworld123@nodejs-task3.pgjnwxt.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connection successful");
  } catch (error) {
    console.log("Error connecting db", error);
  }
};

module.exports = db;
