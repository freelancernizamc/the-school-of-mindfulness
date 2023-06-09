import { Link } from 'react-router-dom';
import logo from '../../../assets/images/mindfulness.png';
import avatarImg from '../../../assets/images/avatar.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut, isAdmin, classes } = useContext(AuthContext);

    const renderDashboardLink = () => {
        if (isAdmin) {
            return <li><Link to="/dashboard/adminhome">Dashboard</Link></li>;
        } else if (user) {
            return <li><Link to="/dashboard/userhome">Dashboard</Link></li>;
        } else {
            return <li><Link to="/dashboard/instractorshome">Dashboard</Link></li>;
        }
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/instractors'>Instructors</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                            {renderDashboardLink()}
                            <li>
                                <Link to='/dashboard/mycart'>
                                    <div className=" gap-2 flex">
                                        <FaShoppingCart />
                                        <div className="badge bg-[#9931E1] text-white">+{classes?.length || 0}</div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instractors'>Instructors</Link></li>
                        <li><Link to='/classes'>Classes</Link></li>
                        {renderDashboardLink()}
                        <li>
                            <Link to='/dashboard/mycart'>
                                <div className=" gap-2 flex">
                                    <FaShoppingCart />
                                    <div className="badge bg-[#9931E1] text-white">+{classes?.length || 0}</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (
                            <>
                                <button onClick={handleLogOut} className="btn bg-[#9931E1] text-white">Log Out</button>
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="User Avatar" />
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to='/login' className="btn bg-[#9931E1] text-white mr-1">Login</Link>
                                <div className="w-10 rounded-full">
                                    <img src={avatarImg} alt="Avatar" />
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
