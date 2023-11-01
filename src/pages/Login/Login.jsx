import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";




const Login = () => {

  const { userSignIn } = useContext(AuthContext)
  const location = useLocation();
  console.log(location);
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSignIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // navigate(location?.state ? location.state : '/' )
     
    })
    .catch(error => {
      console.log(error.massage);
    })
  }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem <br /> quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
               <input className="bg-orange-400 py-2 text-white font-bold rounded-lg" type="submit" value="Login" />
              </div>
              <p className="text-center"><small>New to user please <Link to={'/register'} className="font-bold text-blue-400">Register</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;