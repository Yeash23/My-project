import React from 'react';
import image from '../assets/images/image.webp';
import image1 from '../assets/images/image2.webp';
import { Link } from 'react-router-dom';

const Side1 = () => {
    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
            <img src={image} alt="First Image" className="w-full h-auto rounded-lg shadow-md" />
            <img src={image1} alt="Second Image" className="w-full h-auto rounded-lg shadow-md" />

            <Link to="/side1" className='mt-6'>
            <button className='bg-black text-white px-9 py-4 mt-9 '>
            Submit
                </button>
            </Link>
        </div>
    );
};

export default Side1;
