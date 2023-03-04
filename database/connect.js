const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const client = new MongoClient(process.env.CONNECTION_STRING);

async function connect() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { client, connect };
