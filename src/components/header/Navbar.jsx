import { useState } from "react";

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const openMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <>
            <div className="flex flex-row justify-between items-center font-questrial mx-20 pt-10 text-white ">
                <h1 className="font-bold text-3xl md:text-4xl">Panto</h1>
                <ul className="hidden md:flex flex-row justify-between  md:gap-x-12 lg:gap-x-24 md:text-xl lg:text-2xl ">
                    <li >
                        <a className="flex gap-4" href="#">Furniture
                            <p>&or;</p>
                        </a>
                    </li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button className="hidden md:flex text-white p-4">
                    <img src="/src/assets/Bag.svg" alt="Bag" />
                </button>
            </div>

            <div className="absolute right-0 text-right pr-10 md:hidden text-white top-9">
                <button
                    onClick={openMenu}
                    className="text-2xl focus:outline-none ">{!isMobileMenuOpen ? '☰' : '×'}
                </button>
                {isMobileMenuOpen &&
                    <ul className="absolute  backdrop-blur-sm bg-transparent right-10 text-white text-center py-2">
                        <li className="block px-4 py-2">
                            <a className="flex gap-2" href="#">Furniture
                                <p>&or;</p>
                            </a>
                        </li>
                        <li className="block px-4 py-2"><a href="#">Shop</a></li>
                        <li className="block px-4 py-2"><a href="#">About Us</a></li>
                        <li className="block px-4 py-2"><a href="#">Contact</a></li>
                    </ul>
                }
            </div>

        </>
    )
}