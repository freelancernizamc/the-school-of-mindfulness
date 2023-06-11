import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InstractorDetails = () => {
    const { _id, instructors } = useParams();
    const [instructor, setInstructor] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/instractors/${_id}`)
            .then(res => res.json())
            .then(data => setInstructor(data))
            .catch(error => console.error(error))
    }, [_id]);

    if (!instructor) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <h2 className="text-5xl text-center my-10">See Our Latest Recipe</h2>
            <div className="grid grid-cols-3">
                {instructors.map((instructor, index) => (
                    <div key={index} className="card card-compact w-96 bg-base-100 shadow-xl m-4 text-center">
                        <img className="w-[200px] ml-5" src={instructor.image} alt="instructor" />
                        <div className="card-body text-left">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>Description: {instructor.description}</p>
                            <p>Number of Taken Classes: {instructor.availableSeats}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InstractorDetails;
