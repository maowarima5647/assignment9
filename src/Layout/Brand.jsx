import React, { useState, useEffect } from 'react';

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);

  // Fetch brands data
  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        // Fetching the local JSON data (or from an API if necessary)
        const response = await fetch('./public/brand.json');
        const data = await response.json();
        setBrands(data);  // Storing the fetched data in the state
      } catch (error) {
        console.error('Error fetching brand data:', error);
      }
    };

    fetchBrandsData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Top Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {brands.map(brand => (
          <div key={brand._id} className="bg-white rounded-lg shadow-lg p-6">
            <img src={brand.brand_logo} alt={brand.brand_name} className="w-full h-32 object-contain mb-4" />
            <h3 className="text-xl font-semibold mb-2">{brand.brand_name}</h3>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg">{'★'.repeat(brand.rating)}</span>
              <span className="ml-2 text-gray-600">({brand.rating})</span>
            </div>
            <p className="text-gray-700 mb-4">{brand.description}</p>
            <div className="space-y-4 mb-4">
              <h4 className="font-semibold text-lg">Coupons:</h4>
              {brand.coupons.map((coupon, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                  <p><strong>Code:</strong> {coupon["coupon-code"]}</p>
                  <p>{coupon.description}</p>
                  <p><strong>Expires:</strong> {coupon["expiry-date"]}</p>
                  <p><strong>Condition:</strong> {coupon.condition}</p>
                </div>
              ))}
            </div>
            {brand.isSaleOn && (
              <div className="bg-red-600 text-white text-center py-2 rounded-lg mb-4">
                <strong>SALE ON</strong>
              </div>
            )}
            <a 
              href={brand.shop_Link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg inline-block w-full text-center"
            >
              Visit Shop
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;
