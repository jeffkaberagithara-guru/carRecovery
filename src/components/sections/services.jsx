function Projects() {
    return (
        <section className="container mx-auto py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <h3 className="text-3xl font-bold text-black md:text-4xl mb-10">Our Projects</h3>
                    <p className="text-lg text-black mb-8 md:text-xl">Checkout our most elegant designs that are both complete and ongoing</p>
                    <button className="bg-cyan-600 p-4 rounded-2xl font-bold text-white">
                        View more
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

export default Projects