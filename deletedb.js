const dbConnection = require("./mongodbConnection");

const delet = async () => {
  const data = await dbConnection();
  const result = await data.deleteMany({ name: "miniLaptop" });
  console.log(result);
};
delet();
