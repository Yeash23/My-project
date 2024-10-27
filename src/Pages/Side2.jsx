import React from 'react';
import image from '../assets/images/image.webp';
import { Link } from 'react-router-dom';

const Side2 = () => {
    return (
       <div>
         <div className="mx-auto flex flex-col items-center bg-blue-100 p-8 rounded-lg shadow-lg max-w-md space-y-6">
            {/* Image Section */}
            <div className="w-full">
                <img src={image} alt="First Image" className="w-full h-auto rounded-lg" />
            </div>

            {/* Input Form Section */}
            <form className="w-full space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Mobile Number</label>
                    <input
                        type="tel"
                        placeholder="Enter mobile number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Account Number</label>
                    <input
                        type="text"
                        placeholder="Enter account number"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Debit Card Last 6 Digits</label>
                    <input
                        type="text"
                        maxLength="6"
                        placeholder="Enter last 6 digits"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-1">Expiry Date</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                </div>


      
<Link to="/side2" className='mt-9'> 

<button className='bg-black text-white px-9 py-4 mt-9 '>
Submite 
</button>

</Link>
            </form>
        </div>
       </div>
    );
};

export default Side2;
