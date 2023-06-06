import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;