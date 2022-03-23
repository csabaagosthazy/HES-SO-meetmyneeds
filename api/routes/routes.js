const express = require("express");
const router = express.Router();
const {getPool} = require('../database/pool');

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
    let pool = getPool();
    let results = await pool.query(
        `SELECT DISTINCT q.category_id, qc.label FROM question_category qc
            INNER JOIN questions q on qc.category_id = q.category_id
        WHERE q.sub_category_id IS NULL ORDER BY qc.label;`
    );

    res.status(200)
        .setHeader('Content-Type', 'application/json')
        .send(JSON.stringify(results.rows))
});

module.exports = router;
