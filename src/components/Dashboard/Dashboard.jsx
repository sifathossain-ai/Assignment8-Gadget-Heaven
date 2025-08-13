import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <div className='bg-violet-600 '>
                <div className='text-center space-y-5 text-white container mx-auto py-10'>
                    <h2 className='text-2xl md:text-4xl font-semibold'>Dashboard</h2>
                    <p>Explore the latest gadgets that will take your experience to the next level. From <br />smart devices.</p>
                    <div className=''>
                        <button className='border-none shadow-none btn btn-sm mr-3 px-5 rounded-full text-violet-700'>Cart</button>
                        <button className='btn shadow-none bg-violet-600 text-white btn-sm px-4 rounded-full'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-12 px-2'>
                <div className='flex items-center gap-2 md:gap-4 text-sm'>
                    <h2 className='flex-1 md:text-base font-bold'>Cart</h2>
                    <h2 className='md:text-base font-bold'>Cost: </h2>
                    <button className='btn btn-sm md:text-base font-normal rounded-full border-violet-700 text-violet-600'>Sort

                    </button>
                    <button className='btn btn-sm md:text-base font-normal rounded-full border-none bg-violet-600 text-white'>Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;