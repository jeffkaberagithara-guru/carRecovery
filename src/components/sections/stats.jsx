function Stats() {
    return (
        <div className="hidden md:grid grid-cols-1 p-4 md:p-6 rounded-2xl bg-cyan-600 divide-y divide-white md:divide-y-0 md:divide-x md:divide-white md:grid-cols-3 gap-2 md:gap-4 text-center">
    <div className="py-2 md:py-3 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">10,000+</h1>
        <p className="text-xs md:text-sm text-white font-semibold px-2">Drivers Assisted</p>
    </div>
    <div className="py-2 md:py-3 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">99%</h1>
        <p className="text-xs md:text-sm text-white font-semibold px-2">Customer Satisfaction Rate</p>
    </div>
    <div className="py-2 md:py-3 flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">{"< 30 mins"}</h1>
        <p className="text-xs md:text-sm text-white font-semibold px-2">Average Response Time</p>
    </div>
</div>
    )
}

export default Stats;