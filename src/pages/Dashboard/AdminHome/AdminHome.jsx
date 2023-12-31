// import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProviders";
import logo from '../../../assets/images/mindfulness.png';
import { FaHome, FaHouseUser, FaMale, FaUser } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log(isAdmin, isAdminLoading, axiosSecure);



    const handleLogOut = () => {

        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Helmet>
                <title>The School of Mindfulness | Admin Home</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-[#272030] text-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="mt-1 pl-8 ml-20"><img className='h-[30px] my-2' src={logo} alt="logo" /></div>
                    <ul className="menu p-4 w-80 ">
                        <div>

                            <div className='flex flex-col items-center mt-0 -mx-2 '>
                                <Link to='/dashboard'>
                                    <img
                                        className='object-cover w-20 h-20 mx-2 rounded-full'
                                        src={user?.photoURL}
                                        alt='avatar'
                                        referrerPolicy='no-referrer'
                                    />
                                </Link>
                                <Link to='/dashboard'>
                                    <h4 className='mx-2 mt-1 font-medium  hover:underline text-white'>
                                        {user?.displayName}
                                    </h4>
                                </Link>
                                <Link to='/dashboard'>
                                    <p className='mx-2 mt-1 text-sm font-medium text-gray-300  hover:underline'>
                                        {user?.email}
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUser /> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageclasses"><FaHouseUser /> Manage Classes</NavLink></li>


                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/instractors"><FaMale />Our Instractors</NavLink></li>
                            <li><NavLink to='/classes'><FaHouseUser />Our Classes</NavLink></li>
                        </>
                        <li className="mt-40"> <NavLink onClick={handleLogOut}>Log Out</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
