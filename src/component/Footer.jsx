import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-black text-white mt-20 px-8 md:px-16 py-12">
          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h2 className="text-3xl font-black mb-4">
                Glass<span className="text-cyan-500">Cart</span>
              </h2>

              <p className="text-gray-400">
                Premium ecommerce UI Store.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Quick Links
              </h3>

              <ul className="space-y-2 text-gray-400">
                <li>Home</li>
                <li>Shop</li>
                <li>Collections</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">
                Newsletter
              </h3>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-xl text-black outline-none"
                />

                <button className="bg-cyan-500 py-3 rounded-xl font-bold">
                  Subscribe
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500">
            © 2026 GlassCart. All rights reserved.
          </div>
        </footer>
    </div>
  )
}

export default Footer