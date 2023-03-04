const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

const { connect } = require("./database/connect");
const notes = require("./routes/notes");
const users = require("./routes/users");

dotenv.config();

// this is express app object
const app = express();

const port = process.env.PORT || 3000;

// making a https server
const server = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);

// user middlewares
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// these are all api routes
app.use("/api/v1/notes", notes);
app.use("/api/v1/users", users);

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
