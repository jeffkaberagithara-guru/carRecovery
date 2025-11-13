import { FaAward, FaUsers, FaHeart } from "react-icons/fa";

function Explanation() {
    return (
        <section className="container mx-auto py-5 px-4 md:px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                 
                    <h2 className="text-4xl font-bold text-cyan-600 mb-6">Why Choose Us</h2>
                    <ul className="space-y-6">
                        <li className="text-lg flex items-start gap-3"> 
                            <FaAward className="text-cyan-600 text-xl mt-1" />
                            <span>We offer towing for all vehicle types, on-spot repairs and professional recovery.</span>
                        </li>
                        <li className="text-lg flex items-start gap-3"> 
                            <FaUsers className="text-cyan-600 text-xl mt-1" />
                            <span>We combine skilled technicians, modern recovery equipment and a customer-first approach.</span>
                        </li>
                        <li className="text-lg flex items-start gap-3"> 
                            <FaHeart className="text-cyan-600 text-xl mt-1" />
                            <span>Our goal is to rescue every ride, restore peace of mind and redefine roadside assistance.</span>
                        </li>
                    </ul>

                </div>

                <div>
                    <img src="/Electronic Issues unsplash.jpg" alt="Electrician photo" className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg" />
                </div>
            </div>

        </section>
    )
}

export default Explanation