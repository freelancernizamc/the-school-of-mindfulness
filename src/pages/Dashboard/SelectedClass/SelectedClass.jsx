import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const SelectedClasses = ({ selectedClasses }) => {
    const [refetch] = useCart();
    console.log(selectedClasses);

    // Check if selectedClasses is defined
    const total = selectedClasses
        ? selectedClasses.reduce((sum, classes) => classes.price + sum, 0)
        : 0;

    const handleDelete = (classes) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClasses/${classes._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        }
                    });
            }
        });
    };

    return (
        <div className="md:w-full">

            <Navbar />
            <Helmet>
                <title>The School of Mindfulness | Selected Classes</title>
            </Helmet>

            <SectionTitle
                subHeading="---Pay for Enroll----"
                heading="Manage My Selected Classes"
            />
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center bg-[#272030] text-white">
                <h3 className="md:text-3xl">Total Classes: {selectedClasses?.length || 0}</h3>
                <h3 className="md:text-3xl">Total Price: ${total}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn bg-[#0b9c3b] btn-sm text-white">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto md:w-full">
                <table className="table md:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructors Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedClasses &&
                            selectedClasses.map((classes, index) => (
                                <tr key={classes._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={classes.image}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {classes.name}
                                        <span className="badge badge-ghost badge-sm">
                                            Desktop Support Technician
                                        </span>
                                    </td>
                                    <td className="text-end">{classes.instructor}</td>
                                    <td className="text-end">${classes.price}</td>
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
                        {!selectedClasses && (
                            <tr>
                                <td colSpan="7" className="text-center">
                                    No selected classes.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;
