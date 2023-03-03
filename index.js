const express = require("express");
const dotenv = require("dotenv");
const https = require("https");
const fs = require("fs");

const connect = require("./database/connect");

dotenv.config();

// this is express app object
const app = express();

const port = process.env.PORT || 3000;

// making a https server
const server = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);

// this function will establish a connection to the database start the express server
const establishConnection = async () => {
  try {
    // connect with database
    await connect();
    // starting the https server
    server.listen(port, () => console.log(`https://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};
establishConnection();
