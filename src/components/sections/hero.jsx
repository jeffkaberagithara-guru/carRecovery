import { Link } from "react-router-dom";

function Hero() {
    return (
        <section id="hero" className="relative text-center flex items-center justify-center" style={{
            backgroundImage: `linear-gradient(rgba(1, 39, 59, 0.95), rgba(9, 82, 91, 0.9)), url('/Tow truck1.jpg')`,
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <main className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 xl:py-20">
    <div className="text-center p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center w-full max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-cyan-600 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto leading-tight">
            Even Cars Need a Little ResQ Sometimes.
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-white mx-auto hidden md:block max-w-md lg:max-w-2xl xl:max-w-3xl leading-relaxed">
            We make roadside problems disappear, no magic, just skill. <span>24/7 Towing, Recovery & On-Site Repairs for All Vehicles</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8 lg:mt-10 w-full sm:w-auto">
            <Link to="/signup" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3 lg:py-4 border-2 border-cyan-600 text-cyan-400 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300 text-base sm:text-lg lg:text-xl">
                    Register
                </button>
            </Link>
        </div>
    </div>
</main>

        </section>
    )
}

export default Hero;