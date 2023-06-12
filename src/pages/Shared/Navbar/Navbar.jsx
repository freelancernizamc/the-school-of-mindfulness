import { Link } from 'react-router-dom';
import logo from '../../../assets/images/mindfulness.png';
import avatarImg from '../../../assets/images/avatar.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa';
import useAdmin from '../../../hooks/useAdmin';
import useInstractor from '../../../hooks/useInstractor';
import useStudent from '../../../hooks/useStudent';

const Navbar = () => {
    const { user, logOut, selectedClasses } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstractor] = useInstractor();
    const [isStudent] = useStudent();
    console.log(isAdmin, isInstractor, isStudent);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    const navItems = (
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/instractors'>Instructors</Link></li>
            <li><Link to='/classes'>Classes</Link></li>
            {isAdmin && <li><Link to="/dashboard/adminhome">Dashboard</Link></li>}
            {/* {isStudent && <li><Link to="/dashboard/userhome">Dashboard</Link></li>}
            {isInstractor && <li><Link to="/dashboard/instractorshome">Dashboard</Link></li>} */}

            {/* {isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> :
                <li><Link to="/dashboard/userhome">Dashboard</Link></li>
            } */}

            {isInstractor ?
                <li><Link to="/dashboard/instractorshome">Dashboard</Link></li> :
                <li><Link to="/dashboard/userhome">Dashboard</Link></li>


            }


            <li>
                <Link to='/dashboard/selectedClasses'>
                    <div className="gap-2 flex">
                        <FaShoppingCart />
                        <div className="badge bg-[#9931E1] text-white">+{selectedClasses?.length || 0}</div>
                    </div>
                </Link>
            </li>
        </>
    );



    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <div className="navbar z-10 md:bg-[#272030] bg-opacity-30 text-white">
                <div className="navbar-start">
                    <div className={`dropdown ${menuOpen ? 'open' : ''}`}>
                        <label
                            tabIndex={0}
                            className="btn btn-ghost lg:hidden"
                            onClick={toggleMenu}
                            onKeyDown={e => {
                                if (e.key === 'Enter') {
                                    toggleMenu();
                                }
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        {menuOpen && (
                            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                                {navItems}
                            </ul>
                        )}
                    </div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
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
                                <img src={avatarImg} alt="Default Avatar" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
