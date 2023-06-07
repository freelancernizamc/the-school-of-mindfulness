import { Helmet } from "react-helmet-async";
import InstractorBanner from "./InstractorBanner";

// import axios from 'axios';
import { useQuery } from "@tanstack/react-query";


const Instractors = () => {
    const { isLoading, error, isError, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/instractors').then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    // async function fetchInstructors() {
    //     const response = await axios.get('/instractors');
    //     return response.data;
    // }

    return (
        <div>
            <Helmet>
                <title>The School of Mindfulness | Instractors</title>

            </Helmet>
            <InstractorBanner />

            <div className="grid grid-cols-3 gap-4">
                {data.map((instructor) => (
                    <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>{instructor.email}</p>
                            <p>No of Taken Classes: {instructor.takenClasses}</p>
                            <p>Name of Classes: {instructor.nameOfTakenClasses}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">See Classes</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default Instractors;