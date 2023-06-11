// import useAuth from "../../../hooks/useAuth";
import Navbar from "../../Shared/Navbar/Navbar";


const MyEnrolledClasses = () => {
    // const classData = useAuth();
    return (
        <div>
            <Navbar />
            {/* {classData.length > 0 ? ( */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Class Name</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Instructor Name</th>
                        <th className="px-4 py-2">Available Seats</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Enrolled Students</th>
                        <th className="px-4 py-2">Status</th>

                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            {/* ) : (
                <div>Loading...</div>
            )} */}
        </div>
    );
};

export default MyEnrolledClasses;