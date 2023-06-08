import { useQuery } from "@tanstack/react-query";

const TopInstructor = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['instructors'], // Update the query key to match the server-side query
        queryFn: () =>
            fetch('http://localhost:5000/top-instractors?limit=6') // Add a limit parameter to fetch only 6 instructors
                .then((res) => res.json()),
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="grid grid-cols-3 gap-4">
            {data.map((instructor) => (
                <div key={instructor._id} className="card w-96 bg-black text-white hover:bg-slate-300 hover:text-black shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                        <p>No of Taken Classes: {instructor.takenClasses}</p>
                        <p>Name of Classes: {instructor.nameOfTakenClasses}</p>
                        <div className="card-actions">
                            <button className="btn bg-[#9931E1] text-white">See Classes</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopInstructor;
