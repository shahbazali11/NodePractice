const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
// for (i = 0; i < 5; i++) {
//       fs.writeFileSync(dirPath + `/hello${i}.txt`, "Simple txt files");
//     }

// fs.readdir(dirPath, (error, files) => {
//   console.log(files);
// });

// fs.readdir(dirPath, (error, files) => {
//   files.forEach((item) => {
//     console.log("file name is: ", item);
//   });
// });

const filePath = `${dirPath}/apple.txt`;
// //create file
// fs.writeFileSync(filePath, "this is the only txt file");

// //read file use utf8
// fs.readFile(filePath, "utf8", (error, item) => {
//   console.log(item);
// });

// //update file
// fs.appendFile(filePath, " and this file name is apple", (error) => {
//   if (!error) {
//     console.log("The data successfuly has been appended");
//   }
// });

// //rename filename
// fs.rename(filePath, `${dirPath}/banana.txt`, (error) => {
//   !error ? console.log("File name has been updated") : "";
// });

//delete file
fs.unlinkSync(`${dirPath}/banana.txt`);
