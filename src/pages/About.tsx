import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="h-screen bg-cover  bg-center bg-no-repeat w-full pt-[10vh] flex flex-col  justify-center px-4 sm:px-8 md:px-12 space-y-10 lg:px-16 "
        style={{
          backgroundImage: "url(/hero_bg.svg)"
        }}
      >
        <h2 className="text-primary-yellow text-xl font-bold">About us</h2>
        <h1 className="text-white text-5xl font-bold">Shadient.co </h1>
        <p className="text-white/60 max-w-2xl">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
        <Link to={'/contact'} className="py-3 px-6 rounded-full text-black bg-primary-yellow transition-colors hover:text-white w-fit flex items-center gap-2">
          <span>Contact us</span>
          <BsArrowRight />
        </Link>
      </div>
      <div className="bg-secondary-gray w-full py-20 px-4 sm:px-8 md:px-12 lg:px-16  space-y-16">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Company</h2>
          <p className="text-white/60 max-w-6xl">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Team</h2>
          <p className="text-white/60 max-w-6xl">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.  </p>
        </div>

        <Link to={'/'} className="border-primary-yellow  border  rounded-full w-fit text-primary-yellow py-3 px-6 transition-colors duration-300 hover:text-white hover:bg-primary-yellow flex items-center gap-3" >
          <BsArrowLeft />
          <span>Go Home</span>
        </Link>
      </div>
    </div>

  )
}
