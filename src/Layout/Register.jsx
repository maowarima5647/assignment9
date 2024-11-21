import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';

const Register = () => {

  const{creatNewUser,setUser,updateuser} = useContext(Authcontext)
  const  navigate = useNavigate()
  const handlesubmit = (e) => {
    e.preventDefault();
    //get form data
    const form = new FormData(e.target);
    const name = form.get('name');
    const photo= form.get('photo');
    const email = form.get('email');
    const password = form.get('password');



   // console.log({name,photo,email,password});
    
    creatNewUser(email,password)
    .then(result => {
      
      const user = result.user;
      setUser(user)
      updateuser({displayName:name ,photoURL:photo})
      .then(() =>{
        navigate("/")
      }).catch(err =>{
       // console.log(err)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     // console.log(errorCode,errorMessage)
    });


  }
  return (
    <div className='min-h-screen flex justify-center items-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
     
      <h2 className='text-2xl font-bold'>Register your Accout</h2>
<form onSubmit={handlesubmit} className="card-body">


<div className="form-control">
<label className="label">
  <span className="label-text">Name</span>
     </label>
<input name = 'name' type="text" placeholder="name" className="input input-bordered" required />
</div>
<div className="form-control">
<label className="label">
  <span className="label-text">photo url</span>
     </label>
<input name ='photo' type="text" placeholder="photo url" className="input input-bordered" required />
</div>




<div className="form-control">
<label className="label">
  <span className="label-text">Email</span>
     </label>
<input name ='email' type="email" placeholder="email" className="input input-bordered" required />
</div>


<div className="form-control">
<label className="label">
  <span className="label-text">Password</span>
</label>
<input name='password'  type="password" placeholder="password" className="input input-bordered" required />
<label className="label">
  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
</label>
</div>
<div className="form-control mt-6">
<button className="btn btn-primary">Register</button>
</div>
</form>

<p>Already have an account ?{''}
  <Link to ='/auth/login'>Login</Link>
</p>
</div>
</div>
  );
};

export default Register;