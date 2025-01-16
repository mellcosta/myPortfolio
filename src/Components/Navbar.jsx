import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs"

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className="fixed z-10 top-0 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly "
        >
            <a href="#home" id="logo" className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 " >Melissa</a>

            <ul className="hidden md:flex gap-10">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </a>
                <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>
                <a href="#projects" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li className="cursor-pointer">Projects</li>
                </a>
                <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>

            <ul className="hidden md:flex gap-5">
                <a href="https://www.linkedin.com/in/melissa-costa-71300a209/" target="_blank" className=" cursor-pointer opacity-70 transition-all duration-300 text-xl hover:text-blue-500 hover:opacity-100">
                   <li><BsLinkedin/></li> 
                </a>
                <a href="https://github.com/mellcosta" target="_blank" className=" cursor-pointer opacity-70 transition-all duration-300 text-xl hover:text-orange-500 hover:opacity-100">
                    <li><BsGithub/></li> 
                </a>
            </ul>

            {isOpen ? (
                <BiX  className="block md:hidden text-4xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )
            }

            {isOpen && ( 
                <div className= {`fixed right-0 top-[84px] flex flex-col h-screen w-1/2 items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"} `}  >

                    <ul className="flex flex-col gap-8">
                        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Home</li>
                        </a>
                        <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Tech</li>
                        </a>
                        <a href="#projects" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li className="cursor-pointer">Projects</li>
                        </a>
                        <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Contact</li>
                        </a>
                    </ul>

                    <ul className="flex flex-wrap gap-5">
                        <li className=" cursor-pointer opacity-70 transition-all duration-300 text-xl hover:text-blue-500 hover:opacity-100">
                            <BsLinkedin/>
                        </li>
                        <li className=" cursor-pointer opacity-70 transition-all duration-300 text-xl hover:text-orange-500 hover:opacity-100">
                            <BsGithub/>
                        </li>
                    </ul>
                </div> 
            )}

        </nav>
    )
}

export default Navbar