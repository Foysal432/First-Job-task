import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";

const Login = () => {
    return(
        <div>
            <div className="text-center bg-[#F5F1EE] py-5">
                <p className="text-4xl font-bold "> Log In Your Account</p>
                <Link to={'/'}>
                    <div className="flex justify-center items-center text-yellow-400">
                        <GrFormPreviousLink />
                        <button> Home</button>
                    </div>
                </Link>
            </div>
            {/* login */}
            <div>
                <div className=" w-4/5 mx-auto">
                    <div className="">
                        <div className="shadow-2xl ">
                            <form  className="card-body">
                                <div className="form-control">
                                    <p className="text-2xl font-bold">Login</p>
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-yellow-400">Login</button>
                                </div>
                            </form>
                        <div className="text-center py-5 pt-0">
                        <p className="text-center my-4">Or Log in with</p>
                            <div>
                                <button  className="btn w-full bg-yellow-400">Google</button>
                            </div>
                        </div>
                        <p className="p-4">Don't have an account yet? <Link className="text-yellow-400" to={'/register'}>Register</Link> for free</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
export default Login;