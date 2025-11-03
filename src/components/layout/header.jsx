import Navbar from "./navigation";


const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-cyan-600 text-white border-b border-gray-950 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2 cursor-pointer">
           <img src="/carRecovery logo.jpg" alt="logo" className="w-10 h-10" />          
                    <h1 className="text-2xl font-bold text-white">ResQAuto</h1>
                </div>  

                <Navbar />
            </div>
        </header>
    );
};

export default Header;
