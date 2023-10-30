import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="bg-cover  bg-center bg-no-repeat w-full pt-[20vh] pb-40 flex flex-col items-center min-h-[80vh]  justify-center px-4 sm:px-8 md:px-12 space-y-10 lg:px-16 "
            style={{
                backgroundImage: "url(/hero_bg.svg)"
            }}
        >
            <h2 className="text-primary-yellow text-xl font-bold">404</h2>
            <h1 className="text-white text-5xl font-bold">Page Not Found</h1>
            <p className="text-white/60 max-w-2xl text-center">
                The page you are looking for does not exist.
                Please check the URL or click the button below to be redirected to the homepage.
            </p>
            <Link to={'/'} className="py-3 px-6 rounded-full text-black bg-primary-yellow transition-colors hover:text-white w-fit flex items-center gap-2 uppercase">
                <BsArrowLeft />
                <span>Take me home</span>
            </Link>
        </div>
    )
}
