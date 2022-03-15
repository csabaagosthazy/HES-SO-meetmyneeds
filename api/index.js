function handle_termination(){
  console.log("SIGTERM or SIGINT caught. Exiting");
  process.exit();
}

const PORT = process.env.PORT || 3000;
const app = require('./application');

// Termination handlers
process.on("SIGTERM", handle_termination);
process.on("SIGINT", handle_termination)

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`);
});
