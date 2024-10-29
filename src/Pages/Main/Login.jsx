import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            navigate('/yeash');

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            // Save token to local storage or context for later use
            localStorage.setItem('token', data.token);

            // Redirect or perform any other actions on successful login
            console.log('Login successful', data);
        } catch (error) {
            setError(error.message);
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
                {error && <p className="text-sm text-center text-red-500">{error}</p>}
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
