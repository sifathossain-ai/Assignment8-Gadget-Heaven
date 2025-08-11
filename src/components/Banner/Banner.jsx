import React from 'react';
import img from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto text-center text-white flex flex-col gap-8 px-4 py-12 md:py-28'>
            <h2 className='text-4xl md:text-5xl font-bold'>Upgrade Your Tech Accessorize <br />with Gadget.</h2>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices!</p>
            <div><button className='btn shadow-none rounded-full'>Shop Now</button></div>
            <div className='border p-3 md:p-5 rounded-2xl mb-60'>
                <img className='w-full h-full rounded-2xl' src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;