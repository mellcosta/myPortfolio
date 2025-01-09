import profile from "../../public/profilePic1.jpg"
import { motion } from "motion/react";

const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 " >
            <div className="flex flex-col items-center justify-center gap-10 text-white ">
                <motion.div
                    initial={{y:-50, opacity: 0}}
                    animate={{y: 0, opacity:1}}
                    transition={{duration:0.8, delay:0.2}}
                >
                    <img src={profile} 
                        alt="Melissa Costa profile picture"
                        className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 ms:w-[350px] "
                     />
                </motion.div>

                <motion.div 
                    initial={{y:50, opacity: 0}}
                    animate={{y: 0, opacity:1}}
                    transition={{duration:0.8, delay:0.2}}

                    className="flex max-w-[600px] flex-col items-center justify-center text-center gap-3 "
                >
                    <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-5xl font-light md:text-7xl " >
                        Melissa Costa
                    </h1>
                    <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-2xl font-light md:text-3xl ">
                        Frontend Developer
                    </h3>
                    <p className="md:text-base text-pretty text-sm text-gray-400 " >
                        I’m a frontend developer skilled in React.js, Next.js, and Tailwind, focused on building dynamic, clean and user-friendly experiences. I also enjoy working with Figma to create designs and bring other people’s designs to life. Let’s create something awesome together!
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero