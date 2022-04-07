import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1 className='text-sm font-bold text-center text-fuchsia-600 m-5 lg:text-5xl md:text-3xl'>Wellcome to Appayon Shaalaaaa...!</h1>
            <div className='text-center text-lg font-bold text-white mt-8'>
                <Link className='mx-3 px-4 py-1 rounded-md bg-rose-400 hover:bg-rose-500 transition duration-600' to='meals'>Meals</Link>
                <Link className='mx-3 px-4 py-1 rounded-md bg-rose-400 hover:bg-rose-500 transition duration-600' to='about'>About</Link>
                <Link className='mx-3 px-4 py-1 rounded-md bg-rose-400 hover:bg-rose-500 transition duration-600' to='log-in'>Log In</Link>
            </div>
        </div>
    );
};

export default Header;