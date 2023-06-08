import { Navigate, useLocation } from "react-router";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;