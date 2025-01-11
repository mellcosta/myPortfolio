import { motion } from "motion/react"
import rocketflix from "../../public/projects/rocketflixEn.png"
import spotify from "../../public/projects/spotify.png"
import igniteFeed from "../../public/projects/igniteFeed.png"
import devLinks from "../../public/projects/devLinks.jpg"
import igniteLds from "../../public/projects/ignite-lds.png"
import loginPage from "../../public/projects/loginPage.png"
import portfolio from "../../public/projects/portfolio.png"
import countdown from "../../public/projects/countdown.png"

const projectsData = [
    {
        image:rocketflix,
        title: "Rocketflix",
        description: "If you don't know what to watch, the solution is Rocketflix: a movie finder which provides information about a movie when you click 'Find Movie'.",
        technologies:["HTML","SASS", "Javascript"],
        link: "https://mellcosta.github.io/desafiosRocketseat/avancado/rocketflix/rocketflix.html",
    },
    {
        image:spotify,
        title: "Spotify Clone",
        description: "This is a clone of Spotify website made using Tailwind and Next.js",
        technologies:["Next.js","Tailwind", "Typescript"],
        link: "https://spotify-cyan-chi.vercel.app/",
    },
    {
        image:igniteFeed,
        title: "Ignite Feed",
        description: "Ignite feed  is a simlpe project which simulates your social media feed, with features like comment, likes and delete comments.",
        technologies:["React.js","Vite", "Date-fnt", "Phosphor-react", "React DOM"],
        link: "https://spotify-cyan-chi.vercel.app/",
    },
    {
        image:devLinks,
        title: "Dev Links",
        description: "DevLinks is a link aggregator designed to be used as an online business card.",
        technologies:["Figma", "HTML","CSS", "Javascript"],
        link: "https://mellcosta.github.io/DevLinks/" , 
    },
    {
        image:igniteLds,
        title: "Ignite Lab Design System",
        description: "A design system developed at Ignite Lab marathon 3 by Rocketseat",
        technologies:["Typescript", "Postcss", "Autoprefixer", "Storybook", "Tailwind"],
        link: "https://mellcosta.github.io/ignite_lab_design_system/?path=/story/components-button--default",
    },
    {
        image:loginPage,
        title: "Login Page",
        description: "This a simulation of a login page.",
        technologies:["HTML","CSS", "Javascript",],
        link: "https://mellcosta.github.io/desafiosRocketseat/intermediario/login/login.html" ,
    },
    {
        image:portfolio,
        title: "Portfolio",
        description: "The previous portfolio site I designed and developed by my own.",
        technologies:["React.js","Next.js", "Tailwind", "Figma"],
        link: "https://portfolio-mellcosta.vercel.app/",
    },
    {
        image:countdown,
        title: "Countdown",
        description: "This is a countdown challane project promoted by Rocketseat.",
        technologies:["HTML","CSS", "Javascript"],
        link: "https://mellcosta.github.io/desafiosRocketseat/intermediario/countdown/countdown.html",
    },
    
]

const ScrollReveal = ({children}) => {
    return(
        <motion.div 
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.8}}
        >
            {children}
        </motion.div>
    )
}

const ProjectCard = ({project}) => {
    return (
        <ScrollReveal>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24 " >
                <a href={project.link} target="_blank" className=" min-w-[300px]">
                <img src={project.image} alt="project image" className=" cursor-pointer w-full h-[200px]  rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] " /></a>

                <div className="flex flex-col gap-5">

                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold" > {project.title} </div>
                        <p className="text-gray-400" > {project.description} </p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        {
                            project.technologies.map((tech, index) =>(
                                <span key={index} className=" rounded-lg bg-black p-3 " >
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ScrollReveal>
    )
}

const Projects = () => {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24" >
            <ScrollReveal>
                <h1 className="text-4xl font-light text-white md:text-6xl" >My Projects</h1>
            </ScrollReveal>

            <div className=" flex flex-col w-full max-w-[1000px] gap-16 text-white " >
                {
                    projectsData.map((project, index) =>(
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default Projects