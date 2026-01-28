import React from 'react';
import { motion } from 'framer-motion';
import { Server, Layout, Database, Code2 } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            icon: <Code2 className="text-blue-500" size={24} />,
            skills: ["C", "C++", "Python", "HTML/CSS", "JavaScript"]
        },
        {
            title: "Focus Areas",
            icon: <Database className="text-purple-500" size={24} />,
            skills: ["Data Structures", "System Design", "AI/ML Basics"]
        },
        {
            title: "Tools",
            icon: <Server className="text-orange-500" size={24} />,
            skills: ["Git & GitHub", "VS Code", "Figma/Canva"]
        },
        {
            title: "Soft Skills",
            icon: <Layout className="text-green-500" size={24} />,
            skills: ["Public Speaking", "Team Management", "Problem Solving"]
        }
    ];

    return (
        <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-orange-50 rounded-full blur-[120px] opacity-60 translate-x-1/2 translate-y-1/2 -z-10" />
            <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-indigo-50 rounded-full blur-[120px] opacity-60 -translate-x-1/2 -translate-y-1/2 -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24 space-y-4"
                >
                    <span className="text-primary font-black uppercase tracking-widest text-xs">Abilities</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-gray-100 hover:border-primary/20 transition-all duration-500 group"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-gray-50 rounded-2xl group-hover:bg-primary/5 transition-colors duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-black text-slate-900">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skillIdx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                                        className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 group-hover:bg-white group-hover:shadow-md group-hover:text-primary transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quote/CTA area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center space-y-6 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-1000" />
                    <h3 className="text-3xl font-black text-white tracking-tight">Got a project in mind?</h3>
                    <p className="text-slate-400 font-medium max-w-xl mx-auto leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                    <button className="bg-primary hover:bg-orange-500 text-white px-10 py-5 rounded-3xl font-black text-sm uppercase tracking-widest transition-all shadow-xl shadow-primary/20 transform hover:-translate-y-1 active:scale-95">
                        Let's Collaborate
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
