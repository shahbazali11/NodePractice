const express = require("express");
const path = require("path");

const app = express();

// app.get("", (req, res) => {
//   res.send(`<a href="/help">GO to Help Page</a>`);
// });

// app.get("/help", (req, res) => {
//   res.send(`<input type="text" placeholder = "User name" />
//   <Button>Click me</Button>`);
// });

// app.get("/about", (req, res) => {
//   res.send([
//     {
//       name: "Muhammad Shahbaz Ali",
//       email: "shahbaz.miom@gmai.com",
//     },
//     {
//       name: "suneel",
//       email: "suneel@gmai.com",
//     },
//   ]);
// });
//.app.listen(4500);

const filesPath = path.join(__dirname, "files");
app.use(express.static(filesPath));

app.listen(4500);
