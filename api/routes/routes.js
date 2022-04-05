const express = require("express");
const router = express.Router();
const {getPool} = require('../database/pool');
const category_handlers = require('./categories');
const question_handlers = require('./questions');
const resource_handlers = require('./resources');
const contact_handlers = require('./contacts');

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

router.get('/categories', category_handlers.fetch_categories);
router.get('/questions', question_handlers.fetch_questions);
router.get('/resources', resource_handlers.fetch_resources);
router.get('/contacts', contact_handlers.fetch_contacts);

module.exports = router;
