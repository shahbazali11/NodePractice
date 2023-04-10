const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  model: String,
  year: Number,
  purchaseDate: Date,
});

//Create Operation
const saveInDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/e-commerce"
  );
  const ProductsModel = mongoose.model("Products", ProductSchema);
  let data = new ProductsModel({
    name: "Laptop",
    price: 1000,
    model: "EliteBook7",
    purchaseDate: "2017-08-15",
    year: 2022,
  });
  let result = await data.save();
  console.log(result);
};

// Update Operation
const updateInDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/e-commerce"
  );
  const ProductsModel = mongoose.model("Products", ProductSchema);
  let data = await ProductsModel.updateMany(
    { purchaseDate: "2017-08-15" },
    { $set: { year: 2017 } }
  );
  console.log(data);
};

//Delete Operation
const deleteInDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/e-commerce"
  );
  const ProductsModel = mongoose.model("Products", ProductSchema);
  let data = await ProductsModel.deleteOne({ year: 2022 });
  console.log(data);
};

//Read Operation
const findInDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/e-commerce"
  );
  const ProductsModel = mongoose.model("Products", ProductSchema);
  //   let data = await ProductsModel.find({
  //     purchaseDate: "1970-01-01T00:00:01.988+00:00",
  //   });
  let data = await ProductsModel.find();
  console.log(data);
};

//Funtion Calling
findInDB();
