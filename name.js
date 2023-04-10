const http = require("http");
const fs = require("fs");

// http
//   .createServer((request, response) => {
//     response.write("<h1>Hello everyone I am Muhammad Shahbaz Ali!</h1>");
//     response.end();
//   })
//   .listen(4500);

//both methods are same
// const dataControl = (request, response) => {
//   response.write(
//     "<h1>Hello everyone I am Muhammad Shahbaz Ali and what about you!</h1>"
//   );
//   response.end();
// };

// http.createServer(dataControl).listen(4500);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        name: "Muhammad Shahbaz Ali",
        email: "shahbaz.miom@gmail.com",
      })
    );
    res.end();
  })
  .listen(4500);

const input = process.argv;
//fs.writeFileSync(input[2], input[3]);

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "remove") {
  fs.unlinkSync(input[3]);
} else {
  console.log("Invalid Input");
}
