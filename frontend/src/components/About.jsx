import React from 'react';
import { motion } from 'framer-motion';


const About = () => {


    return (
        <section id="about" className="py-32 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-40 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-12 text-center max-w-4xl mx-auto">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="text-primary font-black uppercase tracking-widest text-xs">About Me</span>

                            <div className="bg-white p-6 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-100/50 border border-gray-100 max-w-3xl mx-auto mt-16 relative">
                                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed text-justify">
                                    Hello! I am <span className="text-slate-900 font-black">Ganesh Choudhary</span>, a first-year undergraduate student with a strong interest in coding and software development. I am passionate about learning programming concepts, building practical projects, and continuously improving my technical and problem-solving skills. I enjoy exploring new technologies and applying them to create efficient and meaningful solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
