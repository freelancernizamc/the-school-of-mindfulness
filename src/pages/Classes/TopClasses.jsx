import { useQuery } from "@tanstack/react-query";

const TopClasses = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['classes'], // Update the query key to match the server-side query
        queryFn: () =>
            fetch('http://localhost:5000/top-classes?limit=6')
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
            {data.map((classes) => (
                <div key={classes._id} className="card w-96 bg-black text-white hover:bg-slate-300 hover:text-black mb-4 shadow-xl">
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
    );
};

export default TopClasses;
