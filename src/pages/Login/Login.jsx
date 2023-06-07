import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet-async";
import login from '../../assets/images/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const { createUser, updateUserProfile, signInWithGoogle, setLoading } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <Helmet>
                <title>The School of Mindfulness | Sign Up</title>

            </Helmet>
            <div className='bg-base-200'>
                <h1 className="text-5xl font-bold text-center mt-10">Login Please!</h1>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">

                            <img src={login} alt="" />
                        </div>
                        <div className="card flex md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className='text-rose-700'>Your email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-rose-700">Password is required</p>}

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Login" className="btn bg-[#972BE1] text-white" />
                                </div>
                            </form>
                            <p className='text-center mb-2'><small>New to Mindfulness School? <Link to='/signup' className='text-orange-700 font-semibold'>Sign Up</Link></small></p>
                            <div className="divider">OR</div>
                            {/* <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;