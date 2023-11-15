const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Assuming you have a Role model defined
const Role = require("./path/to/your/role/model");

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
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role", // Reference to the Role model
  },
});

module.exports = mongoose.model("User", userSchema);
