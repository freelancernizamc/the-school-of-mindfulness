import { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import useAuth from '../../../hooks/useAuth';

const MyClasses = ({ instructorEmail }) => {
    const { user } = useAuth();

    const [classData, setClassData] = useState([]);
    const [feedbackVisible, setFeedbackVisible] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    const [feedbackText, setFeedbackText] = useState("");

    const url = `https://assignment-12-server-lyart.vercel.app/classes?instructorEmail=${instructorEmail}`;


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setClassData(data);
            })
            .catch((error) => {
                console.error('Error fetching class data:', error);
            });

    }, [url, user]);

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete it?');
        if (proceed) {
            fetch(`https://assignment-12-server-lyart.vercel.app/api/classes/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    alert('Class deleted successfully');
                    const remaining = classData.filter((d) => d._id !== id);
                    setClassData(remaining);
                })
                .catch((error) => {
                    console.error('Error deleting class:', error);
                });
        }
    };

    const openFeedback = (classes) => {
        setSelectedClass(classes);
        setFeedbackVisible(true);
    };

    const sendFeedback = () => {
        setSelectedClass(null);
        setFeedbackText("");
        setFeedbackVisible(false);
    };

    return (
        <div>
            <Navbar />
            {classData.length > 0 ? (
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Class Name</th>
                            <th className="px-4 py-2">Image</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Available Seats</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Enrolled Students</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classData.map((classes) => (
                            <tr key={classes._id}>
                                <td className="px-4 py-2">{classes.name}</td>
                                <td className="px-4 py-2">
                                    <img className="w-16 h-16" src={classes.image} alt="Class" />
                                </td>
                                <td className="px-4 py-2">{classes.price}</td>
                                <td className="px-4 py-2">{classes.availableSeats}</td>
                                <td className="px-4 py-2">{classes.status}</td>
                                <td className="px-4 py-2">{classes.totalEnrolledStudents}</td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleDelete(classes._id)} className="btn btn-sm bg-red-600">
                                        Delete
                                    </button>
                                </td>
                                <td className="px-4 py-2">
                                    <button className="btn">Update</button>
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => openFeedback(classes)} className="btn">
                                        Feedback
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>Loading...</div>
            )}

            {feedbackVisible && selectedClass && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Provide Feedback</h2>
                        <p>Class: {selectedClass.name}</p>
                        <textarea
                            value={feedbackText}
                            onChange={(e) => setFeedbackText(e.target.value)}
                            placeholder="Enter your feedback"
                        />
                        <button onClick={sendFeedback} className="btn">
                            Send Feedback
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyClasses;
