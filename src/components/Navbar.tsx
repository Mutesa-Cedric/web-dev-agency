import { Link, useLocation } from "react-router-dom"

const links: {
    name: string,
    href: string
}[] = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
    ]

export default function Navbar() {
    const location = useLocation();

    return (
        <div className="w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-6 absolute top-0 left-0 z-20 h-[10vh] text-white "
            style={{
                background: "rgba(15, 15, 15, 0.40)",
                backdropFilter: "blur(9px)",
            }}
        >
            <Link to={'/'} className="flex items-center gap-4">
                <img alt="logo" src="/logo.svg" />
                <h2 className="font-bold text-lg">Shadclient.co</h2>
            </Link>
            <div className="flex items-center gap-x-8">
                {
                    links.map(link => (
                        <Link to={link.href} key={link.name}
                            className={`${location.pathname === link.href ? "text-primary-yellow" : "text-white hover:text-primary-yellow"} transition-colors duration-200`}
                        >
                            {link.name}
                        </Link>
                    ))
                }
                <Link to={'/contact'} className="text-primary-yellow border border-primary-yellow rounded-full py-3 px-6 transition-colors duration-200 hover:text-white hover:bg-primary-yellow">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}

