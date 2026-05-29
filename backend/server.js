
const products = [
    {
      id: 1,
      name: 'Minimal Sneaker',
      price: '$120',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Luxury Headset',
      price: '$85',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Smart Watch',
      price: '$210',
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Modern Backpack',
      price: '$65',
      image:
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Gaming Chair',
      price: '$320',
      image:
        'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Wireless Mouse',
      price: '$45',
      image:
        'https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'MacBook Setup',
      price: '$1200',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 8,
      name: 'Premium Camera',
      price: '$950',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    },
  ];


const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});