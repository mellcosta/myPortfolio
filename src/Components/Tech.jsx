import { BiLogoCss3, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoSass, BiLogoTailwindCss } from "react-icons/bi"

import { motion } from "motion/react";

const Tech = () => {

    const variants={
        hidden:{opacity:0, y:50},
        visible: {opacity:1, y:0}
    };

    return (
        <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 " >
            <motion.h1 
                variants={variants}
                initial="hidden"
                whileInView="visible"
                transition={{duration:0.5}}
                className="text-4xl font-light text-white md:text-6xl " 
            >Technologies</motion.h1>

            <ul className="flex flex-wrap items-center justify-center gap-10 p-5 ">
                <motion.li 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoReact className=" cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>
                <motion.li 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoTailwindCss className=" cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>
                <motion.li 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoJavascript className=" cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>
                <motion.li 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoHtml5 className=" cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>
                <motion.li 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoCss3 className=" cursor-pointer text-[80px] text-yellow-300 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>
                <motion.li
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoGit className=" cursor-pointer text-[80px] text-orange-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>
                <motion.li 
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{duration:0.5}}
                >
                    <BiLogoSass className=" cursor-pointer text-[80px] text-pink-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] "/>
                </motion.li>

            </ul>

        </div>
    )
}

export default Tech