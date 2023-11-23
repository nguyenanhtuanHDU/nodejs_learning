const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.sendStatus(200, "OK")
});

module.exports = router;
