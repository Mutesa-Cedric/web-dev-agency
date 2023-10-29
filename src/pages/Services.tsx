import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { projects, whatWeOffer } from "../data";
import Project from "../components/Project";
import Service from "../components/Service";

export default function Services() {
  return (
    <div>
      <div className="bg-cover  bg-center bg-no-repeat w-full pt-[20vh] pb-40 flex flex-col  justify-center px-4 sm:px-8 md:px-12 space-y-10 lg:px-16 "
        style={{
          backgroundImage: "url(/hero_bg.svg)"
        }}
      >
        <h2 className="text-primary-yellow text-xl font-bold">Branding</h2>
        <h1 className="text-white text-5xl font-bold">Find Your Niche </h1>
        <p className="text-white/60 max-w-2xl">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros  </p>
        <Link to={'/contact'} className="py-3 px-6 rounded-full text-black bg-primary-yellow transition-colors hover:text-white w-fit flex items-center gap-2">
          <span>BUILD MY BRAND</span>
          <BsArrowRight />
        </Link>
      </div>
      <div className="bg-secondary-gray w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16  space-y-20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Process</h2>
          <p className="text-white/60 max-w-6xl">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  </p>
        </div>

        {/* works */}
        <div className="space-y-8">
          <h2 className="font-bold text-2xl text-white">Branding Works</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              new Array(3).fill(projects[0]).map((project, idx) => (
                <Project showTag={false} key={idx} {...project} />
              ))
            }
          </div>
        </div>

        {/* other services */}
        <div className="space-y-8">
          <h2 className="font-bold text-2xl text-white">Other Services</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              whatWeOffer.slice(1, 4).map((service, idx) => (
                <Service key={idx} {...service} />
              ))
            }
          </div>
        </div>
        <Link to={'/'} className="border-primary-yellow  border  rounded-full w-fit text-primary-yellow py-3 px-6 transition-colors duration-300 hover:text-white hover:bg-primary-yellow flex items-center gap-3" >
          <BsArrowLeft />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  )

}
