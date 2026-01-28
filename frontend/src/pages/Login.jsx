import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [cred, setCred] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';
            const res = await axios.post(`${API_URL}/auth/login`, cred);
            localStorage.setItem('token', res.data.token);
            navigate('/admin/dashboard');
        } catch {
            alert('Login Failed');
        }
    };

    return (
        <div className='h-screen flex items-center justify-center bg-gray-50'>
            <form onSubmit={handleLogin} className='bg-white p-10 rounded-3xl shadow-xl w-96'>
                <h2 className='text-3xl font-bold mb-6 text-center'>Admin Login</h2>
                <input
                    type='text'
                    placeholder='Username'
                    className='w-full mb-4 p-3 border rounded-xl'
                    onChange={e => setCred({ ...cred, username: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Password'
                    className='w-full mb-6 p-3 border rounded-xl'
                    onChange={e => setCred({ ...cred, password: e.target.value })}
                />
                <button className='w-full bg-primary text-white py-3 rounded-xl font-bold'>Login</button>
            </form>
        </div>
    );
};

export default Login;
