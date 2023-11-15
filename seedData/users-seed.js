const Users = require("../model/User");
const db = require("../config/dbconnect");
const mongoose = require("mongoose");
db();

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

const seedUserData = async () => {
  try {
    await Users.deleteMany({}); // Optionally clear existing user data
    await Users.insertMany(usersData);

    console.log("User data seeded successfully!");
  } catch (error) {
    console.error("Error seeding user data:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};

seedUserData();
