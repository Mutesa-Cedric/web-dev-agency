
export default function WhyChooseUs() {
    return (
        <div className="bg-black px-4 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between flex-col md:flex-row gap-6 py-24 ">
            <img src="/searching.svg" />
            <div className="space-y-6 flex md:block items-center flex-col ">
                <h3 className="text-white text-3xl font-bold">Why Choose Us</h3>
                <p className="text-white/60 max-w-2xl text-center md:text-start">Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. </p>
                <button className="border border-primary-yellow text-primary-yellow uppercase rounded-full py-3 px-6 transition-colors duration-300 hover:bg-primary-yellow hover:text-white">
                    let&apos;s connect
                </button>
            </div>
        </div>
    )
}
