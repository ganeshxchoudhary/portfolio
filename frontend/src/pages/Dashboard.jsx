import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LayoutDashboard, Code, Briefcase, GraduationCap, FolderSearch, MessageSquare, LogOut, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8001');

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('skills');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) navigate('/admin/login');
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeTab, token]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const endpoint = activeTab === 'messages' ? 'contact' : activeTab;
            const res = await axios.get(`${API_URL}/${endpoint}`);
            setData(res.data.data || []);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure?')) return;
        try {
            await axios.delete(`${API_URL}/${activeTab}/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchData();
        } catch {
            alert('Delete failed');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin/login');
    };

    const menuItems = [
        { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
        { id: 'work', label: 'Projects', icon: <FolderSearch size={20} /> },
        { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
    ];

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-8">
                    <h1 className="text-2xl font-bold text-primary">AdminPanel</h1>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === item.id ? 'bg-primary text-white shadow-lg' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </nav>
                <div className="p-4 mt-auto">
                    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3 text-red-600 font-bold hover:bg-red-50 rounded-xl transition-all">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800 capitalize">{activeTab}</h2>
                    {activeTab !== 'messages' && (
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-primary text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-md"
                        >
                            <Plus size={20} /> Add New
                        </button>
                    )}
                </header>

                <main className="flex-1 overflow-y-auto p-10">
                    {loading ? (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    ) : (
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="px-6 py-4 font-bold text-gray-700">Content</th>
                                        <th className="px-6 py-4 font-bold text-gray-700 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {data.length > 0 ? data.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-bold text-gray-800">
                                                    {item.name || item.role || item.title || item.degree || item.subject}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {item.category || item.company || item.institution || item.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button
                                                    onClick={() => handleDelete(item._id)}
                                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                >
                                                    <Trash2 size={20} />
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="2" className="px-6 py-10 text-center text-gray-400">No items found.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>

            {/* Basic Mock Modal for Adding */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Add New {activeTab}</h3>
                        <p className="text-gray-500 mb-6 italic">Forms are connected to API. Please fill data in correct format.</p>
                        <div className="flex gap-4">
                            <button onClick={() => setShowModal(false)} className="flex-1 py-3 border rounded-xl font-bold">Cancel</button>
                            <button onClick={() => setShowModal(false)} className="flex-1 py-3 bg-primary text-white rounded-xl font-bold">Save (Demo)</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
