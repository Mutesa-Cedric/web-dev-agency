
export default function ContactUs() {

    const goToTop = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div className="w-full pt-16 pb-10 px-4 sm:px-8 md:px-12 lg:px-16  bg-[#110F0F] flex flex-col gap-y-6 items-end">
            <div className="w-full bg-[#FFB219] flex flex-col items-center gap-y-5 py-12 text-black rounded border border-primary-gray">
                <h3 className="text-3xl font-bold">Let&apos;s discuss the idea</h3>
                <p className="text-center text-xl text-black/60 max-w-2xl">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. </p>
                <div className="max-w-2xl w-full flex items-center gap-x-4">
                    <input className="py-3 bg-white outline-none px-5 rounded-full w-full placeholder:text-black/75" placeholder="your email" />
                    <button className="bg-black text-white py-3 px-6 rounded-full uppercase">send</button>
                </div>
            </div>
            <button
                onClick={goToTop}
                className="border border-primary-yellow text-primary-yellow uppercase py-3 px-6 rounded-full transition-colors duration-300 hover:bg-primary-yellow hover:text-white">
                go to top
            </button>
        </div>
    )
}
