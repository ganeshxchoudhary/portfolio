import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Twitter, Code2, Home, User, Cpu, Briefcase, FolderGit2, GraduationCap, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = ({ activeSection, setActiveSection }) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#home', icon: <Home size={18} /> },
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={18} /> },
        { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
        { name: 'Work', href: '#work', icon: <FolderGit2 size={18} /> },
        { name: 'Education', href: '#education', icon: <GraduationCap size={18} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ]

    return (
        <>

            <nav
                className={`fixed w-full z-50 transition-all duration-500 ${isScrolled
                    ? 'bg-white/70 backdrop-blur-xl shadow-lg shadow-gray-100/20 py-3 border-b border-gray-100/50'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-shrink-0"
                        >
                            <h1 className="text-2xl font-black tracking-tighter text-slate-900 group cursor-pointer flex items-center gap-2">
                                <Code2 className="text-primary" size={32} />
                                <span>Ganesh</span>
                            </h1>
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        setActiveSection(link.name);
                                        window.location.hash = link.href;
                                    }}
                                    className={`relative group px-4 py-2 text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${activeSection === link.name ? 'text-primary' : 'text-slate-600 hover:text-primary'
                                        }`}
                                >
                                    {link.icon}
                                    {link.name}
                                    <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary transition-transform duration-300 origin-left ${activeSection === link.name ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                        }`} />
                                </button>
                            ))}

                            <div className="h-6 w-px bg-gray-200 mx-4" />

                            <div className="flex items-center space-x-4 ml-4">
                                <a href="#" className="text-slate-400 hover:text-primary transition-colors" aria-label="GitHub Profile"><Github size={18} /></a>
                                <a href="https://www.linkedin.com/in/ganesh-choudhary-028457381" className="text-slate-400 hover:text-primary transition-colors" aria-label="LinkedIn Profile"><Linkedin size={18} /></a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-primary hover:bg-gray-100/50 focus:outline-none transition-all"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-100 overflow-hidden"
                        >
                            <div className="px-4 py-6 space-y-1">
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        key={link.name}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            window.location.hash = link.href;
                                            setIsMenuOpen(false);
                                        }}
                                        className={`block w-full text-left px-4 py-4 text-lg font-bold rounded-2xl transition-all flex items-center gap-3 ${activeSection === link.name
                                            ? 'text-primary bg-orange-50/50'
                                            : 'text-slate-700 hover:text-primary hover:bg-orange-50/50'
                                            }`}
                                    >
                                        {link.icon}
                                        {link.name}
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    )
}

export default Navbar
