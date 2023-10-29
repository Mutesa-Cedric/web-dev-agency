import { IService } from "../types"

const Service = ({ title, description, icon }: IService) => {
    return (
        <div className="space-y-4 p-4 rounded border border-primary-gray w-full transition-colors duration-200 hover:border-primary-yellow">
            <img src={`/services/${icon}`} />
            <h3 className="text-white font-bold text-2xl ">{title}</h3>
            <p className="text-white/60 text-sm">{description}</p>
        </div>
    )
}

export default Service;