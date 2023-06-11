

import { useForm } from 'react-hook-form';
import login from '../../assets/images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';


const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, signInWithGoogle, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('User profile info updated')
                        const saveUser = { name: data.name, email: data.email, photoURL: data.photoURL, role: 'student' }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })

                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'You Successfully Sign Up',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                            .catch(error => console.log(error));
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    };


    // Handle Google signIn
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            const saveUser = { name: result.user.displayName, email: result.user.email, photoURL: result.user.photoURL }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })

            console.log(result.user)
            navigate(from, { replace: true });
        })
            .catch(err => {
                setLoading(false);
                console.log(err.message)
                toast.error(err.message)
            })
    }

    return (
        <>
            <Helmet>
                <title>The School of Mindfulness | Sign Up</title>

            </Helmet>
            <div className='bg-base-200'>
                <h1 className="text-5xl font-bold text-center mt-10">Sign Up now!</h1>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left md:w-1/2">

                            <img className='h-[800px]' src={login} alt="" />
                        </div>
                        <div className="card flex md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                    {errors.name && <span className='text-rose-700'>Your Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="url" {...register("photoURL", { required: true })} placeholder="Your Photo Url" className="input input-bordered" />
                                    {errors.photoURL && <span className='text-rose-700'>Your Photo Url is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Gender</span>
                                    </label>
                                    <select {...register("gender")} className='input input-bordered'>
                                        <option value="female">female</option>
                                        <option value="male">male</option>
                                        <option value="other">other</option>
                                    </select>
                                </div>
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
                                    {errors.password?.type === 'minLength' && <p className="text-rose-700">Password Must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-rose-700">Password Must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-rose-700">Password Must be at least one number and one special characters</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                    })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-rose-700">Confirm your Password!</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-rose-700">Password Must be match</p>}

                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Sign Up" className="btn bg-[#972BE1] text-white" />
                                </div>
                            </form>
                            <p className='text-center mb-2'><small>Have an Account? <Link to='/login' className='text-orange-700 font-semibold'>Please Login</Link></small></p>
                            <div className="divider">OR</div>
                            <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
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

export default SignUp;