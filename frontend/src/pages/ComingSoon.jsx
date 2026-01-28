import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob hidden md:block" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 hidden md:block" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 hidden md:block" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center z-10 p-8"
            >
                <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-orange-100 rounded-full text-orange-500">
                        <Construction size={48} />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                    Coming <span className="text-primary">Soon</span>
                </h1>

                <p className="text-lg text-slate-500 mb-8 max-w-md mx-auto">
                    We are working hard to bring you this feature. Stay tuned for updates!
                </p>

                <motion.button
                    onClick={() => navigate('/')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </motion.button>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
