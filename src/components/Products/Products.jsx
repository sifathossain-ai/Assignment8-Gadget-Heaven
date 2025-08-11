import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('gadget.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='md:flex gap-4'>
            <div>
                <div className="dropdown dropdown-bottom mb-3 md:mb-0">
                    <div tabIndex={0} role="button" className="btn flex items-center gap-2 border none bg-purple-600 rounded-full text-white">Products
                        <FaChevronDown></FaChevronDown>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-1 shadow-sm">
                        <li><NavLink>Laptops</NavLink></li>
                        <li><NavLink>Phones</NavLink></li>
                        <li><NavLink>Accessories</NavLink></li>
                        <li><NavLink>Watches</NavLink></li>
                        <li><NavLink>MacBook</NavLink></li>
                        <li><NavLink>IPhone</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className='md:grid grid-cols-3 gap-3'>
                {
                    products.map(product => <Product product={product} key={product.product_id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;