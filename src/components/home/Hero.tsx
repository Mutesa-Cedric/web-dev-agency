export default function Hero() {
    return (
        <div className="h-screen bg-cover  bg-center bg-no-repeat w-full pt-[10vh] flex flex-col items-center justify-center"
            style={{
                backgroundImage: "url(/hero_bg.svg)"
            }}
        >
            <div className=" space-y-8 text-white">
                <h2 className="text-7xl max-w-md">Attract
                    <span style={{
                        background: "linear-gradient(218deg, #9DE8EE 25.05%, #9DE8EE 25.05%, #FA7C0B 51.71%, #9F8CED 79.45%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}> NewLeads </span>
                    like never before
                </h2>
                <p className="max-w-lg text-white/60">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros </p>
                <div className="flex items-center gap-5">
                    <input type="email" className="w-full bg-transparent border-2 rounded-full  outline-none hover:border-primary-yellow transition-colors duration-200 placeholder:text-white  border-[#A1AEBF] py-3 pl-6" placeholder="email" />
                    <button className="bg-primary-yellow text-black py-3 px-6 rounded-full hover:text-white transition-colors duration-300 ">Attract</button>
                </div>
            </div>
        </div>
    )
}