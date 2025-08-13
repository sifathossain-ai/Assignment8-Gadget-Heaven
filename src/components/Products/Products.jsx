import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { FaChevronDown } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import './Products.css';
import ErrorPage from '../ErrorPage/ErrorPage';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('/gadget.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setAllProducts(data)
            })
    }, [])

    const handleLink = (category) => {
        const items = allProducts.filter(product => product.category === category);
        (category === 'All') ? setProducts(allProducts) : setProducts(items);
    }

    return (
        <div className='md:flex gap-4'>
            <div>
                <div className="dropdown dropdown-bottom mb-5 md:mb-0">
                    <NavLink to={'/'}>
                        <div tabIndex={0} role="button" className="btn flex items-center gap-2 border none bg-purple-600 rounded-full text-white" onClick={() => handleLink('All')}>Products
                            <FaChevronDown></FaChevronDown>
                        </div>
                    </NavLink>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 md:w-30 lg:w-36 p-1 shadow-sm">
                        <li><NavLink onClick={() => handleLink('Laptops')} to={`/category/${'laptops'}`}>Laptops</NavLink></li>

                        <li><NavLink onClick={() => handleLink('Phone')} to={`/category/${'phone'}`} >Phones</NavLink></li>

                        <li><NavLink onClick={() => handleLink('Accessories')} to={`/category/${'accessories'}`} >Accessories</NavLink></li>

                        <li><NavLink onClick={() => handleLink('Watches')} to={`/category/${'watches'}`} >Watches</NavLink></li>

                        <li><NavLink onClick={() => handleLink('MacBook')} to={`/category/${'macbook'}`}>MacBook</NavLink></li>

                        <li><NavLink onClick={() => handleLink('IPhone')} to={`/category/${'iphone'}`}>IPhone</NavLink></li>

                    </ul>
                </div>
            </div>
            <div className='md:grid grid-cols-3 gap-4'>
                {
                    products.map(product => <Product product={product} key={product.product_id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;