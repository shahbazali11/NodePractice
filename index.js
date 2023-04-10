const { x, y, sumOfXandY } = require("./app");
const fs = require("fs");
const colors = require("colors");

const name = "Muhammad Shahbaz Ali";
const age = 30;
console.log(`Hi, ${name} . Are you ${age} years old`);
console.log("Value of X: ", x);
console.log("Sum of two numbers: ", sumOfXandY);
const arr = [1, 3, 5, 6, 3, 7, 92];

arr.filter((item) => {
  console.log(item);
});

const filteredData = arr.filter((item) => {
  return item < 6;
});

//Console.log is a globle module
console.log("filterd Data: ", filteredData);

//but fs (fileSystem) is a non globle module because we need to import the fs
fs.writeFileSync("hello.txt", "Code step by step");
console.log("Muhammad Shahbaz Ali".bgGreen);
