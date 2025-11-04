import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaHeart, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Card({ service, cost, image }) {
    return (
        <section className="container mx-auto p-2">


            <div >

                <div className="overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                        <img
                            src={image}
                            alt={service}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-2 ">
                        <p className="flex items-center gap-2 text-gray-500"><FaBuilding className="text-blue-950" /> Service: {service}</p>
                        <p className="flex items-center gap-2 text-gray-500"><FaDollarSign className="text-blue-950" /> Cost: {cost}</p>
                        <div className="flex items-center gap-1 text-yellow-500">

                            <div className="flex items-center justify-end mt-2 text-yellow-500">
                                <p className="font-medium">Rating:</p>
                                
                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </section>

    )
}


export default Card