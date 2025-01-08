import { BsGithub, BsLinkedin } from "react-icons/bs"

const Navbar = () => {
    return (
        <nav className="fixe top-0 -z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly "
        >
            <a href="#home" id="logo" className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100 " >Melissa</a>

            <ul className="hidden md:flex gap-10">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </a>
                <a href="#tech" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>
                <a href="#project" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li className="cursor-pointer">Project</li>
                </a>
                <a href="#contact" className=" cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>

            <ul className="hidden md:flex gap-5">
                <li className=" cursor-pointer opacity-70 transition-all duration-300 text-xl hover:text-blue-500 hover:opacity-100">
                    <BsLinkedin/>
                </li>
                <li className=" cursor-pointer opacity-70 transition-all duration-300 text-xl hover:text-orange-500 hover:opacity-100">
                    <BsGithub/>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar