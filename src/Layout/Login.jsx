import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Login = () => {
  const {userlogin,setUser} = useContext(Authcontext)
  const handleSubmit =(e)=>{
e.preventDefault();
const from = e.target;
const email = from.email.value;
const password = from.password.value;
//console.log({email,password})
userlogin(email,password)
.then(result =>{
  const User = result.user;
  setUser(User);
  

})
.catch((error) => {
  alert(error.code);
 });


  }
    return (
        <div className='min-h-screen flex justify-center items-center'>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-2xl font-bold'>Login your Accout</h2>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
          name ='email'
          type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name ='password' type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p >register yout account 
  <Link className=' text-blue-600' to ='/auth/register'> register</Link>
</p>
    </div>
        </div>
    );
};

export default Login;