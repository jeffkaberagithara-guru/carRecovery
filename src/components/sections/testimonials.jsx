import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        text: "Flat tire sorted in minutes. Truly dependable.",
        image: "/Headshot1.jpg",
    },
    {
        id: 2,
        name: "Jane Doe",
        text: "Professional, quick and super friendly crew.",
        image: "/Headshot2.jpg",
    },
    {
        id: 3,
        name: "Gracy Smith",
        text: "Smooth experience from start to finish. 10/10!",
        image: "/Headshot3.jpg",
    },
    {
        id: 4,
        name: "John Nolan",
        text: "ResQAuto got to me in under 20 minutes. Lifesaver!.",
        image: "/Headshot4.jpg"
    },

    {
        id: 5,
        name: "Bob Smith",
        text: "Affordable, efficient, and they really know their stuff.",
        image: "/Headshot5.jpg"
    },
    {
        id: 6,
        name: "Lee Kim",
        text: "Never thought a towing service could be this fast and polite.",
        image: "/Headshot6.jpg"
    },

    {
        id: 7,
        name: "Patel Singh",
        text: "They handled my classic car with so much care.",
        image: "/Headshot7.jpg"
    }
];

const Testimonial = () => {
    const [index, setIndex] = useState(0);
    const { name, role, text, image } = testimonials[index];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

            <div>
                <h2 className="text-4xl font-bold text-cyan-700 mb-10 transition-all duration-500 ease-in-out">
                    Real Stories, Real Rescues
                </h2>

                <div className="flex items-center gap-4 mb-6 transition-all duration-500">
                    <img
                        src={image}
                        alt={name}
                        className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                        <p className="text-sm text-gray-500">{role}</p>
                    </div>
                </div>

                <p className="text-gray-700  text-xl italic mb-15 leading-relaxed transition-all duration-500">
                    "{text}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                        <button onClick={prevSlide} className="p-3 rounded-full bg-linear-to-r from-cyan-600 to-cyan-700 text-white shadow-lg hover:shadow-cyan-400/50 hover:scale-110 transition-all duration-100 ease-in-out">
                             <FaChevronLeft className="text-xl text-white" />
                        </button>

                        <button onClick={nextSlide} className="p-3 rounded-full bg-linear-to-r from-cyan-600 to-cyan-700 text-white shadow-lg hover:shadow-cyan-400/50 hover:scale-110 transition-all duration-100 ease-in-out">
                             <FaChevronRight className="text-xl text-white" />
                        </button>
                </div>

            </div>

            <div className="flex justify-center shadow-md">
                <img
                    src="/Customer Care 2.jpg"
                    alt="testimonial background"
                    className="w-full h-[400px] object-cover rounded-xl shadow-md"
                />
            </div>
        </section>
    );
};

export default Testimonial;