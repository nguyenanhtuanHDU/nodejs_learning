require("dotenv").config();
const express = require("express");
const http = require("http");
const app = express();

const cors = require("cors");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

const apiRoute = require("./src/routes/api");

app.use("/api/v1", apiRoute);

// ghi đè hàm của response
app.response.sendStatus = function (statusCode, message) {
  return this.status(statusCode).send(message);
};

const server = http.createServer(app);

(async () => {
  try {
    server.listen(port, hostname, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (error) {}
})();
