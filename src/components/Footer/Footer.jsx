import React from 'react';

const Footer = () => {
    return (
        <div className='text-black my-20'>
            <div className='text-center space-y-2 px-2'>
                <h2 className='text-lg md:text-2xl font-bold'>Gadget Heaven</h2>
                <div>
                    <small className='text-gray-500'>Leading the way in cutting-edge technology and innovation.</small>
                </div>
            </div>
            <div className="divider container px-2 mx-auto py-8"></div>
            <footer className="container mx-auto space-y-8 md:space-y-0 md:flex justify-evenly text-gray-500 text-sm">
                <nav>
                    <div className='flex flex-col text-center gap-2'>
                        <h6 className="text-base md:text-lg font-bold text-black">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                </nav>
                <nav>
                    <div className='flex flex-col text-center gap-2'>
                        <h6 className="text-base md:text-lg font-bold text-black">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                </nav>
                <nav>
                    <div className='flex flex-col text-center gap-2'>
                        <h6 className="text-base md:text-lg font-bold text-black">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;