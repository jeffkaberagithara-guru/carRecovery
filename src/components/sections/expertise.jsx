import { FaCheckCircle } from "react-icons/fa";


function Expertise() {
    return (

        <section className="container mx-auto py-7">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div>
                    <img src="/Tow truck1.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-3xl" />
                </div>

                <div className="container mx-auto">
                    <h2 className="text-4xl text-cyan-700 font-bold  mb-4 mt-8 md:text-5xl ">A Smarter Approach to Architecture</h2>
                    <p className="text-lg text-cyan-700 mb-6 md:text-xl">We blend creativity with technology to deliver exceptional architectural solutions.</p>

                    <ul className="mt-9 space-y-4">

                        <li className="text-lg flex items-start  gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />  Crafting personalized homes </li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />  Designing functional and innovative spaces for businesses.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />  Integrating eco-friendly practices and materials.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />  Enhancing interior spaces through thoughtful design.</li>
                        <li className="text-lg flex items-start gap-4 mb-2 md:text-xl"><FaCheckCircle className="text-cyan-600 text-lg mr-2" />  Developing comprehensive plans that promote sustainable growth.</li>
                    </ul>
                </div>
            </div>

        </section>

    )
}


export default Expertise