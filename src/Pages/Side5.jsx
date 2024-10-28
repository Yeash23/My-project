// src/components/Side5.js
import React, { useState } from 'react';
import image from '../assets/images/image.webp';
import { useNavigate } from 'react-router-dom';

const Side5 = () => {
    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Store the OTP in session storage
        sessionStorage.setItem('otp', otp);
    
        // Navigate to the finish page (adjust as needed)
        navigate('/finish'); // Replace with your finish page route
    };
    

    return (
        <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
            <img src={image} alt="First Image" className="w-full h-auto rounded-lg shadow-md" />

            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Enter the OTP</label>
                    <input
                        type="text"
                        value={otp}
                        onChange={handleChange}
                        placeholder="Enter The OTP"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button type="submit" className='bg-black text-white px-9 py-4 mt-6 w-full'>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Side5;
