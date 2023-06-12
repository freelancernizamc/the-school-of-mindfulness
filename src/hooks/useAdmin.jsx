import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            if (!loading && user?.email) {
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                console.log(res.data.admin);
                return res.data.admin;
            }

        }
    })
    return [isAdmin, isAdminLoading]
}
export default useAdmin;