const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const fieldSchema = new Schema({
  label: { type: String, required: true },
  type: { type: String, required: true },
  // Other properties of the field...
});

const formSchema = new Schema({
  title: { type: String, required: true },
  fields: [fieldSchema],
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Form", formSchema);
