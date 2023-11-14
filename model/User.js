const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  companyname: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 11,
  },
});

module.exports = mongoose.model("User", userSchema);
