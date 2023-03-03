const express = require("express");
const https = require("https");
const fs = require("fs");

// this is express app object
const app = express();

// making a https server
const server = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);

// starting the https server
server.listen(5000, () => console.log(`http://localhost:5000`));
