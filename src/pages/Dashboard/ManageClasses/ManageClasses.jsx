import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";

const ManageClasses = () => {
    const { isLoading, error, isError, data, refetch } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://assignment-12-server-lyart.vercel.app/classes').then(res => res.json()),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    const handleDelete = classes => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-lyart.vercel.app/classes/${classes._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success',
                            );
                        }
                    });
            }
        });
    };

    return (
        <div className="md:w-full">
            <Navbar />
            <Helmet>
                <title>The School of Mindfulness | Manage Classes</title>
            </Helmet>
            <h3 className="text-3xl font-semibold my-4 text-center bg-[#272030] text-white">
                Total Classes: {data.length}
            </h3>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((classes, index) => (
                            <tr key={classes._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classes.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>{classes.name}</td>
                                <td>{classes.instructorName}</td>
                                <td>{classes.availableSeats}</td>
                                <td>{classes.price}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(classes)}
                                        className="btn btn-ghost btn-sm bg-red-600 text-white"
                                    >
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
