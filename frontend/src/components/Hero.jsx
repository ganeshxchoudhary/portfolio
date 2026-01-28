import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Linkedin, Github, Twitter, Send, Instagram, ArrowRight, MousePointer2 } from "lucide-react";
import avatar from "../assets/hero-portrait.png";

const Hero = () => {
    const [init, setInit] = useState(false);
    const [text, setText] = useState("");
    const fullText = "Full Stack Developer | Problem Solver | Tech Enthusiast";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setText("");
                setIndex(0);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    const particlesOptions = useMemo(
        () => ({
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: { enable: true, mode: "grab" },
                },
                modes: {
                    grab: { distance: 140, links: { opacity: 0.5 } },
                },
            },
            particles: {
                color: { value: "#f97316" },
                links: {
                    color: "#f97316",
                    distance: 150,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 0.6,
                },
                number: {
                    density: { enable: true, area: 800 },
                    value: window.innerWidth < 768 ? 10 : 30,
                },
                opacity: { value: 0.2 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2 } },
            },
            detectRetina: false,
        }),
        []
    );

    const socials = [
        { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ganesh-choudhary-028457381", label: "LinkedIn" },
        { icon: <Github size={18} />, href: "https://github.com/ganeshxchoudhary", label: "GitHub" },
        { icon: <Twitter size={18} />, href: "/twitter", label: "Twitter" },
        { icon: <Send size={18} />, href: "#", label: "Telegram" },
        { icon: <Instagram size={18} />, href: "https://www.instagram.com/ganeshch0udhary_?igsh=MXJ4c29kOGRtbW14dA==", label: "Instagram" },
    ];

    return (
        <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden mesh-gradient pt-20">
            {/* Background Blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob hidden md:block" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 hidden md:block" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 hidden md:block" />

            {init && (
                <Particles
                    id="tsparticles"
                    options={particlesOptions}
                    className="absolute inset-0 z-0 pointer-events-none"
                />
            )}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-md rounded-full border border-gray-100 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Available for hire</span>
                        </div>

                        <div className="space-y-4">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl font-semibold text-slate-500"
                            >
                                Hi There, I’m
                            </motion.h2>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-tight mb-6">
                                GANESH <span className="text-gradient block lg:inline">CHOUDHARY</span>
                            </h1>
                        </div>

                        <div className="min-h-[3rem]">
                            <p className="text-xl md:text-2xl text-slate-500 font-medium whitespace-nowrap">
                                <span className="text-slate-800 font-bold border-l-4 border-primary pl-4 py-1">
                                    {text}
                                </span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="inline-block w-1.5 h-8 bg-primary ml-1 align-middle"
                                />
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
                            <motion.button
                                onClick={() => window.location.hash = "#about"}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-3xl font-bold transition-all shadow-2xl shadow-slate-200 flex items-center gap-3 group"
                            >
                                About Me <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>

                            <div className="flex items-center gap-4">
                                {socials.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        whileHover={{ y: -5, color: "#f97316" }}
                                        className="text-slate-400 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 flex justify-center items-center relative"
                    >
                        <div className="relative isolate">
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-100 rounded-3xl -rotate-12 -z-10 animate-float-premium" />
                            <div className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-blue-50 rounded-full -z-10 animate-float-premium animation-delay-2000" />

                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="relative bg-white/30 backdrop-blur-2xl border border-white/50 p-3 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group transition-all duration-500 hover:shadow-[0_48px_80px_-16px_rgba(249,115,22,0.15)]"
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden w-72 h-72 md:w-[26rem] md:h-[26rem] border border-white/50">
                                    <img
                                        src={avatar}
                                        alt="GANESH CHOUDHARY"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        fetchPriority="high"
                                        width="416"
                                        height="416"
                                    />
                                </div>

                                <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/60 flex items-center gap-4">
                                    <div className="p-3 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl shadow-lg shadow-orange-500/30">
                                        <MousePointer2 size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Experience</p>
                                        <p className="text-xl font-black text-slate-900">6+ Months</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
};

export default Hero;
