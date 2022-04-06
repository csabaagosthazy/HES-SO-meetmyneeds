const {Pool} = require("pg");
let DATABASE_POOL = undefined;

module.exports = {
    getPool: () => {
        // To allow lazy initialization of the PostgreSQL database hostname, ease of testing and
        // avoidance of opening multiple pools, the pool creation is abstracted in a singleton.
        if(DATABASE_POOL === undefined) {
            const host = process.env.POSTGRES_HOST ?? 'database';
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