import React, { useState, useEffect } from 'react'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Categories from './component/Categories';
import Newsletter from './component/Newsletter';
import Product from './component/product'
import Footer from './component/Footer';
import Checkout from './component/Checkout';
import Auth from './component/Auth';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [user, setUser] = useState(null);

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

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-white via-slate-100 to-cyan-100 text-gray-800 overflow-hidden">
        <Navbar
          cart={cart}
          showCart={showCart}
          setShowCart={setShowCart}
          setShowCheckout={setShowCheckout}
          setShowAuth={setShowAuth}
          user={user}
          handleLogout={handleLogout}
          removeFromCart={removeFromCart}
        />
        <Hero />
        <Categories />
        <Product
          addToCart={addToCart}
          showAll={showAll}
          setShowAll={setShowAll}
        />
        <Newsletter />
        <Footer />
        {showCheckout && (
          <Checkout
            cart={cart}
            setShowCheckout={setShowCheckout}
          />
        )}
        {showAuth && (
          <Auth
            setShowAuth={setShowAuth}
            setUser={setUser}
          />
        )}
      </div>
    </>
  )
}

export default App