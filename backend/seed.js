const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  image: String
});

const Product = mongoose.model("Product", productSchema);

const products = [
  { id: 1, name: "Minimal Sneaker", price: "$120", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, name: "Luxury Headset", price: "$85", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, name: "Smart Watch", price: "$210", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, name: "Modern Backpack", price: "$65", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, name: "Gaming Chair", price: "$320", image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, name: "Wireless Mouse", price: "$45", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, name: "MacBook Setup", price: "$1200", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, name: "Premium Camera", price: "$950", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop" }
];

Product.insertMany(products)
  .then(() => {
    console.log("Products added to MongoDB!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));