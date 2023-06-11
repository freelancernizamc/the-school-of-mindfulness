
import { FaHome, FaHouseUser, FaMale, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

import useCart from "../hooks/useCart";
import logo from '../assets/images/mindfulness.png';
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
// import useInstractor from "../hooks/useInstractor";

const Dashboard = () => {

    const [cart] = useCart();
    const { user, logOut } = useAuth();
    const navigate = useNavigate();
    const [isActive] = useState('false')
    // TODO: load data from the server to have dynamic isAdmin based on this page
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const [isInstractor] = useInstractor();
    console.log(isAdmin);
    // console.log(isInstractor);



    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error))
    }
    return (
        <div className={`drawer ${isActive ? "drawer-mobile" : ""}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {isActive && (
                    <Outlet />
                )}


            </div>
            <div className="drawer-side bg-[#650305fb] text-white">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <div className="mt-1 pl-5"><img className='h-[30px]' src={logo} alt="logo" /></div>
                <ul className="menu p-4 w-80 text-white">
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

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome /> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUser /> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageclasses"><FaHouseUser /> Manage Classes</NavLink></li>


                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/instractors"><FaMale />Our Instractors</NavLink></li>
                            <li><NavLink to='/classes'><FaHouseUser />Our Classes</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/usershome"><FaHome /> Student Home</NavLink></li>
                            <li><NavLink to="/dashboard/selectedclasses"><FaShoppingCart /> My Selected Classes</NavLink></li>

                            <div className="badge badge-secondary">+{cart?.length || 0}</div>
                            <div className="divider"></div>
                            <li><NavLink to="/dashboard/enrolledclasses"><FaHouseUser /> My Enrolled Classes</NavLink></li>
                            <div className="divider"></div>
                            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                            <li><NavLink to="/instractors"><FaMale />Our Instructors</NavLink></li>
                            <li><NavLink to='/classes'><FaHouseUser />Our Classes</NavLink></li>


                        </>

                    }

                    <li> <NavLink onClick={handleLogOut} >Log Out</NavLink></li>
                </ul>

            </div>
        </div>
    )
}

export default Dashboard;