import { useEffect, useState } from 'react';

import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';

const MyClasses = () => {
    const { user } = useAuth();
    const [classData, setClassData] = useState([]);
    const url = `https://assignment-12-server-lyart.vercel.app/uploads?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setClassData(data);
            })
            .catch((error) => {
                console.error('Error fetching class data:', error);
            });
    }, [url]);

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('Are you sure you want to delete it?');
        if (proceed) {
            fetch(`https://assignment-12-server-lyart.vercel.app/api/classes/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    // if (data.deletedCount > 0) {
                    alert('Class deleted successfully');
                    const remaining = classData.filter((d) => d._id !== id);
                    setClassData(remaining);
                    // }
                })
                .catch((error) => {
                    console.error('Error deleting class:', error);
                });
        }
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
                            <th className="px-4 py-2">Instructor Name</th>
                            <th className="px-4 py-2">Available Seats</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Enrolled Students</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Action</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {classData.map((classes) => (
                            <tr key={classes._id}>
                                <td className="px-4 py-2">{classes.className}</td>
                                <td className="px-4 py-2">
                                    <img className="w-16 h-16" src={classes.image} alt="Class" />
                                </td>
                                <td className="px-4 py-2">{classes.category}</td>
                                <td className="px-4 py-2">{classes.price}</td>
                                <td className="px-4 py-2">{classes.available_quantity}</td>
                                <td className="px-4 py-2">{classes.rating}</td>
                                <td className="px-4 py-2">{classes.description}</td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleDelete(classes._id)} className="btn">Delete</button>
                                </td>
                                <td className="px-4 py-2">
                                    <button className="btn">Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default MyClasses;
