const express = require("express");
const logger = require("morgan");
const countryRouter = require("./routers/countryRoute");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use("/country", countryRouter);

module.exports = app;
