import React from 'react'

function Newsletter() {
    return (
        <div>

            <section className="px-8 md:px-16 pb-20">
                <div className="backdrop-blur-2xl bg-white/30 border border-white/20 rounded-[40px] p-10 text-center shadow-2xl">
                    <h2 className="text-4xl font-black mb-4">
                        Join Our Newsletter
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Get updates about new arrivals, discounts, and premium collections.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white/20 outline-none backdrop-blur-xl"
                        />

                        <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-white font-bold hover:scale-105 transition shadow-lg whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Newsletter