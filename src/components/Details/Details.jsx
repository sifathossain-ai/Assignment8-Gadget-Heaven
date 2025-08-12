import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { product_id } = useParams();
    // console.log(params);
    const details = useLoaderData();
    // console.log(details);
    const findData = details.find(p => p.product_id === product_id);
    console.log(findData);

    return (
        <div className=''>
            <div className='text-center space-y-2 bg-violet-500 text-white h-[400px] md:h-[463px] py-7 px-2 md:py-10'>
                <h2 className='text-2xl md:text-4xl font-semibold'>Product Details</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />the coolest accessories, we have it all!</p>
            </div>
        </div>
    );
};

export default Details;