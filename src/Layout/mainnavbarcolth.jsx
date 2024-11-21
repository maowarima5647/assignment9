import React from 'react';
import { Link } from 'react-router-dom';

const Maincolth = ({colth}) => {
    const {_id,brand_name ,brand_logo,description,coupons,rating} = colth;
    return (
       
      <Link to ={`colth/${_id}`}>
       
       <div>
           <div className="card bg-base-100 w-93 h-full shadow-xl p-6">
  <figure className='bg-gray-200 py-8 rounded-xl'>
    <img className='h-[166px]'
      src={brand_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   
   {
      // coupons.map(coupon => <button className="btn btn-active btn-ghost">{coupon.description}</button> )
   }
    <h2 className="card-title">
      <p>{brand_name}</p>
    
    </h2>
    <p>{description}</p>
    <div className='divider'></div>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge ">
        
      <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2" />
</div>
        {rating}</div>
    </div>
  </div>
</div>
        </div>
        </Link> 
    );
};

export default Maincolth;