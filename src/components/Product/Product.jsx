import React from 'react';
import { NavLink } from 'react-router-dom';


/* 
    "product_id": "GS3019",
    "product_title": "Classic Leather Smartwatch",
    "product_image":
    "category": "Watches",
    "price": 249.99,
    "description": 
    "specification":
    "availability": true,
    "rating": 4.5,
    "brand": "LuxTime",
    "release_date": "2024-04-05"
 */

const Product = ({ product }) => {
    // console.log(product);
    const { product_id, product_image, product_title, price } = product;
    return (
        <div className="card bg-base-100 p-4 mb:p-5 mb-4 md:mb-0 space-y-3 border border-gray-50">
            <figure className="">
                <img
                    src={product_image}
                    alt="Shoes"
                    className="rounded-lg w-full h-full object-cover" />
            </figure>
            <div className="space-y-3 flex flex-col">
                <h2 className="card-title text-md md:text-lg">{product_title}</h2>
                <div className='flex-grow'>
                    <p className='text-sm md:text-base text-gray-600'>Price: {price}</p>
                </div>
                <div className="card-actions">
                    <NavLink to={`/details/${product_id}`}>
                        <button className="btn btn-sm btn-outline text-purple-600 rounded-full">View Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;