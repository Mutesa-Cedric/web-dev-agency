import { BsArrowRight } from "react-icons/bs"
import { IProject } from "../types"


interface IProps extends IProject {
    showTag?: boolean
}

const Project = ({ title, tag, showTag = true }: IProps) => {
    return (
        <div className="border border-primary-gray p-4 space-y-5 rounded hover:border-primary-yellow transition-colors duration-500">
            <div className="w-full h-40 rounded bg-[#8474C4]" />
            {showTag && <p className="bg-primary-yellow text-black text-sm px-2 py-1 w-fit uppercase rounded">{tag}</p>}
            <h3 className="text-xl text-white font-bold">{title}</h3>
            <div role="button" className="flex items-center space-x-2 text-white/60 hover:text-white">
                <span>Read More</span>
                <BsArrowRight />
            </div>
        </div>
    )
}

export default Project