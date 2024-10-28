// src/components/AdminSide2.js
import React, { useEffect, useState } from 'react';

const AdminSide2 = () => {
    const [submittedData, setSubmittedData] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); // State for selected user
    const [otp, setOtp] = useState(''); // State for OTP

    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem('submittedData')) || [];
        console.log("Retrieved Data:", data); // Debugging line
        setSubmittedData(data);

        // Retrieve the OTP from session storage
        const storedOtp = sessionStorage.getItem('otp');
        setOtp(storedOtp || ''); // Set the OTP state, defaulting to an empty string
    }, []);

    const handleDelete = (index) => {
        const updatedData = submittedData.filter((_, i) => i !== index);
        setSubmittedData(updatedData);
        sessionStorage.setItem('submittedData', JSON.stringify(updatedData)); // Update sessionStorage
        if (selectedUser && index === selectedUser.index) {
            setSelectedUser(null); // Deselect if the deleted user was selected
        }
    };

    const handleSelectUser = (index) => {
        setSelectedUser({ index, data: submittedData[index] }); // Set selected user data
    };

    return (
        <div className="flex p-8 space-x-8">
            <div className="w-1/3">
                <h1 className="text-2xl font-bold mb-4">User List</h1>
                {submittedData.length > 0 ? (
                    <ul className="space-y-2">
                        {submittedData.map((_, index) => ( // Only use index for display
                            <li
                                key={index}
                                onClick={() => handleSelectUser(index)}
                                className="cursor-pointer bg-blue-100 p-2 rounded-md hover:bg-blue-200"
                            >
                                User {index + 1} {/* Display user as a simple number */}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">No data submitted yet.</p>
                )}
            </div>
            <div className="w-2/3">
                {selectedUser ? (
                    <div className="p-4 rounded-lg border bg-white shadow-md">
                        <h2 className="text-xl font-bold mb-2">User Details</h2>
                        {Object.keys(selectedUser.data).map((key) => (
                            <p key={key} className="text-gray-800">
                                <span className="font-semibold">{key}:</span> {selectedUser.data[key]}
                            </p>
                        ))}
                        <button
                            onClick={() => handleDelete(selectedUser.index)}
                            className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
                        >
                            Delete Entry
                        </button>
                    </div>
                ) : (
                    <p className="text-gray-500">Select a user to view details.</p>
                )}

                {/* Display the OTP */}
                <div className="mt-4 p-4 rounded-lg border bg-white shadow-md">
                    <h2 className="text-xl font-bold mb-2">Entered OTP</h2>
                    {otp ? (
                        <p className="text-gray-800">
                            <span className="font-semibold">OTP:</span> {otp}
                        </p>
                    ) : (
                        <p className="text-gray-500">No OTP entered yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminSide2;
