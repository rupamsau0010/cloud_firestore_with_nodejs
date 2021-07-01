// Import depandencies
require("dotenv").config();
const express = require("express");

const app = express();

// Inport local depandencies
const createUser = require("./configs/cloudFirestore");


// Express Middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Calling the cloudFirestore Function for Initial Connection Testing
createUser()

// port 3000
const port = process.env.PORT;

// Running the express server
app.listen(3000 || port, () => {
    console.log(`Server is running on port 5000 locally or port ${port} on the cloud`);
})