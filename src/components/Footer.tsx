import { Link } from "react-router-dom"

const footerLinks: { label: string, href: string }[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Contact Us",
        href: "/contact"
    }
]

export default function Footer() {
    return (
        <div className="w-full bg-black flex flex-col items-center gap-y-12 py-16  px-4 sm:px-8 md:px-12 lg:px-16 text-white">
            <div className="flex items-center gap-10">
                {
                    footerLinks.map(link => (
                        <Link key={link.label} to={link.href} className="uppercase text-xl font-bold hover:text-primary-yellow transiton-colors duration-200">
                            {link.label}
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-col items-center ">
                <p>webdev@gmail.com</p>
                <p>0490 438 724</p>
            </div>
            <p className="italic">&copy; {new Date().getFullYear()} Web Dev Agency. All Rights Reserved.</p>
        </div>
    )
}
