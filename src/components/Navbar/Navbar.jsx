import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import './Navbar.css';

const Navbar = () => {
    const Links = <>
        <li className='mb-1 md:mr-2 text-gray-600'><NavLink to={'/'}>Home</NavLink></li>
        <li className='mb-1 md:mr-2  text-gray-600'><NavLink to={'/statistics'}>Statistics</NavLink></li>
        <li className='mb-1  text-gray-600'><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 my-7 md:my-10 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="md:h-5 md:w-5 w-4 h-4 border-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg md:text-xl font-semibold">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex justify-center items-center gap-2'>
                    <div className='border p-2 rounded-full'>
                        <HiOutlineShoppingCart className='md:w-5 md:h-5'></HiOutlineShoppingCart>
                    </div>
                    <div className='border p-2 rounded-full'>
                        <FaRegHeart className='md:w-5 md:h-5'></FaRegHeart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;