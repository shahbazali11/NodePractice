// const { MongoClient } = require("mongodb");
// const url =
//   "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/test:27017";
// const client = new MongoClient(url);
// const dataBase = "e-commerce";

// async function getData() {
//   let result = await client.connect();
//   let db = result.db(dataBase);
//   let collection = db.collection("products");
//   let response = await collection.find({}).toArray();
//   console.log(response);
// }
// getData();

const dbConnection = require("./mongodbConnection");

// dbConnection().then((resp) => {
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });
const main = async () => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log(data);
};

main();
