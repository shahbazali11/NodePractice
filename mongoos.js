const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  model: String,
  year: Number,
  purchaseDate: Date,
});

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://shahbazmiom:Moodle1@cluster0.jjqbq6k.mongodb.net/e-commerce"
  );
  const ProductsModel = mongoose.model("Products", ProductSchema);
  let data = new ProductsModel({
    name: "Laptop",
    price: 1000,
    model: "EliteBook7",
    purchaseDate: "2022-03-23",
    year: 2022,
  });
  let result = await data.save();
};
main();
