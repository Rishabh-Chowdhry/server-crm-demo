const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true, // You can set a default value if needed
  },
});

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = Permission;
