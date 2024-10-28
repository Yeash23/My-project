import React from 'react';
import { Link } from 'react-router-dom';

const Last = () => {
    return (
        <div className='text-center text-blue-700  text-5xl'>
            <h1> Thanks You For Your Verifection </h1>
            <Link to="/" className='mt-6'>
            <button className='bg-black text-white px-9 py-4 mt-9 '>
          Go Back 
                </button>
            </Link>
        </div>
    );
};

export default Last;