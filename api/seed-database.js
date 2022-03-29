/*
This file is used during the CI to populate the local PostgreSQL database that is running as a service in the background.
Since we can't somehow execute the SQL file directly, we have to execute it through a little Javascript program that will
run the SQL script instead.

This script is meant to be used in the command line as such, from the root of the project:
```
node ./api/seed-database.js
```
 */
const fs = require('fs');
const pg = require('pg');
const dotenv = require('dotenv');

async function main(){
    if(typeof process.env.CI === "undefined") {
        console.warn("Loading environment because CI is undefined")
        dotenv.config();
    }

    const host = process.env.POSTGRES_HOST ?? 'database';

    console.log(`Connecting to host ${host} to prime the database (value of POSTGRES_HOST)`);
    const db_client = new pg.Client({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: "meetmyneeds",
        host
    });

    await db_client.connect();

    console.log('Reading SQL file with initial data');
    let prime_file_content = fs.readFileSync('db/data_insertion.sql', {encoding: "utf8"});

    console.log("Executing SQL file")
    await db_client.query(prime_file_content);

    console.log("Closing connection")
    await db_client.end();
}

main();
