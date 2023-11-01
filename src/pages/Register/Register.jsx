import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";


const Register = () => {

  const { createUser} = useContext(AuthContext)

  const hangleRegister = (e) => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error.massage);
    })

  }


    return (
        <div className="hero pb-16 bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center my-6">
            <h1 className="text-5xl font-bold">Register  now!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={hangleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" placeholder="name" name="name" className="input input-bordered" required />
              </div>
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
              <input className="bg-blue-400 py-2 text-white font-bold rounded-lg" type="submit" value="Register" />
              </div>
              <p className="text-center"><small>Already have accout please <Link to={'/login'} className="font-bold text-blue-400">Login</Link></small></p>
            </form>
          </div>
         
        </div>
      </div>
    );
};

export default Register;