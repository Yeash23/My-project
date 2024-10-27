import React from 'react';
import image from '../assets/images/image.webp';
import image1 from '../assets/images/image2.webp';
import './Custome.css';
import { Link } from 'react-router-dom';

const Side1 = () => {
    return (
        <div className="image-container mx-auto">
            <img src={image} alt="First Image" className="image" />
            <img src={image1} alt="Second Image" className="image" />

<Link to="/side1" className='mt-9'> 

<button className='bg-black text-white px-9 py-4 mt-9 '>
Submite 
</button>

</Link>

        </div>
    );
};

export default Side1;
