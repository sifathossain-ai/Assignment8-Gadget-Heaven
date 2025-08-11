import React from 'react';


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

const Product = ({product}) => {
    console.log(product);
    const {product_image} = product;
    return (
        <div>
            <img src={product_image} alt="" />
        </div>
    );
};

export default Product;