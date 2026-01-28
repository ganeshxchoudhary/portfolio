import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
    const educationList = [
        {
            degree: "Bachelor of Technology in CSE",
            institution: "PW INSTITUTE OF INOVATION, PUNE",
            location: "India",
            duration: "2025 - 2029",
            description: "Specializing in Software Engineering and Intelligent Systems. Active member of Coding and Innovation Clubs."
        },
        {
            degree: "Higher Secondary (12th)",
            institution: "GOLDEN FUTURE PUBLIC HIGH SCHOOL, ARNIYA KALAN",
            location: "Your City",
            duration: "2023 - 2024",
            description: "Major in Science (Physics, Chemistry, Mathematics)."
        },
        {
            degree: "Secondary School (10th)",
            institution: "DEEPTI CONVENT HS SCHOOL, SHUJALPUR",
            location: "Your City",
            duration: "2010 - 2023",
            description: "Completed with distinction. Active participant in school olympiads."
        }
    ];

    return (
        <section id="education" className="py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24 space-y-4"
                >
                    <span className="text-secondary font-black uppercase tracking-widest text-xs">Academic Foundation</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Education <span className="text-gradient">& Degrees</span>
                    </h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {educationList.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{edu.degree}</h3>
                                    <p className="text-lg font-bold text-slate-400 flex items-center gap-2">
                                        <GraduationCap size={20} className="text-indigo-500" /> {edu.institution}
                                    </p>
                                </div>
                                <span className="self-start inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest border border-indigo-100/50 whitespace-nowrap">
                                    <Calendar size={14} /> {edu.duration}
                                </span>
                            </div>

                            <p className="text-slate-500 font-medium leading-relaxed border-t border-slate-50 pt-6">
                                "{edu.description}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
