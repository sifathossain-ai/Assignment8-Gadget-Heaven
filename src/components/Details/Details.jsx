import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";

const Details = () => {
    const { product_id } = useParams();
    // console.log(params);
    const details = useLoaderData();
    // console.log(details);
    const findData = details.find(p => p.product_id === product_id);
    // console.log(findData);
    const { product_image, product_title, price, availability, description, specification, rating } = findData;

    /* 
    "product_id": "GS3024",
    "product_title": "MacBook Pro M3 Max",
    "product_image": 
    "category": "MacBook",
    "price": 3299.99,
    "description": 
    "specification": ["Apple M3 Max", "32GB RAM", "1TB SSD", "Liquid Retina XDR"],
    "availability": true,
    "rating": 5.0,
    "brand": "Apple",
    "release_date": "2025-02-05"
     */

    return (
        <div className='mb-[450px] md:mb-96'>
            <div className='text-center space-y-10 bg-violet-500 text-white h-[400px] md:h-[463px] py-7 px-2 md:py-10'>
                <div className='space-y-4'>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Product Details</h2>
                    <p>Explore the latest gadgets that will take your experience to the next level. From <br />smart devices</p>
                </div>
                <div className='container h-[567px] bg-white border border-gray-50 mx-auto rounded-xl md:flex gap-6 items-center p-5 md:p-7'>
                    <div className='md:w-5/12'>
                        <img className='rounded-xl md:h-[510px] object-cover' src={product_image} alt="" />
                    </div>
                    <div className='text-black text-start pt-3 md:pt-0 space-y-2 md:space-y-5'>
                        <h2 className='text-lg md:text-3xl font-semibold'>{product_title}</h2>
                        <p className='text-sm md:text-base font-semibold'>Price: {price}</p>
                        <button className={`btn btn-xs rounded-full ${availability ? 'bg-green-100 text-green-600 border-green-700' : 'bg-red-200 text-red-600 border-red-700'}`}>
                            {
                                availability ? 'InStock' : 'Out Stock'
                            }
                        </button>
                        <p className='text-sm md:text-base text-gray-600'>{description}</p>
                        <div className='text-[12px] md:text-base'>
                            <p className='text-sm md:text-base font-semibold mb-1'>Specification:</p>
                            {
                                specification.map((sp, idx) => <p className='text-gray-600 md:my-2' key={idx}>{sp}</p>)
                            }
                        </div>
                        <div className='font-semibold flex items-center gap-2 text-sm md:text-base'>
                            <p>Rating: {rating}</p>
                            <FaRegStar></FaRegStar>
                        </div>
                        <div className='flex items-center gap-4'>
                            <button className='btn btn-sm rounded-full bg-violet-500 text-white border-none'> Add To Cart <GrCart className='h-3.5 w-3.5'></GrCart></button>
                            <div className='border p-2 rounded-full'><FaRegHeart></FaRegHeart></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;