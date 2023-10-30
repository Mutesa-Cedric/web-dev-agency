
export default function Contact() {
    return (
        <div>
            <div className="bg-cover  bg-center bg-no-repeat w-full pt-[20vh] pb-40 flex flex-col    justify-center px-4 sm:px-8 md:px-12 space-y-10 lg:px-16 "
                style={{
                    backgroundImage: "url(/hero_bg.svg)"
                }}
            >
                <h2 className="text-primary-yellow text-xl font-bold">Contact us</h2>
                <h1 className="text-white text-5xl font-bold">Have a question or project in mind?</h1>
                <p className="text-white/60 max-w-2xl">
                    We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                    some of our contact details are:
                    <br />
                    <span className="text-primary-yellow">Email:</span>
                    <span className="text-white">
                        <a href="mailto:" rel="noreferrer" target="_blank">
                            webdev@gmail.com
                        </a>
                    </span>
                    <br />
                    <span className="text-primary-yellow">Phone:</span>
                    <span className="text-white">
                        <a href="tel:" rel="noreferrer" target="_blank">
                            +234 123 456 7890
                        </a>
                    </span>

                </p>
            </div>
            <div className="px-4 sm:px-8 md:px-12 py-16 bg-secondary-gray space-y-12  ">
                <div className="grid grid-cols-1 text-white md:grid-cols-2 gap-8 ">
                    <input className="w-full py-3 border-2 outline-none transition-colors hover:border-primary-yellow  px-6 bg-transparent rounded " placeholder="First Name" name="firstName" type="text" />
                    <input className="w-full py-3 border-2 outline-none transition-colors hover:border-primary-yellow  px-6 bg-transparent rounded " placeholder="Last Name" name="lastName" type="text" />
                    <input className="w-full py-3 border-2 outline-none transition-colors hover:border-primary-yellow  px-6 bg-transparent rounded " placeholder="Your Email" name="email" type="email" />
                    <input className="w-full py-3 border-2 outline-none transition-colors hover:border-primary-yellow  px-6 bg-transparent rounded " placeholder="Company name (optional)" name="companyName" type="text" />
                    <textarea className="w-full py-3 border-2 outline-none transition-colors  col-span-2 hover:border-primary-yellow  px-6 bg-transparent rounded " placeholder="Message" name="message" rows={4} />
                </div>
                <button className="transition-colors duration-200 text-primary-yellow border border-primary-yellow rounded-full py-3 px-6 hover:text-white hover:bg-primary-yellow">
                    Send Message
                </button>
            </div>
        </div>
    )
}
