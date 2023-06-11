// import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProviders";
import { FaHome, FaHouseUser, FaMale, FaShoppingCart } from "react-icons/fa";
import logo from '../../../assets/images/mindfulness.png';
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const UserHome = () => {
    const { user, logOut } = useAuth();
    const cart = useCart();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error))
    };

    return (
        <div>

            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
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
                        <div className="mt-4">
                            <li><NavLink to="/dashboard/usershome"><FaHome /> Student Home</NavLink></li>
                            <li><NavLink to='/dashboard/selectedclasses'><FaShoppingCart /> My Selected Classes</NavLink></li>
                            <div className="badge bg-[#9931E1] text-white">+{cart?.length || 0}</div>

                            <li><NavLink to="/dashboard/enrolledclasses"><FaHouseUser /> My Enrolled Classes</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/instractors"><FaMale />Our Instructors</NavLink></li>
                            <li><NavLink to='/classes'><FaHouseUser />Our Classes</NavLink></li>
                        </div>
                        <li className="mt-40"> <NavLink onClick={handleLogOut}>Log Out</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserHome;
