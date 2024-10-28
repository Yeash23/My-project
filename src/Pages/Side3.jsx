// src/components/Side3.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/image.webp';

const Side3 = () => {
    const [formData, setFormData] = useState({
        bankName: '',
        userID: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve existing data or initialize an empty array
        const existingData = JSON.parse(sessionStorage.getItem('submittedData')) || [];

        // Append the new form data to the existing array
        existingData.push(formData);

        // Update the sessionStorage with the new array
        sessionStorage.setItem('submittedData', JSON.stringify(existingData));

        // Clear form fields after submission (optional)
        setFormData({
            bankName: '',
            userID: '',
            password: ''
        });

        // Navigate to the next page
        navigate('/side3'); // Change to the next page you want to navigate to
    };

    return (
        <div className="mx-auto flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg max-w-md space-y-6">
            {/* Image Section */}
            <div className="w-full">
                <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
            </div>

            {/* Input Form Section */}
            <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Bank Name</label>
                    <input
                        type="text"
                        name="bankName"
                        placeholder="Enter your bank name"
                        value={formData.bankName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">User ID</label>
                    <input
                        type="text"
                        name="userID"
                        placeholder="Enter your user ID"
                        value={formData.userID}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button type="submit" className="bg-black text-white px-9 py-4 mt-9">
                    Next
                </button>
            </form>
        </div>
    );
};

export default Side3;
