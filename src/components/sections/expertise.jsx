import { FaCheckCircle } from "react-icons/fa";


function Expertise() {
    return (

        <section className="container mx-auto py-7">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/Tow truck 4.jpg" alt="tow truck photo" className="w-full h-80 md:h-98 object-cover rounded-3xl shadow-md" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl text-cyan-700 font-bold  mb-2 mt-8 md:text-5xl ">Fast. Professional. Reliable</h2>
                    <p className="text-lg text-cyan-700 mb-2 md:text-xl">We offer the following services: </p>


                    <ul className="mt-2 space-y-4">

                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Towing & Recovery</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Battery Jumpstart</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Tire Replacement</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Fuel Delivery</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Vehicle Unlocking</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Rescue & Pull-Out</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Technical Diagnosis</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Hybrid System Diagnostics</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Towing for Electric & Hybrid Vehicles</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}


export default Expertise