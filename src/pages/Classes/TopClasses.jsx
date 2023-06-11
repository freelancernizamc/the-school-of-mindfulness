import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";

const TopClasses = (classes) => {
    const { name, image, price, instractorName, availableSeats, _id } = classes;
    const { user } = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['classes'], // Update the query key to match the server-side query
        queryFn: () =>
            fetch('https://assignment-12-server-lyart.vercel.app/top-classes?limit=6')
                .then((res) => res.json()),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const handleAddToCart = selectedClasses => {
        console.log(selectedClasses);

        if (user && user.email) {
            const selectedClasses = { selectedClasses: _id, name, image, price, instractorName, availableSeats, email: user.email }
            fetch('https://assignment-12-server-lyart.vercel.app/selectedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClasses)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food Add In the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })


        }
    }


    return (
        <div className="grid md:grid-cols-3 gap-4">
            {data.map((classes) => (
                <div key={classes._id} className="card w-96 bg-[#272030] text-white hover:bg-slate-300 hover:text-black mb-4 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={classes.image} alt="classes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{classes.name}</h2>
                        <p className='text-1xl'>Instractor Name: {classes.instructorName}</p>
                        <p>Available Seats: {classes.availableSeats}</p>
                        <p>Price: ${classes.price}</p>
                        <div className="card-actions">
                            <button onClick={() => handleAddToCart(classes)} className="btn bg-[#9931E1] text-white hover:bg-[#272030]">Select For Enroll</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopClasses;
