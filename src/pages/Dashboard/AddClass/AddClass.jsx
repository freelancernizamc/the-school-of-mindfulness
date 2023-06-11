import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navbar from '../../Shared/Navbar/Navbar';


const AddClass = () => {

    const { classes, setClasses } = useAuth();
    const navigate = useNavigate();
    const [classData, setClassData] = useState({
        image: '',
        className: '',
        instractorName: '',
        email: '',
        availableSeats: '',
        price: '',
        enrolledStudents: '',

        description: '',
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setClassData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                'https://assignment-12-server-lyart.vercel.app/api/classes',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(classData),
                }
            );

            if (response.ok) {
                const newClassData = {
                    image: '',
                    className: '',
                    instractorName: '',
                    email: '',
                    availableSeats: '',
                    price: '',
                    enrolledStudents: '',

                    description: '',
                };

                setClasses([...classes, classData]);
                setClassData(newClassData);

                // Update toyData state with newToyData values
                setClassData(newClassData);

                navigate('/myclasses');
            } else {
                console.error('Error saving the class');
            }
        } catch (error) {
            console.error(error);
        }
    };






    return (
        <div>
            <Navbar />
            <div className="max-w-lg mx-auto">

                <div><h2 className="text-3xl font-bold my-10 bg-[#272030] text-white text-center">Add A Class</h2></div>
                <form onSubmit={handleSubmit} className="space-y-4 shadow-md">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block">
                                Picture URL:
                                <input
                                    type="text"
                                    name="image"
                                    value={classData.image}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Class Name:
                                <input
                                    type="text"
                                    name="className"
                                    value={classData.className}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Instractor Name:
                                <input
                                    type="text"
                                    name="instractorName"
                                    value={classData.instractorName}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Instractor Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={classData.email}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                Available Seats:
                                <input
                                    type="text"
                                    name="availableSeats"
                                    value={classData.availableSeats}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Price:
                                <input
                                    type="text"
                                    name="price"
                                    value={classData.price}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>
                            <label className="block">
                                Enrolled Students:
                                <input
                                    type="text"
                                    name="enrolledStudents"
                                    value={classData.enrolledStudents}
                                    onChange={handleChange}
                                    className="border rounded-md px-2 py-1 w-full"
                                />
                            </label>

                        </div>
                    </div>
                    <label className="block">
                        Details Description:
                        <textarea
                            name="description"
                            value={classData.description}
                            onChange={handleChange}
                            className="border rounded-md px-2 py-1 w-full"
                        />
                    </label>
                    <button type="submit" className="bg-[#9931E1] text-white px-4 py-2 rounded-md">
                        Add Class
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddClass;
