const express = require("express");
const router = express.Router();
const category_handlers = require('./categories');
const question_handlers = require('./questions');
const resource_handlers = require('./resources');
const contact_handlers = require('./contacts');

router.get("/", async (req, res) => {
  res.status(200)
      .setHeader("Content-Type", "application/json")
      .send(JSON.stringify({}));
});

router.get('/categories', category_handlers.fetch_categories);
router.get('/questions', question_handlers.fetch_questions);
router.get('/resources', resource_handlers.fetch_resources);
router.get('/contacts', contact_handlers.fetch_contacts);

module.exports = router;
