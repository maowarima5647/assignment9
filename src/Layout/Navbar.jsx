import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../provider/Authprovider';
const Navbar = () => {
  const {user, logout} = useContext(Authcontext)
    return (
        <div className='flex justify-between items-center border-b'>
      <div> 
        <img src="https://img.icons8.com/?size=50&id=R1cMoto4PGK8&format=png" alt="" /> 
        { user && user.name}</div>
      <div className='nav space-x-4'> 
     <Link to= '/'>Home </Link>
     <Link to = '/brands'>Brands</Link>
      </div>
      <div className='login flex gap-3'>

        {
          user && user?.email ? <div>
            <img className='w-10 rounded-full' src={user ?.photoURL} alt="" />
            <p>{user.displayName}</p>
          </div>
           : <img className='w-12 bg-blue-200 rounded-full ' src="https://image.shutterstock.com/image-vector/profile-user-avatar-minus-search-260nw-2393607617.jpg" alt="" />
        }
        
       {
        user && user ?.email ? <button onClick={ logout}
         className='btn'>Logout</button> 
        : <Link to ='/auth/login'
        className="btn ">login</Link>
       }
       
         </div>
        </div>
    );
};

export default Navbar;