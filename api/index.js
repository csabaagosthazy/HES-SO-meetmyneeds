const http = require('http');
const {closePool} = require('./database/pool');

function handle_termination(){
  console.log("SIGTERM or SIGINT caught. Exiting gracefully");

  closePool(() => { console.log('Database pool closed'); });
  server.close(() => { console.log('API server closed'); });
}

const PORT = process.env.PORT || 3000;
const app = require('./application');

// Termination handlers
process.on("SIGTERM", handle_termination);
process.on("SIGINT", handle_termination)

const server = http.createServer(app).listen(PORT, () => {
  console.log(`API server listening on ${PORT}`);
})
