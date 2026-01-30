import React from 'react';
import { HiOutlineScale, HiOutlineLightBulb, HiOutlineGlobeAlt, HiOutlineCommandLine } from "react-icons/hi2";

export const Skills = () => {
    const skillGroups = [
        {
            category: "Legal & Advocacy",
            icon: <HiOutlineScale className="w-6 h-6" />,
            skills: ["Constitutional Law", "Human Rights Research", "Public Policy", "Legal Literacy"]
        },
        {
            category: "Strategy & Structure",
            icon: <HiOutlineLightBulb className="w-6 h-6" />,
            skills: ["Clarity Consulting", "Operational Structure", "Strategic Planning", "Systems Thinking"]
        },
        {
            category: "Civic Leadership",
            icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
            skills: ["Youth Governance", "Public Speaking", "Community Organizing", "Cross-Cultural Dialogue"]
        },
        {
            category: "Digital & Entrepreneurship",
            icon: <HiOutlineCommandLine className="w-6 h-6" />,
            skills: ["Digital Literacy", "Brand Strategy", "Content Curation", "Project Management"]
        }
    ];

    return (
        <section id="skills" className="relative py-24 bg-black overflow-hidden">
            {/* Flowing background continued */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/mandipa.jpeg"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-5 fixed"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em]">Foundations</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2">
                        Skill <span className="text-amber-400">Ecosystem</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto font-light">
                        The core competencies driving impact across legal, civic, and entrepreneurial landscapes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, idx) => (
                        <div
                            key={idx}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/40 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Icon & Title */}
                            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500">
                                {group.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
                                {group.category}
                            </h3>

                            {/* Skills List */}
                            <div className="space-y-3">
                                {group.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/40 group-hover:bg-amber-400 transition-colors" />
                                        <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decorative Root Line */}
                <div className="mt-20 flex justify-center">
                    <div className="w-1 h-32 bg-gradient-to-b from-amber-500/20 to-transparent" />
                </div>
            </div>
        </section>
    );
};