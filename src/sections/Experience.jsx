import React from 'react';
import { HiOutlineBuildingOffice2, HiOutlineAcademicCap, HiOutlineGlobeAlt } from "react-icons/hi2";

export const Experience = () => {
    const experiences = [
        {
            year: "2023 — Present",
            role: "Founder & CEO",
            company: "PutYouthOn!",
            description: "Leading a flagship youth empowerment initiative creating platforms for civic awareness and transformative dialogue.",
            icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
            side: "left"
        },
        {
            year: "2023",
            role: "Global Alumna",
            company: "SUSI (U.S. Dept of State)",
            description: "Selected as 1 of 3 global students for the SUSI program. Focused on Civic Engagement and Global Leadership.",
            icon: <HiOutlineGlobeAlt className="w-6 h-6" />,
            side: "right"
        },
        {
            year: "2021 — Present",
            role: "Legal Scholar",
            company: "University of Botswana",
            description: "Specializing in constitutional law and human rights, researching youth political participation in Africa.",
            icon: <HiOutlineAcademicCap className="w-6 h-6" />,
            side: "left"
        }
    ];

    return (
        <section id="experience" className="relative py-32 overflow-hidden bg-black">
            {/* The "Flowing" Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/mandipa.jpeg"
                    alt=""
                    className="w-full h-full object-cover object-center opacity-10 fixed"
                />
                {/* Gradient Overlay to blend the image into the sections */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.3em]">Trajectory</span>
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mt-4">Professional <span className="text-amber-400">Growth</span></h2>
                </div>

                {/* The Tree Structure */}
                <div className="relative">
                    {/* The Center Trunk (Stem) */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-500 via-amber-500/20 to-transparent hidden lg:block" />

                    <div className="space-y-24">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row items-center justify-center w-full group`}>

                                {/* Left Branch (Hidden on mobile if item is right-sided) */}
                                <div className={`flex-1 w-full lg:w-1/2 flex ${exp.side === 'left' ? 'justify-end' : 'justify-start lg:opacity-0 pointer-events-none'}`}>
                                    {exp.side === 'left' && (
                                        <div className="max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/50 transition-all duration-500 text-right group-hover:-translate-x-2">
                                            <span className="text-amber-400 font-mono text-sm">{exp.year}</span>
                                            <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                                            <p className="text-amber-200/60 font-medium mb-4">{exp.company}</p>
                                            <p className="text-gray-400 font-light leading-relaxed">{exp.description}</p>
                                        </div>
                                    )}
                                </div>

                                {/* The Central Node (The Fruit/Flower) */}
                                <div className="relative z-20 flex items-center justify-center w-16 h-16 my-8 lg:my-0">
                                    <div className="absolute inset-0 bg-amber-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                                    <div className="relative w-12 h-12 bg-black border-2 border-amber-500 rounded-full flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                                        {exp.icon}
                                    </div>
                                </div>

                                {/* Right Branch */}
                                <div className={`flex-1 w-full lg:w-1/2 flex ${exp.side === 'right' ? 'justify-start' : 'justify-end lg:opacity-0 pointer-events-none'}`}>
                                    {exp.side === 'right' && (
                                        <div className="max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400/50 transition-all duration-500 group-hover:translate-x-2">
                                            <span className="text-amber-400 font-mono text-sm">{exp.year}</span>
                                            <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                                            <p className="text-amber-200/60 font-medium mb-4">{exp.company}</p>
                                            <p className="text-gray-400 font-light leading-relaxed">{exp.description}</p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};