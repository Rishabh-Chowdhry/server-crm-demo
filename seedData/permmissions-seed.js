const mongoose = require("mongoose");
const Permission = require("../model/Permission");
const db = require("../config/dbconnect");
// Connect to MongoDB
db();
// Sample data to seed
const permissionsData = [
  {
    name: "Read",
    description: "Permission to read data",
    category: "General",
  },
  {
    name: "Delete",
    description: "Permission to delete data",
    category: "General",
  },
  {
    name: "Create",
    description: "Permission to create data",
    category: "General",
  },
  {
    name: "Assign",
    description: "Permission to assign tasks",
    category: "Task Management",
  },
  {
    name: "Monitor",
    description: "Permission to monitor activities",
    category: "Monitoring",
  },
  {
    name: "View",
    description: "Permission to view data",
    category: "General",
  },
  // Add more data as needed
];

// Function to seed data
async function seedData() {
  try {
    // Remove existing data
    await Permission.deleteMany();

    // Insert new data
    const insertedPermissions = await Permission.insertMany(permissionsData);

    console.log("Data seeded successfully:", insertedPermissions);
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}
// Call the seedData function
seedData();
