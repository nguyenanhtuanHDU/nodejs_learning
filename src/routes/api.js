const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/test", (req, res) => {
  const path = "./src/test.txt";
  // đọc file
  // fs.readFile(path, {}, (err, data) => {
  //   if (err) {
  //     console.log("🚀 ~ err:", err);
  //     return;
  //   }
  //   console.log(">>> data: ", data.toString("utf-8"));
  // });

  // ghi file
  // fs.writeFile(path, "tuanna edit", {}, (err) => {
  //   if (err) {
  //     console.log("🚀 ~ err:", err);
  //   }
  //   console.log("ghi file thanh cong");
  // });

  // tao folder
  // fs.mkdir("test-folder", (err) => {
  //   if (err) {
  //     console.log("🚀 ~ err:", err);
  //   }
  //   console.log("tao folder thanh cong");
  // });

  // check xem path co ton tai ko
  // if (fs.existsSync("./src/test-folder")) {
  //   console.log("co folder");
  // } else {
  //   console.log("ko co folder");
  // }

  res.send("OK");
});

module.exports = router;
