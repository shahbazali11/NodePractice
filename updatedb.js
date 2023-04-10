const dbConnection = require("./mongodbConnection");

const update = async () => {
  const data = await dbConnection();
  const result = await data.updateMany(
    { name: "Hot 12 play" },
    { $set: { name: "miniLaptop", price: "$95" } }
  );
  console.log(result);
};

update();
