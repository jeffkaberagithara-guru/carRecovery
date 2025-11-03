import { FaCheckCircle } from "react-icons/fa";

function Explanation() {
    return (
        <section className="contaner mx-auto py-5 px-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mx-auto">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-cyan-700 mb-6">Crafting Architectural Excellence Since 2018</h2>


                    <p className="text-lg text-black mb-6">Artex Architecture emerged from a vision to bridge
                        the gap between architectural artistry and practical functionality.
                        Founded by James Andlly, an architect with 15 years of experience in
                        both boutique residential and large-scale commercial projects.
                    </p>

                    <h2 className="text-4xl font-bold text-cyan-700 mb-6">Why Choose Artex</h2>
                    <ul className="mt-9 space-y-4 text-black">
                        <li className="text-lg flex items-start  gap-4 mb-2 "> <FaCheckCircle className="text-cyan-600 text-lg mr-2" />Holistic Approach: We consider every aspect of your project.</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Collaborative Process: You're involved at every stage.</li >
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-cyan-600 text-lg mr-2" />Technical Excellence: Our designs are  efficient and compliant</li>
                        <li className="text-lg flex items-start  gap-4 mb-2 "><FaCheckCircle className="text-cyan-600 text-lg mr-2" /> Long-term Perspective: We create architecture that  serves generations</li>
                    </ul>

                </div>

                <div>
                    <img src="/sectionone.jpg" alt="collaboration photo" className="w-full h-auto object-cover rounded-2xl" />
                </div>
            </div>


        </section>
    )
}


export default Explanation