const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@my-notes.u3m1um9.mongodb.net/?retryWrites=true&w=majority`
);

async function connect() {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
}

module.exports = { client, connect };
