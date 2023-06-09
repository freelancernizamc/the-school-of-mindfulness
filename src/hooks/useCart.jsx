import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
const useCart = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`
                , {
                    headers: {
                        authorization: `bearer ${token}`
                    }
                })
            return response.json();
        },
    })

    return [cart, refetch]

}

export default useCart;