import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading);
    if (loading) {
        <progress className="progress w-56"></progress>
    }

    if (user != null) {
        return children;
    }
    if (!user && !loading) {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

};

export default PrivateRoute;