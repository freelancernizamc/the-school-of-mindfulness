import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log(res.data);
            return res.data.admin;

        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;