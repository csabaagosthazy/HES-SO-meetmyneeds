const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

function handle_termination(){
  console.log("SIGTERM or SIGINT caught. Exiting");
  process.exit();
}

//init app
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});

// Termination handlers
process.on("SIGTERM", handle_termination);
process.on("SIGINT", handle_termination)