const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

app.use(express.json());

// //API POST Method
// app.post("/create", async (requ, resp) => {
//   let data = new Product(requ.body);
//   let result = await data.save();
//   console.log(result);
//   resp.send(result);
// });

// //API GET Method
// app.get("/list", async (requ, resp) => {
//   let data = await Product.find();
//   resp.send(data);
//   console.log(data);
// });

// //API DELETE Method
// app.delete("/delete/:_id", async (requ, resp) => {
//   let data = await Product.deleteOne(requ.params);
//   console.log(data);
//   resp.send(data);
// });

// //API PUT Method
// app.put("/update/:_id", async (requ, resp) => {
//   let data = await Product.updateOne(requ.params, {
//     $set: requ.body,
//   });
//   console.log("Done");
//   resp.send(data);
// });

//Search API
app.get("/search/:key", async (requ, resp) => {
  console.log("Request: ", requ.params.key);
  let data = await Product.find({
    $or: [
      { name: { $regex: requ.params.key } },
      { brand: { $regex: requ.params.key } },
    ],
  });
  resp.send(data);
});

app.listen(4500);
