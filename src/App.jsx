import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Categories from './component/Categories';
import Newsletter from './component/Newsletter';
import Product from './component/product'
import Footer from './component/Footer';


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: (item.qty || 1) + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);


  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-white via-slate-100 to-cyan-100 text-gray-800 overflow-hidden">
        <Navbar cart={cart} showCart={showCart} setShowCart={setShowCart} />
        <Hero />
        <Categories />

        <Product
          addToCart={addToCart}
          showAll={showAll}
          setShowAll={setShowAll} />

        <Newsletter />
        <Footer />
      </div>
    </>
  )
}

export default App
