// const os = require("os");
// console.log(os.arch());
// console.log(os.freemem() / (1024 * 1024 * 1024)); //system free memory
// console.log(os.totalmem() / (1024 * 1024 * 1024));
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.userInfo());

const express = require("express");
const EventEmitter = require("events");

const event = new EventEmitter();
const app = express();

let counter = 0;

event.on("Count APi", () => {
  counter++;
  console.log("event called: ", counter);
});

app.get("/", (requ, resp) => {
  resp.send("api called");
  event.emit("countApi");
});

app.get("/search", (requ, resp) => {
  resp.send("search called");
  event.emit("count Api");
});

app.get("/update", (requ, resp) => {
  resp.send("update called");
  event.emit("count Api");
});

app.listen(4500);
