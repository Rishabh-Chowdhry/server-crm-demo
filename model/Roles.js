const mongoose = require("mongoose");
const Schema = mongoose?.Schema;

const Roles = new Schema({});

module.exports = mongoose?.model("Roles", Roles);
