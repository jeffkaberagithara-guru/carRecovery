function Services() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                    <h3 className="text-3xl font-bold text-cyan-700 md:text-4xl mb-10">Explore Our Services</h3>
                    <p className="text-lg text-black mb-8 md:text-xl">We specialize in Emergency Assistance, Rescue & Recovery and Maintenance & Inspection.</p>
                    <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition">
                         View More
                    </button>

                </div>

                <div>
                    <img src="/Tow truck technician 3.jpg" alt="Car theft" className="w-full h-60 md:h-68 object-cover rounded-2xl shadow-md" />
                    <h5 className="text-xl mt-3 font-semi bold text-cyan-700 ">Emergency assistance</h5>

                </div>

                <div>
                    <img src="/loading-broken-car-tow-truck-roadside.webp" alt="Tow truck" className="w-full h-60 md:h-68 object-cover rounded-2xl shadow-md" />
                    <h5 className="text-xl mt-3 font-semi bold text-cyan-700">Rescue & Recovery</h5>

                </div>

                <div>
                    <img src="/Mechanic unsplash.jpg" alt="Mechanic" className="w-full h-60 md:h-68 object-cover rounded-2xl shadow-md" />
                    <h5 className="text-xl mt-3 font-semi bold text-cyan-700">Maintenance & Inspection</h5>

                </div>

            </div>
        </section>
    )
}

export default Services