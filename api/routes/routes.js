const express = require("express");
const router = express.Router();
const db = require("../database/queries");

router.get("/", async (req, res) => {
  const message = "Hello from node";
  res.status(200).send(message);
});
router.get("/users", db.getUsers);
router.get("/users/:id", db.getUserById);
router.post("/users", db.createUser);
router.put("/users/:id", db.updateUser);
router.delete("/users/:id", db.deleteUser);

module.exports = router;
