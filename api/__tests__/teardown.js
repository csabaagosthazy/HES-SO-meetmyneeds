let { closePool } = require('../database/pool');

module.exports = async () => {
    console.log("Closing the database pool");
    closePool(() => console.log("Pool closed"));
}