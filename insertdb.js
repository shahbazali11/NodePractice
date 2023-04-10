const dbConnection = require("./mongodbConnection");

const insert = async () => {
  const db = await dbConnection();

  //   //for insert single object in db
  //   const result = await db.insertOne({
  //     name: "laptop",
  //     brand: "dell",
  //     price: "$120",
  //     year: "2023",
  //   });

  //for insert array of objects in db
  const result = await db.insertMany([
    {
      name: "laptop",
      brand: "dell",
      price: "$120",
      year: "2023",
    },
    {
      name: "laptop",
      brand: "hp",
      price: "$100",
      year: "2022",
    },
    {
      name: "mobile",
      brand: "sumsung",
      price: "$90",
      year: "2018",
    },
  ]);
  console.log(result);
};

insert();
