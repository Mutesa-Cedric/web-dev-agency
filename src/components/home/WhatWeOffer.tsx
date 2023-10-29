import { whatWeOffer } from "../../data"
import { IService } from "../../types"

export default function WhatWeOffer() {
    return (
        <div className="py-24  flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 space-y-8 bg-[#110F0F]">
            <div className="flex flex-col text-white items-center gap-y-4">
                <h2 className="text-3xl font-bold">What We offer</h2>
                <p className="text-white/60 text-center max-w-2xl">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {
                    whatWeOffer.map(service => (
                        <Offer key={service.title} {...service} />
                    ))
                }
            </div>
        </div>
    )
}

const Offer = ({ title, description, icon }: IService) => {
    return (
        <div className="space-y-4 p-4 rounded border border-primary-gray w-full">
            <img src={`/services/${icon}`} />
            <h3 className="text-white font-bold text-2xl ">{title}</h3>
            <p className="text-white/60 text-sm">{description}</p>
        </div>
    )
}
