
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import login from '../../assets/images/login.png';



const Login = () => {
    const { signInWithGoogle, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const from = location.state?.from?.pathname || '/';

    const handleFormSubmit = (data) => {
        const { email, password } = data;
        console.log(data);
        // Handle your regular form submission logic here
        signIn(email, password)
            .then((userCredential) => {
                // Handle successful sign-in
                console.log(userCredential.user);
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You have successfully logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch((error) => {
                // Handle sign-in error
                console.log(error.message);
                toast.error(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch((err) => {
                console.log(err.message);
                toast.error(err.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>The School of Mindfulness | Login</title>
            </Helmet>
            <div className="bg-base-200">
                <h1 className="text-5xl font-bold text-center mt-10">Login Please!</h1>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">
                            <img src={login} alt="" />
                        </div>
                        <div className="card flex md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(handleFormSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...register('email', { required: true })}
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                    />
                                    {errors.email && <span className="text-rose-700">Your email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        {...register('password', { required: true })}
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                    />
                                    {errors.password && <p className="text-rose-700">Password is required</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn bg-[#972BE1] text-white" />
                                </div>
                            </form>
                            <p className="text-center mb-2">
                                <small>
                                    New to Mindfulness School? <Link to="/signup" className="text-orange-700 font-semibold">Sign Up</Link>
                                </small>
                            </p>
                            <div className="divider">OR</div>
                            <div
                                onClick={handleGoogleSignIn}
                                className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
                            >
                                <FcGoogle size={32} />
                                <p>Continue with Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
