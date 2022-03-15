const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const message = {}

  res.status(200)
      .setHeader("Content-Type", "application/json")
      .send(JSON.stringify(message));
});

module.exports = router;
