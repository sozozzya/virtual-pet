const express = require("express");
const petRoutes = require("./routes/petRoutes");
const logger = require("./middleware/logger");

const app = express();
app.use(express.json());
app.use(logger);
app.use(petRoutes);

module.exports = app;
