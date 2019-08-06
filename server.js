const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

// import routers

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(
    "<h1>The care-connect server is up. Be happy, I can crash any minute.</h1>"
  );
});

// instantiate routers

module.exports = server;
