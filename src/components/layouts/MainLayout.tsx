import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MainLayout() {
    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
