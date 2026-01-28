import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Full Stack Developer Intern",
            company: "IBM Project Team",
            duration: "Jan 2024 - Present",
            location: "Virtual / Remote",
            description: [
                "Developing a modern attendance portal with React and Python.",
                "Implementing predictive analytics for student eligibility using Machine Learning.",
                "Collaborating with a cross-functional team in an agile environment."
            ]
        },
        {
            role: "Web Developer Freelancer",
            company: "Self-Employed",
            duration: "June 2023 - Dec 2023",
            location: "India",
            description: [
                "Built responsive websites for local businesses using React and Tailwind CSS.",
                "Optimized website performance and SEO, resulting in 40% more user traffic.",
                "Independent management of client requirements and project delivery."
            ]
        }
    ];

    return (
        <section id="experience" className="py-32 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24 space-y-4"
                >
                    <span className="text-primary font-black uppercase tracking-widest text-xs">Journey</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Professional <span className="text-gradient">Timeline</span>
                    </h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4"></div>
                </motion.div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 bg-slate-50 border-x border-gray-100 hidden md:block" />

                    <div className="space-y-16">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-24 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Center Circle */}
                                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 top-0 w-5 h-5 rounded-full bg-white border-[5px] border-primary shadow-xl z-20" />

                                {/* Content Card */}
                                <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                                    <div className={`space-y-2 mb-6 ${idx % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-primary text-xs font-black uppercase tracking-widest rounded-full mb-2">
                                            {exp.duration}
                                        </span>
                                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">{exp.role}</h3>
                                        <p className="text-lg font-bold text-slate-400 uppercase tracking-widest flex items-center justify-start md:justify-[inherit] gap-2">
                                            <Briefcase size={16} className="text-primary" /> {exp.company}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="p-10 rounded-[3rem] bg-slate-50 border border-gray-100 hover:border-primary/20 shadow-xl shadow-slate-100/50 transition-all duration-500 hover:bg-white"
                                    >
                                        <ul className="space-y-4">
                                            {exp.description.map((item, itemIdx) => (
                                                <li key={itemIdx} className="text-slate-500 font-medium leading-relaxed flex items-start gap-3">
                                                    <span className="mt-1.5 text-primary shrink-0">
                                                        <ChevronRight size={18} />
                                                    </span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
