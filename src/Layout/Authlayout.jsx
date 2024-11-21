import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Authlayout = () => {
    return (
        <div>
         <header className='w-11/12 mx-auto'> 
    
      <Navbar></Navbar>
        
    
         </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;