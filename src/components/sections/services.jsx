import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Services() {
  const services = [
    { img: "/Batterycheckup.avif", title: "Battery & Starting Systems" },
    { img: "/Africantyrechange.jpg", title: "Tire Emergency Services" },
    { img: "/Fueldelivery3.jpg", title: "Emergency Fuel Delivery" },
    { img: "/Lockedkey2.webp", title: "Vehicle Lockout Services" },
    { img: "/Keyignition.jpg", title: "Key & Ignition Services" },
    { img: "/Carsecurity.jpg", title: "Security System Support" },
    { img: "/Tow truck 2.jpg", title: "Flatbed & Towing Services" },
    { img: "/Onsitediag2.jpg", title: "On-Site Diagnostics" },
    { img: "/Lady mech unsplash.jpg", title: "Emergency Repairs" },
    { img: "/Oillevel.webp", title: "Fluid Services" },
    { img: "/Africanmech.jpg", title: "Preventive Maintenance" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesPerView = 6; // number of services visible

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
      {/* Caption section */}
      <div className="lg:col-span-1">
        <h3 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-4">
          Explore Our Services
        </h3>
        <p className="text-base text-gray-700 mb-6 leading-relaxed">
          No matter the problem, we have the solution. Discover our complete
          range of reliable roadside and automotive services.
        </p>
        <button className="px-5 py-2 border border-cyan-600 text-cyan-600 font-semibold rounded-full hover:bg-cyan-600 hover:text-white transition text-sm">
          View More
        </button>
      </div>

      {/* Slider section */}
      <div className="lg:col-span-3 relative overflow-hidden">
        <motion.div
          className="flex items-start"
          animate={{ x: `-${(currentIndex * 100) / slidesPerView}%` }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{
            width: `${(services.length * 100) / slidesPerView}%`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-2 flex-shrink-0 flex flex-col items-center"
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-45 h-45 md:w-45 md:h-45 object-cover rounded-lg"
              />
              <h5 className="text-sm md:text-base font-semibold text-cyan-600 mt-2 text-center px-2">
                {service.title}
              </h5>
            </div>
          ))}
        </motion.div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                currentIndex === index ? "bg-cyan-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
