import { BsArrowRight } from "react-icons/bs"
import { IProject } from "../../types"
import { projects } from "../../data"

export default function Portfolio() {
    return (
        <div className="w-full  px-4 sm:px-8 md:px-12 lg:px-16 py-12 flex flex-col items-center space-y-12 ">
            <div className="flex flex-col items-center space-y-3">
                <h2 className="text-3xl font-bold text-white">Some pieces of our work</h2>
                <p className="text-white/60 text-center max-w-2xl">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    projects.map((project, idx) => (
                        <Project key={idx} {...project} />
                    ))
                }
            </div>
            <button className="border border-primary-yellow text-primary-yellow uppercase rounded-full py-3 px-6 transition-colors duration-300 hover:bg-primary-yellow hover:text-white flex items-center gap-3">
                <span>View More</span>
                <BsArrowRight className="text-xl" />
            </button>
        </div>
    )
}


const Project = ({ title, tag }: IProject) => {
    return (
        <div className="border border-primary-gray p-4 space-y-5 rounded hover:border-primary-yellow transition-colors duration-500">
            <div className="w-full h-40 rounded bg-[#8474C4]" />
            <p className="bg-primary-yellow text-black text-sm px-2 py-1 w-fit uppercase rounded">{tag}</p>
            <h3 className="text-xl text-white font-bold">{title}</h3>
            <div className="flex items-center space-x-2 text-white/60 hover:text-white">
                <span>Read More</span>
                <BsArrowRight />
            </div>
        </div>
    )
}