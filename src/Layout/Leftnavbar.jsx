import React, { useEffect, useState } from 'react';

const Leftnavbar = () => {
    const [categories,setCategory] = useState([]);
    useEffect(() =>{
        fetch('./public/brand.json')
        .then((res) => res.json())
        .then((data) => setCategory(data.data.brand_category));
    },[])
    return (
        <div>
         <h2 className="font-bold text-xxl">All category
           
         </h2>
         <div className='flex flex-col gap-4 pt-5 py-7'>
                {
                    categories.map((category) => (<button className='btn' key ={category.brand_id}>
                        {category.brand_name}
                    </button>))
                }
            </div>
        </div>
    );
};

export default Leftnavbar;