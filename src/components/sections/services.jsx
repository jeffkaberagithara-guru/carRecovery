function Services() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-cyan-700 md:text-4xl mb-10">Explore Our Services</h3>
                    <p className="text-lg text-black mb-8 md:text-xl">Discover what keeps our clients moving and explore our full range of roadside services.</p>
                    <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition">
                         View More
                    </button>

                </div>

                <div>
                    <img src="/Tow truck 2.jpg" alt="Tow truck picture" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-gray-900 ">Completed</h3>

                </div>

                <div>
                    <img src="/Tow truck 3.webp" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-black">Ongoing</h3>

                </div>

                <div>
                    <img src="/Tow truck 4.jpg" alt="completed bulifing" className="w-full h-auto rounded-2xl" />
                    <h3 className="text-2xl mt-3 font-bold text-black">Completed</h3>

                </div>

            </div>
        </section>
    )
}

export default Services