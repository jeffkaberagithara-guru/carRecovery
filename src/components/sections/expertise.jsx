import { FaBolt, FaCog, FaShieldAlt, FaTruck, FaTools, FaLifeRing } from "react-icons/fa";

function Expertise() {
    return (
        <section className="container mx-auto py-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/Tow truck 4.jpg" alt="tow truck photo" className="w-full h-80 md:h-98 object-cover rounded-3xl shadow-md" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl text-cyan-600 font-bold mb-2 mt-8 md:text-5xl">Fast. Professional. Reliable</h2>
                    <p className="text-lg text-cyan-600 mb-2 md:text-xl">We offer the following services:</p>

                    <ul className="mt-2 space-y-4">
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl">
                            <FaBolt className="text-cyan-600 text-xl mr-2 mt-1" />
                            Emergency Response Services.
                        </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl">
                            <FaCog className="text-cyan-600 text-xl mr-2 mt-1" />
                            Professional Tire Solutions.
                        </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl">
                            <FaShieldAlt className="text-cyan-600 text-xl mr-2 mt-1" />
                            Access & Security Solutions.
                        </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl">
                            <FaTruck className="text-cyan-600 text-xl mr-2 mt-1" />
                            Towing & Transportation Services.
                        </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl">
                            <FaTools className="text-cyan-600 text-xl mr-2 mt-1" />
                            Mobile Mechanical Services.
                        </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl">
                            <FaLifeRing className="text-cyan-600 text-xl mr-2" />
                            Recovery & Extraction Services.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Expertise