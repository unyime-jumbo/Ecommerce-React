import React from 'react'

function Categories() {
    return (
        <div >

            <section className="px-8 md:px-16 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['Fashion', 'Electronics', 'Accessories'].map((item, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-3">{item}</h3>
                            <p className="text-gray-600 mb-4">
                                Premium products with clean and modern UI experience.
                            </p>
                            <button className="text-cyan-500 font-bold hover:underline">
                                Browse →
                            </button>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Categories