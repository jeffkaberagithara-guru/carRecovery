import { FaCheckCircle } from "react-icons/fa";

function Explanation() {
    return (
        <section className="contaner mx-auto py-5 px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">
                 
                    <h2 className="text-4xl font-bold text-cyan-700 mb-6">Why Choose Us</h2>
                    <ul className="mt-9 space-y-4 text-black">
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheckCircle className="text-cyan-600 text-lg mr-2" />We offer towing for all vehicle types, on-spot repairs and professional recovery.</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheckCircle className="text-cyan-600 text-lg mr-2" />We combine skilled technicians, modern recovery equipment and a customer-first approach.</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheckCircle className="text-cyan-600 text-lg mr-2" />Our goal is to rescue every ride, restore peace of mind and redefine roadside assistance.</li>
                       
                    </ul>

                </div>

                <div>
                    <img src="/Electronic Issues unsplash.jpg" alt="Electician photo" className="w-full h-90 md:h-90 object-cover rounded-2xl" />
                </div>
            </div>


        </section>
    )
}


export default Explanation