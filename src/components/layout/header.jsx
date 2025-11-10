import Navbar from "./navigation";


const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-black-400 text-cyan-950 border-gray-950 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 cursor-pointer">         
                    <h1 className="text-2xl font-bold text-red-800">ResQAuto</h1>
                </div>  
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
