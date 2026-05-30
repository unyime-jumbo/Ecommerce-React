const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./auth");

const app = express();

app.use(cors({
  origin: "https://ecommerce-react-seven-bay.vercel.app"
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

// Product Schema
const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: String,
  image: String
});

const Product = mongoose.model("Product", productSchema);

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});