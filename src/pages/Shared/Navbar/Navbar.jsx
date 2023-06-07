import { Link } from 'react-router-dom';
import logo from '../../../assets/images/mindfulness.png';
import avatarImg from '../../../assets/images/avatar.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instractors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
    </>

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
                            {navItems}
                        </ul>
                    </div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <button onClick={handleLogOut} className="btn bg-[#9931E1]">Log Out</button>
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </>
                            : <>
                                <Link to='/login' className="btn bg-[#9931E1] text-white mr-1">Login</Link>
                                <div className="w-10 rounded-full">
                                    <img src={avatarImg} />
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;