import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const InstractorDetails = () => {
    const { _id } = useParams();
    const [instructor, setInstructor] = useState(null);

    useEffect(() => {
        fetch(`https://assignment-12-server-lyart.vercel.app/users/instractor/${_id}`)
            .then((res) => res.json())
            .then((data) => setInstructor(data))
            .catch((error) => console.error(error));
    }, [_id]);


    if (!instructor) {
        return <div>Loading...</div>;
    }

    const { name, image, email, takenClasses, nameOfTakenClasses, classDetails } = instructor;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero min-h-screen bg-[#272030] text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image} className="max-w-sm rounded-full shadow-2xl" />
                        <div className="mr-20">
                            <h1 className="text-5xl font-bold mb-4">{name}</h1>
                            <p>Email: {email}</p>
                            <p className="my-2">Number of Taken Classes: {takenClasses}</p>
                            <button className="btn bg-[#9931E1] text-white hover:bg-[#272030]">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="text-5xl text-center my-10 font-bold">See My Classes</h2>

            <h2 className="text-3xl text-center my-10">Taken Classes</h2>
            <div className="grid grid-cols-2 bg-[#b6b1bd]">
                {nameOfTakenClasses.map((className, index) => (
                    <div key={index} className="card card-compact w-96 bg-[#272030] text-white shadow-xl m-4 text-center">
                        <img className="w-[300px] h-[300px] ml-5 mt-2" src={classDetails[index].image} alt="class" />
                        <div className="card-body text-left">
                            <h2 className="card-title">{className}</h2>
                            <p>Description: {classDetails[index].description}</p>
                            <p>Available Seats: {classDetails[index].availableSeats}</p>
                            <p>Price: {classDetails[index].price}</p>
                            <Link to='/dashboard/payment'><button className="btn bg-[#9931E1] text-white">Enroll Now</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstractorDetails;
