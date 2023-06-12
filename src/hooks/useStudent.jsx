import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useStudent = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            if (!loading && user?.email) {
                const res = await axiosSecure.get(`/users/student/${user?.email}`);
                console.log(res.data.student);
                return res.data.student;
            }

        }
    })
    return [isStudent, isStudentLoading]
}
export default useStudent;