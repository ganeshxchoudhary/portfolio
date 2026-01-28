import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, ArrowRight, MessageSquare, Linkedin, Github } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8001';
            const response = await axios.post(`${API_URL}/contact`, formData);
            if (response.status === 200) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', email: '', subject: '', message: '' });
            }
        } catch (err) {
            console.error('Submission error:', err);
            setStatus({ loading: false, success: false, error: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Decorative background blobs */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-orange-50 rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-50 rounded-full blur-[100px] opacity-40 -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24 space-y-4"
                >
                    <span className="text-primary font-black uppercase tracking-widest text-xs">Get in Touch</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Let's <span className="text-gradient">Collaborate</span>
                    </h2>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                        Whether you have a question or just want to say hi, my inbox is always open. Let's build something amazing together!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div className="space-y-6">
                            <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                                Don't be a stranger, <br />
                                say <span className="text-primary">hello!</span>
                            </h3>
                            <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                                I'm currently looking for new opportunities. Feel free to reach out for a project or just to chat.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { icon: <Mail size={20} />, label: "Email", info: "ganeshchoudharycse@gmail.com", color: "bg-orange-50 text-orange-600" },
                                { icon: <MapPin size={20} />, label: "Location", info: "PUNE, INDIA", color: "bg-indigo-50 text-indigo-600" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-6 p-6 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                                    <div className={`p-4 ${item.color} rounded-2xl group-hover:scale-110 transition-transform duration-500`}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-400 uppercase tracking-widest text-[10px]">{item.label}</h4>
                                        <p className="text-lg font-bold text-slate-800">{item.info}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6 space-y-4">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Connect with me</p>
                            <div className="flex gap-4">
                                <a href="#" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-primary transition-colors duration-500"><Github size={20} /></a>
                                <a href="https://www.linkedin.com/in/ganesh-choudhary-028457381" className="p-4 bg-slate-900 text-white rounded-2xl hover:bg-primary transition-colors duration-500"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 bg-white p-10 md:p-14 rounded-[4rem] shadow-4xl shadow-slate-200/50 border border-gray-100 relative group"
                    >
                        <div className="absolute top-0 right-10 p-10 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
                            <MessageSquare size={150} />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-50 rounded-3xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-slate-800"
                                        placeholder="Ganesh"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-50 rounded-3xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-slate-800"
                                        placeholder="ganesh@example.com"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-50 rounded-3xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-slate-800"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] ml-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-50 rounded-3xl focus:outline-none focus:bg-white focus:border-primary/20 transition-all font-bold text-slate-800"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status.loading}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-6 rounded-3xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-2xl transition-all ${status.loading
                                    ? 'bg-slate-400 cursor-not-allowed'
                                    : 'bg-primary hover:bg-orange-600 text-white shadow-primary/20'
                                    }`}
                            >
                                {status.loading ? 'Sending...' : 'Send Message'}
                                {!status.loading && <Send size={20} />}
                            </motion.button>

                            {status.success && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-green-600 text-center font-black uppercase tracking-widest text-xs"
                                >
                                    Message sent successfully! 🎉
                                </motion.p>
                            )}
                            {status.error && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-600 text-center font-black uppercase tracking-widest text-xs"
                                >
                                    {status.error}
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
