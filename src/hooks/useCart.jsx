import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: SelectedClasses = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`
                , {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
            return response.json();
        },
    })

    return [SelectedClasses, refetch]

}

export default useCart;