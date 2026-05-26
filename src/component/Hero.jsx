import React from 'react'

function Hero() {
    return (
        <div>

            <section className="grid md:grid-cols-2 items-center px-8 md:px-16 py-16 gap-10">
                <div>
                    <p className="uppercase tracking-[6px] text-cyan-500 font-semibold mb-4">
                        Modern Ecommerce
                    </p>

                    <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                        Glassmorphism
                        <span className="block text-cyan-500">Store UI</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-8">
                        A clean and premium eCommerce experience built with React and Tailwind.
                        Smooth layout, modern glass effect, and bold styling.
                    </p>

                    <div className="flex gap-4 flex-wrap">
                        <button className="px-8 py-4 rounded-2xl bg-cyan-500 text-white font-bold hover:scale-105 transition shadow-xl">
                            Shop Now
                        </button>

                        <button className="px-8 py-4 rounded-2xl border border-white/40 backdrop-blur-xl bg-white/20 font-bold hover:bg-white/40 transition">
                            Explore
                        </button>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    <div className="absolute w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-40"></div>

                    <div className="relative backdrop-blur-2xl bg-white/30 border border-white/30 rounded-[40px] overflow-hidden shadow-2xl p-6 w-full max-w-md">
                        <img
                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
                            alt="fashion"
                            className="rounded-3xl h-500px w-full object-cover"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero