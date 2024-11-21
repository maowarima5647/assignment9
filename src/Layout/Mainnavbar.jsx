import React, { useEffect, useState } from 'react';
import Maincolth from './mainnavbarcolth';

const Mainnavbar = () => {
    const [colths,setColth] = useState([])
    useEffect(()=>{
        fetch('./public/colth.json')
        .then(res =>res.json())
        .then(data=> setColth(data))
    },[])
    return (
        <div>
            <h2 className="text-center text-2xl font-bold py-9">Innovative Platforms for Modern Web Development and Design</h2>
            <p className="text-center text-xl">Teactgar, Stylehub, and Feshmar offer powerful tools for React development,
                 customizable design resources, and scalable e-commerce solutions for businesses.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                colths.map(colth =><Maincolth colth ={colth} key={colth._id}></Maincolth>)
            }
          </div>
        </div>
    );
};

export default Mainnavbar;