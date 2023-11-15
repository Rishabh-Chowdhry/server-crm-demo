// rolesSeeder.js
const mongoose = require("mongoose");
const db = require("../config/dbconnect");
const Roles = require("../model/Roles");
const Users = require("../model/User");

db();

const rolesData = [
  {
    UserId: null, // Initially set to null
    RoleName: "Admin",
    RoleValue: "22500",
  },
  // Add more roles as needed
];

const seedRolesData = async () => {
  try {
    await Roles.deleteMany({});
    // Optionally clear user data (depends on your use case)
    await Users.deleteMany({});

    // Seed users data
    await require("./users-seed").seedUserData();

    // Get user ObjectIds
    const users = await Users.find({});
    const usersMap = users.reduce((acc, user) => {
      acc[user.email] = user._id;
      return acc;
    }, {});

    // Populate UserId in rolesData with user ObjectIds
    rolesData.forEach((role) => {
      // Set UserId to the actual ObjectId if available, or keep it as null
      role.UserId = usersMap[role.email] || null;
    });

    // Seed roles data
    await Roles.insertMany(rolesData);

    console.log("Roles data seeded successfully!");
  } catch (error) {
    console.error("Error seeding roles data:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

seedRolesData();
