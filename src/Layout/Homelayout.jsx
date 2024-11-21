import React from 'react';
import Navbar from './Navbar';
import Leftnavbar from './Leftnavbar';
import Carusel from './Carusel';
import Latestnews from './Latestnews';
import Footer from './Footer';
import BrandsPage from './Brand';
import Mainnavbar from './Mainnavbar';

const HomeLayout = () => {
    return (
        <div>
      <section className='w-11/12'> 
      <Navbar></Navbar>
        
        </section> 

           <section className='pt-7'> 
            <Carusel></Carusel>
           </section>
          <section>
            <Latestnews></Latestnews>
          </section>
        <section className='w-11/12 mx-auto mb-5'>
             
            <div>

          <Mainnavbar></Mainnavbar>
             </div>
        </section>
        <section>
          <Footer></Footer>
        </section>
        </div>
    );
};

export default HomeLayout;