import { FaTools, FaMoneyBillWave } from "react-icons/fa";

function Card({ image, quote, service }) {
  return (
    <section className="container mx-auto p-2">
      <div>
        <div className="w-full h-54 md:h-69 overflow-hidden rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-100 ease-out bg-white focus:outline-none">
          <div className="w-full h-48 bg-gray-600 flex items-center justify-center">
            <img
              src={image}
              alt={service}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-2 ">
            <p className="flex items-center gap-2 text-gray-700">
              <FaTools className="text-blue-950" /> Service: {service}
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaMoneyBillWave className="text-blue-950" /> Quote: {quote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
