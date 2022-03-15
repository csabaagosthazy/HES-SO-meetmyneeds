const {Pool} = require("pg");
const host = process.env.POSTGRES_HOST ?? 'database';

// Turn the database pool into a singleton
let DATABASE_POOL = undefined;

module.exports = {
    getPool: () => {
        if(DATABASE_POOL === undefined) {
            DATABASE_POOL = new Pool({
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: "meetmyneeds",
                host
            });
        }

        return DATABASE_POOL;
    },

    closePool: (callback) => {
        if(DATABASE_POOL === undefined){
            return;
        }

        DATABASE_POOL.end(callback);
    }
}