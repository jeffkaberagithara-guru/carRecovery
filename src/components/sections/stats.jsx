function Stats() {
    return (
        <div className="grid grid-cols-1 p-8 rounded-3xl bg-cyan-600 divide-y divide-white md:divide-y-0 md:divide-x md:divide-white md:grid-cols-3 gap-8 text-center">
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">10,000+</h1>
                <p className="text-black font-semibold">Drivers assisted</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">99%</h1>
                <p className="text-black font-semibold">Customer satisfaction rate</p>
            </div>
            <div className="py-4">
                <h1 className="text-3xl font-bold text-white">30</h1>
                <p className="text-black font-semibold">Counties Covered</p>
            </div>

        </div>
    )
}

export default Stats;