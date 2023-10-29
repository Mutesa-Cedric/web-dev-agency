import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MainLayout() {
    return (
        <div className="w-full bg-[#110F0F]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
