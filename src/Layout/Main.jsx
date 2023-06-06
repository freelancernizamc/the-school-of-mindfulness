import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;