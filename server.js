// initialising and importing all the modules needed for the functionality
const express = require("express");
const compression = require("compression");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the app and create a port and inorder to deploy in heroku we need to give 2 option for the port of it cant find one then it will straight go into 3000.

const app = express();
const PORT = process.env.PORT || 3002;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(compression());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server listening on the port 
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
