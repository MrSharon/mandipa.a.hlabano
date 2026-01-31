import React from 'react';
import { HiOutlineScale, HiOutlineLightBulb, HiOutlineSparkles } from "react-icons/hi2";
import mandipaPortrait from "@/assets/mandipa.jpeg";

export const About = () => {
    return (
        <section id="about" className="relative py-24 bg-black overflow-hidden">
            {/* VIBRANT ELEMENTS: Background Blobs */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] animate-pulse delay-700" />

            {/* Sustained flowing background portrait */}
            <div className="absolute inset-0 z-0">
                <img
                    src={mandipaPortrait}
                    alt=""
                    className="w-full h-full object-cover object-center opacity-10 fixed scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Vibrant Image Composition */}
                    <div className="relative group">
                        {/* Decorative Gradient Border */}
                        <div className="absolute -inset-1 bg-gradient-to-tr from-amber-600 to-orange-400 rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] bg-neutral-900">
                            <img
                                src={mandipaPortrait}
                                alt="Mandipa Portrait"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Vibrant Overlay on Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 to-transparent opacity-60" />
                        </div>

                        {/* Floating Experience Card - Now Vibrant */}
                        <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-amber-400 to-orange-500 p-1 w-32 h-32 rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-black w-full h-full rounded-[1.4rem] flex flex-col items-center justify-center">
                                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-amber-400 to-orange-500"> 0.5+ </span>
                                <span className="text-[10px] font-bold text-white/60 uppercase tracking-tighter">Years Impact</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: High-Contrast Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-amber-500"></span>
                                <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.4em]">The Visionary</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                Cultivating <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Clarity</span> & Systemic Change
                            </h2>
                            <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed">
                                I sit at the intersection of <span className="text-white font-medium italic">law and leadership</span>. My work is dedicated to dismantling structural barriers and building the frameworks that allow youth-led visions to thrive.
                            </p>
                        </div>

                        {/* VIBRANT PILLARS */}
                        <div className="grid gap-4">
                            {[
                                {
                                    icon: <HiOutlineScale />,
                                    title: "Legal Advocacy",
                                    desc: "Constitutional scholar focusing on human rights and structural reform.",
                                    glow: "group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                                },
                                {
                                    icon: <HiOutlineLightBulb />,
                                    title: "Strategic Clarity",
                                    desc: "Consulting on operational structures and mission-driven execution.",
                                    glow: "group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
                                }
                            ].map((pillar, idx) => (
                                <div key={idx} className={`group flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/10 to-transparent border border-white/5 hover:border-amber-400/50 transition-all duration-500 ${pillar.glow}`}>
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-black shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                                        {React.cloneElement(pillar.icon, { size: 28 })}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-xl mb-1">{pillar.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed font-light">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};