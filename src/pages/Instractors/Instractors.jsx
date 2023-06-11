import { Helmet } from "react-helmet-async";
import InstractorBanner from "./InstractorBanner";

// import axios from 'axios';
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";


const Instractors = () => {
    const { isLoading, error, isError, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://assignment-12-server-lyart.vercel.app/instractors').then(
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
            <SectionTitle
                subHeading="---The School of Mindfulness"
                heading="Our All Instractors"
            ></SectionTitle>

            <div className="grid md:grid-cols-3 gap-4">
                {data.map((instructors) => (
                    <div key={instructors._id} className="card w-96 bg-[#272030] text-white hover:bg-slate-300 hover:text-black mb-4 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={instructors.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{instructors.name}</h2>
                            <p>{instructors.email}</p>
                            <p>No of Taken Classes: {instructors.takenClasses}</p>
                            <p>Name of Classes: {instructors.nameOfTakenClasses}</p>
                            <div className="card-actions">
                                <Link to={`/instractor/${instructors._id}`}><button className="btn bg-[#9931E1] text-white hover:bg-[#272030]">See Classes</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default Instractors;