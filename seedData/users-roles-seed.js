// Import necessary modules and models
const mongoose = require("mongoose");
const User = require("../model/User");
const Roles = require("../model/Roles");
const db = require("../config/dbconnect");

// Connect to MongoDB
db();

// Sample data to seed
const rolesData = [
  {
    RoleName: "Admin",
    RoleValue: "2205",
  },
  {
    RoleName: "User",
    RoleValue: "3305",
  },
  // Add more roles as needed
];

const usersData = [
  {
    firstname: "Rishabh",
    lastname: "Chowdhry",
    email: "rishabh_chowhdry@telecard.com",
    password: "password123",
    companyname: "Telecard Pvt Limited",
    phonenumber: "03403331929",
    role: null, // Will be populated with the actual ObjectId of the role
  },
  // Add more users as needed
];

// Function to seed data
async function seedData() {
  try {
    // Remove existing data
    await User.deleteMany();
    await Roles.deleteMany();

    // Insert roles data
    const insertedRoles = await Roles.insertMany(rolesData);

    // Find the "Admin" role from the inserted roles
    const adminRole = insertedRoles.find((role) => role.RoleName === "Admin");

    // Assign the "Admin" role to the first user in usersData
    if (adminRole) {
      usersData[0].role = adminRole._id;
    } else {
      console.error("Error: Admin role not found.");
      return;
    }

    // Insert users data
    const insertedUsers = await User.insertMany(usersData);

    console.log("Roles seeded successfully:", insertedRoles);
    console.log("Users seeded successfully:", insertedUsers);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

// Call the seedData function
seedData();
