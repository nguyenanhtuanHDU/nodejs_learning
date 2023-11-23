const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log(req.test)
  res.sendStatus(200, "OK")
});

module.exports = router;
