import { Helmet } from "react-helmet-async";
import ClassesBanner from "./ClassesBanner";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const Classes = () => {
    const { isLoading, error, isError, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('http://localhost:5000/classes').then(
                (res) => res.json(),
            ),
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div>
            <Helmet>
                <title>The School of Mindfulness | Classes</title>

            </Helmet>
            <ClassesBanner />
            <SectionTitle
                subHeading="---The School of Mindfulness"
                heading="Our All Classes"
            ></SectionTitle>

            <div className="grid grid-cols-3 gap-4">
                {data.map((classes) => (
                    <div key={classes._id} className="card w-96 bg-black text-white hover:bg-slate-100 hover:text-black mb-4 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={classes.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{classes.name}</h2>
                            <p>Instractor Name: {classes.instructorName}</p>
                            <p>Available Seats: {classes.availableSeats}</p>
                            <p>Price: ${classes.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Enroll Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;