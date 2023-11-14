const mongoose = require("mongoose");
const Schema = mongoose?.Schema;

const Roles = new Schema({
  UserId: { type: Schema.Types.ObjectId, ref: "User" },
  RoleName: String,
  RoleValue: String,
});

module.exports = mongoose?.model("Roles", Roles);
