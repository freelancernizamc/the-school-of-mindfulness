import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const InstractorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstractor, isInstractorLoading] = useAdmin();
    const location = useLocation();
    if (loading || isInstractorLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isInstractor) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default InstractorRoute;