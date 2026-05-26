import React, { useState, useEffect } from 'react';

export default function GlassEcommerce({
  addToCart,
  showAll,
  setShowAll
}) {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="px-8 md:px-16 py-16">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <h2 className="text-4xl font-black">Trending Products</h2>

        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-xl bg-white/30 backdrop-blur-xl border border-white/20 font-semibold hover:bg-white/50 transition"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      {/* LOADING STATE */}
      {loading ? (
        <p className="text-center text-gray-500">Loading products...</p>
      ) : !products.length ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {(showAll ? products : products.slice(0, 4)).map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-[30px] bg-white/30 border border-white/20 shadow-2xl transition duration-200 hover:-translate-y-1"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>

                <div className="flex items-center justify-between">
                  <p className="text-cyan-500 font-black text-xl">
                    {product.price}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="px-4 py-2 rounded-xl bg-cyan-500 text-white font-semibold cursor-pointer hover:bg-cyan-600 hover:scale-105 transition duration-200 active:scale-95"
                  >
                    Add
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}