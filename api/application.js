const cors = require("cors");
const express = require('express');
const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

module.exports = app;