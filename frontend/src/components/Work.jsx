import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import project1 from '../assets/project1.png';

const Work = () => {
    const projects = [
        {
            title: "Attendance Portal",
            category: "Full Stack Development",
            description: "A high-performance portal featuring predictive analytics and real-time attendance tracking.",
            image: project1,
            tags: ["React", "Express", "MongoDB", "Python"],
            liveLink: "#",
            githubLink: "https://github.com/ganeshxchoudhary",
            color: "from-orange-500 to-orange-600"
        },
        {
            title: "Portfolio Pro",
            category: "UI/UX Design & Dev",
            description: "A premium, fully-functional portfolio template designed for modern software engineers.",
            image: project1, // Reusing for demo
            tags: ["Vite", "Tailwind CSS", "Framer Motion"],
            liveLink: "#",
            githubLink: "https://github.com/ganeshxchoudhary",
            color: "from-blue-500 to-indigo-600"
        },
        {
            title: "E-Commerce Suite",
            category: "Cloud Solution",
            description: "A comprehensive dashboard for managing large-scale online stores with ease.",
            image: project1, // Reusing for demo
            tags: ["Next.js", "Redux", "Node.js"],
            liveLink: "#",
            githubLink: "https://github.com/ganeshxchoudhary",
            color: "from-purple-500 to-indigo-500"
        }
    ];

    return (
        <section id="work" className="py-32 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
                >
                    <div className="space-y-4">
                        <span className="text-primary font-black uppercase tracking-widest text-xs">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 font-medium max-w-md text-lg leading-relaxed">
                        A selection of my recent works where I've combined technical excellence with thoughtful design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="mb-4 space-y-1">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/80">{project.category}</span>
                                    <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-2 py-1 bg-slate-50 text-slate-500 text-[9px] font-bold uppercase tracking-widest rounded-md border border-slate-100">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                                    <a
                                        href={project.liveLink}
                                        className="flex items-center gap-1 text-slate-900 font-bold text-[10px] uppercase tracking-widest hover:text-primary transition-colors group/link"
                                    >
                                        Live Demo <ArrowUpRight size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-slate-400 font-bold text-[10px] uppercase tracking-widest hover:text-slate-900 transition-colors"
                                    >
                                        <Github size={14} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
