import { Navigate, useLocation } from "react-router";

import useInstractor from "../hooks/useInstractor";
import useAuth from "../hooks/useAuth";


const InstractorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isInstractor, isInstractorLoading] = useInstractor();
    console.log('instractor', isInstractor);
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