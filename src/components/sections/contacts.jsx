function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10 bg-linear-to-r from-cyan-600 to-cyan-700 rounded-3xl text-white shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        <div className="hidden lg:block">
          <img src="/Tow truck technician.jpg" alt="ResQAuto Technician" className="w-full max-h-[300px] md:max-h-[400px] rounded-2xl shadow-lg object-cover object-center mx-auto"/>
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Rescue-Ready
          </h2>
          <p className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed">
            Create a free account to track your rescue, get faster service next time,
            and access your service history. <br></br>Sign up to make your next roadside rescue even faster.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 bg-white text-gray-800 rounded-md w-full sm:w-2/3 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 hover:-translate-y-1 hover:scale-105 text-white font-semibold rounded-md shadow-lg transition">
              Get Assistance
            </button>
          </form>

          <p className="text-sm text-gray-300 mt-3">
            No spam, just quick roadside help when you need it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
