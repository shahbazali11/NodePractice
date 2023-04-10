const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/test:27017";
const client = new MongoClient(url);
const dataBase = "e-commerce";

async function dbConnection() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("products");
}

module.exports = dbConnection;
