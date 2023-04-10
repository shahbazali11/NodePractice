const express = require("express");
const dbConnection = require("./mongodbConnection");
const mongoDb = require("mongodb");
const app = express();

app.use(express.json());
app.get("/", async (requ, resp) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  console.log(data);
  resp.send(data);
});

app.post("/", async (requ, resp) => {
  console.log(requ.body);
  let data = await dbConnection();
  let result = await data.insertOne(requ.body);
  resp.send(result);
});

app.put("/", async (requ, resp) => {
  console.log(requ.body);
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: requ.body.name },
    {
      $set: requ.body,
    }
  );
  resp.send(result);
});

app.delete("/:id", async (requ, resp) => {
  console.log(requ.params);
  let data = await dbConnection();
  let result = await data.deleteOne({
    _id: new mongoDb.ObjectId(requ.params.id),
  });
  resp.send(result);
});

app.listen(4500);
