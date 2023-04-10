const express = require("express");
const app = express();

app.get("", (request, response) => {
  console.log("Data send by browser: ", request.query);
  response.send("Hello, This is Home Page", +request.query);
});

app.get("/about", (request, response) => {
  response.send("This is about us web page");
});

app.get("/help", (request, response) => {
  response.send("This is help web page");
});
app.listen(5000);
