const http = require('http');
const {closePool} = require('./database/pool');

let termination_count = 0;

function handle_termination(){
  console.log("SIGTERM or SIGINT caught. Exiting gracefully");

  closePool(() => { console.log('Database pool closed'); });
  server.close(() => { console.log('API server closed'); });
  termination_count++;

  if(termination_count > 1){
    console.warn("Forcibly exiting");
    process.exit(1);
  }
}

const PORT = process.env.PORT || 6969;
const app = require('./application');

// Termination handlers
process.on("SIGTERM", handle_termination);
process.on("SIGINT", handle_termination)

const server = http.createServer(app).listen(PORT, () => {
  console.log(`API server listening on ${PORT}`);
})
