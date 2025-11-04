function Hero() {
    return (
        <section id="hero" className=" text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(0, 14, 60, 0.85), rgba(0, 12, 61, 0.7)), url('/Tow truck1.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="container mx-auto px-4 py-20">
                <div className=" text-center p-4 flex flex-col justify-center items-center relative">
                    <h1 className="text-2xl mx-auto font-bold w-full mb-4 text-cyan-600 md:text-6xl md:w-200">Even Cars Need a Little ResQ Sometimes.</h1>
                    <p className="text-xl hidden text-white  mx-auto md:block md:w-150">We make roadside problems disappear, no magic, just skill. <span>24/7 Towing, Recovery & On-Site Repairs for All Vehicles</span>
                    </p>

                    <div className="flex gap-4  justify-center mt-8">
                        <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-400 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition">
                             Hotline Number
                         </button>

                        <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-400 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition">
                             Request a Service
                        </button>
                        
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Hero;