// Import Depandencies
const express = require("express");
const router = express.Router();

// Import Local Depandencies
const operationController = require("../controllers/operationController");

// Routes
router.post("/createdetails", operationController.createUser_post);

// Export the module
module.exports = router;


