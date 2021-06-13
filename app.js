// Configurations
require("dotenv").config();
require("./config/Datbases/Mongoose");


// Import statements
const express = require("express");
const cors = require("cors");
const constants = require("./config/constants");
const session = require("cookie-session");

// Constants
const app = express();
app.use(express.json());
app.use(cors());
app.use(session(constants.__session_keys))

// Exports
exports.app = app;