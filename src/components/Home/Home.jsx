import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import { useParams } from 'react-router-dom';

const Home = () => {
    // console.log(category);
    return (
        <div>
            <div className='h-[620px] md:h-[1000px] lg:h-[1450px]'>
                <div className='border rounded-2xl lg:mx-10 h-[470px] md:h-[694px] bg-violet-500'>
                    <Banner></Banner>
                </div>
            </div>
            <div className='my-20 md:my-24 container mx-auto px-2'>
                <h2 className='text-xl md:text-3xl font-semibold text-center'>Explore Cutting-Edge Gadgets</h2>
                <div className='my-8 md:my-12'>
                    <Products></Products>
                </div>
            </div>
        </div>
    );
};

export default Home;