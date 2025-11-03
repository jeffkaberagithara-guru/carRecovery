function Hero() {
    return (
        <section id="hero" className=" text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.7)), url('/Tow truck.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="container mx-auto px-4 py-20">
                <div className=" text-center p-4 flex flex-col justify-center items-center relative">
                    <h1 className="text-5xl mx-auto font-bold w-full mb-4 text-white md:text-6xl md:w-200">Transforming Visions into <span className="text-cyan-600">Architectural Masterpieces</span></h1>
                    <p className="text-xl hidden text-white  mx-auto md:block md:w-150">At Artex, we bridge the gap between your aspirations and
                        architectural reality. Our design-first approach combines
                        artistic vision with engineering precision to create spaces
                        that exceed expectations.
                    </p>

                    <div className="flex gap-4  justify-center mt-8">
                        <button className="bg-white text-cyan-600 font-bold py-2 px-4 rounded hover:translate-y-1">See More</button>
                        <button className="bg-white text-cyan-600 font-bold py-2 px-4 rounded hover:translate-y-1">Sign Up</button>
                        
                    </div>
                </div>
            </main>

        </section>
    )
}

export default Hero;