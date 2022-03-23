const express = require("express");
const router = express.Router();
const {getPool} = require('../database/pool');
const {get_main_categories} = require("../database/repository/category");

router.get("/", async (req, res) => {
  res.status(200)
      .setHeader("Content-Type", "application/json")
      .send(JSON.stringify({}));
});

router.get("/db-test", async (req, res) => {
    let pool = getPool();
    let result = await pool.query("SELECT 1 AS one");

    res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify({ result: result.rows[0].one }))
})

router.get('/categories', async (req, res) => {
    let results = await get_main_categories();

    res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify(results))
});

module.exports = router;
