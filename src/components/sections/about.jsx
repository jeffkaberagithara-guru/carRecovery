function About() { 
    return (
        <section className="container mx-auto py-5 px-4 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-4xl font-bold text-cyan-600 mb-6">About Us</h2>
                    <p className="text-lg">
                        ResQAuto is a roadside assistance service that provides towing and on-spot repair services to drivers in need of assistance. Our team of skilled technicians is dedicated to ensuring that your vehicle is restored to working order, whether it is a mechanical or electrical issue.
                    </p>
                </div>
                <div>
                    <img src="/Africanladyoillevel.jpg" alt="ResQAuto Technician" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl shadow-lg object-cover object-center mx-auto" />
                </div>
            </div>
        </section>
    );
}

export default About