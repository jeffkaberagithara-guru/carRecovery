import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const links = [
        { id: 1, name: "Home", to: "home" },
        { id: 2, name: "Features", to: "features" },
        { id: 3, name: "About", to: "about" },
        { id: 4, name: "Services", to: "services" },
        { id: 5, name: "Contact", to: "contact" },
    ];


    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setNavOpen(false);
        }
    };


    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setNavOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

  
    useEffect(() => {
        if (navOpen && menuRef.current) {
            const focusableLinks = menuRef.current.querySelectorAll("li");
            focusableLinks[0]?.focus();
        }
    }, [navOpen]);

    return (
        <nav
            className="w-full"
            aria-label="Main Navigation"
        >
            <div className="flex items-center justify-end md:justify-center lg:justify-end px-9 py-4">

                
                <ul className="hidden md:flex space-x-8">
                    {links.map(({ id, name, to }) => (
                        <li key={id}>
                            <button
                                onClick={() => handleScroll(to)}
                                className="cursor-pointer text-white hover:text-white hover:translate-y-1 transition text-lg transition focus:outline-none focus:ring-2 focus:ring-white rounded">
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    ref={buttonRef}
                    onClick={() => setNavOpen(!navOpen)}
                    aria-expanded={navOpen}
                    aria-controls="mobile-menu"
                    aria-label="Toggle menu"
                    className="md:hidden cursor-pointer text-white hover:text-white hover:translate-y-1 transition text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded">
                    {navOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            
            {navOpen && (
                <ul
                    id="mobile-menu"
                    ref={menuRef}
                    className="md:hidden flex flex-col items-center space-y-6 bg-blue-800 py-6 shadow-md absolute top-16 right-0 w-full z-40">
                    {links.map(({ id, name, to }) => (
                        <li key={id}>
                            <button
                                onClick={() => handleScroll(to)}
                                className="cursor-pointer text-white hover:text-white hover:translate-y-1 transition text-lg focus:outline-none focus:ring-2 focus:ring-white rounded">
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
