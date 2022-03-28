// Load environment file before everything else, so the database pool knows where to connect
const cors = require("cors");
const express = require('express');
const routes = require("./routes/routes");
const dotenv = require('dotenv');

dotenv.config({ path: "../.env" });

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);
app.use("/openapi", express.static('documentation'));
app.use('/openapi/swagger', express.static(require('swagger-ui-dist').absolutePath()));


module.exports = app;