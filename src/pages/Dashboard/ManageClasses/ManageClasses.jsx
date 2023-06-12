import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import Navbar from "../../Shared/Navbar/Navbar";
import { useState } from "react";

const ManageClasses = () => {
    const { isLoading, error, isError, data, refetch } = useQuery({
        queryKey: ["repoData"],
        queryFn: () =>
            fetch("https://assignment-12-server-lyart.vercel.app/classes").then((res) =>
                res.json()
            ),
    });

    const [feedbackVisible, setFeedbackVisible] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedbackText, setFeedbackText] = useState("");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }



    const approveItem = (classes) => {

        fetch(`https://assignment-12-server-lyart.vercel.app/classes/${classes._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "approved" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    Swal.fire("Class Approved", "This Class has been approved.", "success");
                    refetch();
                } else {
                    Swal.fire("Error", "Failed to approve the item.", "error");
                }
            })
            .catch((error) => {
                Swal.fire("Error", "An error occurred while approving the item.", "error");
                console.error(error);
            });
    };

    const denyItem = (classes) => {

        fetch(`https://assignment-12-server-lyart.vercel.app/classes/${classes._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ status: "denied" }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    Swal.fire("Class Denied", "The item has been denied.", "success");
                    refetch();
                } else {
                    Swal.fire("Error", "Failed to deny the class.", "error");
                }
            })
            .catch((error) => {
                Swal.fire("Error", "An error occurred while denying the class.", "error");
                console.error(error);
            });
    };

    const openFeedback = (classes) => {
        setSelectedClass(classes);
        setFeedbackVisible(true);

    };

    const sendFeedback = () => {
        setSelectedClass(selectedClass);
        setFeedbackText("");
        setFeedbackVisible(false);
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
            {feedbackVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            placeholder="Write feedback..."
                        ></textarea>
                        <button onClick={sendFeedback}>Send</button>
                    </div>
                </div>
            )}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
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
                                <td>{classes.instractorEmail}</td>
                                <td>{classes.availableSeats}</td>
                                <td>{classes.price}</td>

                                <td>
                                    <button
                                        className="btn btn-xs bg-green-500"
                                        onClick={() => {
                                            approveItem(classes);
                                            setFeedbackVisible(false);
                                        }}
                                        disabled={classes.status === "approved" || classes.status === "denied"}
                                    >
                                        Approve
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-xs bg-pink-600"
                                        onClick={() => {
                                            denyItem(classes);
                                            setFeedbackVisible(false);
                                        }}
                                        disabled={classes.status === "approved" || classes.status === "denied"}
                                    >
                                        Deny
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-xs"
                                        onClick={() => openFeedback(classes)}
                                        disabled={classes.status === "denied"}
                                    >
                                        Send Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {feedbackVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            placeholder="Write feedback..."
                        ></textarea>
                        <button onClick={sendFeedback}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;
