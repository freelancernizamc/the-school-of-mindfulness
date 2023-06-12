import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useInstractor = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { data: isInstractor, isLoading: isInstractorLoading } = useQuery({
        queryKey: ['isInstractor', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/instractor/${user?.email}`);
            console.log(res.data);
            return res.data.instractor;

        }
    })
    return [isInstractor, isInstractorLoading]
}
export default useInstractor;