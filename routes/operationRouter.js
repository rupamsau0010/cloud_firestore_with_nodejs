// Import Depandencies
const express = require("express");
const router = express.Router();

// Import Local Depandencies
const operationController = require("../controllers/operationController");

// Routes
// Create user
router.post("/createdetails", operationController.createUser_post);

// Get all user details
router.get("/getalluser", operationController.getUsers_get);

// Export the module
module.exports = router;


