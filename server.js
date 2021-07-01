// Import depandencies
require("dotenv").config();
const express = require("express");
const Firebase = require("firebase-admin");

const app = express();

// Inport local depandencies


// port 3000
const port = process.env.PORT;

// Running the express server
app.listen(3000 || port, () => {
    console.log(`Server is running on port 5000 locally or port ${port} on the cloud`);
})