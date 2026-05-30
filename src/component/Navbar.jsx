function Navbar({ cart, showCart, setShowCart, setShowCheckout }) {

  return (
    <div>
      <nav className="flex items-center justify-between px-8 py-6 backdrop-blur-xl bg-white/30 border-b border-white/20 sticky top-0 z-50">
        <h1 className="text-3xl font-bold tracking-wide">
          Glass<span className="text-cyan-500">Cart</span>
        </h1>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li className="hover:text-cyan-500 cursor-pointer transition">Home</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Shop</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Collections</li>
          <li className="hover:text-cyan-500 cursor-pointer transition">Contact</li>
        </ul>

        <button
          onClick={() => setShowCart(!showCart)}
          className="px-5 py-2 rounded-full bg-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Cart (
          {cart.reduce((total, item) => total + item.qty, 0)}
          )
        </button>
      </nav>

      {showCart && (
        <div className="fixed top-0 right-0 h-screen w-96 bg-white shadow-2xl z-50 flex flex-col">

          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold">Cart Items</h2>
            <button
              onClick={() => setShowCart(false)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-gray-500">No items selected</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 mb-4 border-b pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-cyan-500">{item.price}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.qty}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Checkout Button */}
          {cart.length > 0 && (
            <div className="p-4 border-t">
              <button
                onClick={() => { setShowCart(false); setShowCheckout(true); }}
                className="w-full py-3 bg-cyan-500 text-white font-black text-lg rounded-2xl hover:bg-cyan-600 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}

        </div>
      )}
    </div>
  )
}

export default Navbar