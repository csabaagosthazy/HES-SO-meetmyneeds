const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

//init app
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
