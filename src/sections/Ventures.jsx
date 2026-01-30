import React from 'react';
import { HiOutlineArrowRight, HiOutlineUserGroup, HiOutlineShieldCheck } from "react-icons/hi2";

export const Ventures = () => {
    const ventures = [
        {
            id: "putyouthon",
            title: "PutYouthOn!",
            category: "Civic Awareness",
            description: "Simplifying legal and civic structures to empower the next generation of African leaders.",
            icon: <HiOutlineUserGroup size={32} />,
            accent: "from-amber-400 to-orange-500",
            image: "/putyouthon_bg.jpeg", // Replace with high-res image
            stat: "5K+ Reached"
        },
        {
            id: "herarmour",
            title: "Her Armour",
            category: "Structural Safety",
            description: "Bridging the gap between vision and execution through safety-focused community systems.",
            icon: <HiOutlineShieldCheck size={32} />,
            accent: "from-orange-500 to-amber-200",
            image: "/herarmour_bg.jpeg", // Replace with high-res image
            stat: "Safety First"
        }
    ];

    return (
        <section id="ventures" className="relative py-24 bg-black overflow-hidden">
            {/* Background "Flow" Continued */}
            <div className="absolute inset-0 z-0 opacity-10 fixed">
                <img src="/mandipa.jpeg" alt="" className="w-full min-h-screen object-cover" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="space-y-4">
                        <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.4em]">Portfolio</span>
                        <h2 className="text-5xl md:text-7xl font-black text-white">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Ventures</span></h2>
                    </div>
                    <p className="text-gray-400 max-w-sm font-light leading-relaxed">
                        Two distinct missions, one singular vision: creating the structure for growth.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {ventures.map((v, idx) => (
                        <div key={idx} className="group relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10">
                            {/* Background Image with Hover Zoom */}
                            <img
                                src={v.image}
                                alt={v.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60"
                            />

                            {/* Vibrant Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${v.accent} text-black shadow-xl shadow-amber-500/20`}>
                                        {v.icon}
                                    </div>
                                    <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest">
                                        {v.stat}
                                    </span>
                                </div>

                                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="space-y-1">
                                        <p className={`text-sm font-bold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r ${v.accent}`}>
                                            {v.category}
                                        </p>
                                        <h3 className="text-4xl font-black text-white">{v.title}</h3>
                                    </div>
                                    <p className="text-gray-300 font-light leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {v.description}
                                    </p>
                                    <button className="flex items-center gap-3 text-white font-bold pt-4 group/btn">
                                        Explore Initiative
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-all">
                                            <HiOutlineArrowRight />
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Corner Glow */}
                            <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${v.accent} blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};