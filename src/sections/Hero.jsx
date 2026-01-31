import React from 'react';
import Typewriter from 'typewriter-effect';
// 1. IMPORT the image here
import mandipaPortrait from '../assets/mandipa00.png';
//import mandipaBg from '../assets/mandipa.jpeg';

import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { HiArrowRight, HiChevronDown } from "react-icons/hi2";
import { LuDownload } from "react-icons/lu";

export const Hero = ({ onScrollClick }) => {
    return (
        <section id="hero" className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-black">

            {/*
            {/* Background Flow (Portrait as fallback bg for mobile)
            <div className="absolute inset-0 z-0 opacity-20 lg:opacity-30">
                <img
                    src={mandipaBg} // 2. USE the imported variable
                    alt=""
                    className="w-full min-h-screen object-cover object-top"
                />
            </div>
            */}

            {/* Dynamic Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent z-[1]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div className="space-y-10">
                        {/* Status Badge */}
                        <div className="animate-fade-in inline-block">
                            <span className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-xs md:text-sm font-bold text-amber-200/80 tracking-wide">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-400"></span>
                                </span>
                                Building Systems for Civic Change
                            </span>
                        </div>

                        {/* Main Headline */}
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter">
                                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Mandipa Amantle Hlabano.</span>
                            </h1>
                            <div className="flex flex-wrap items-baseline gap-x-3 text-xl md:text-4xl font-light text-gray-400">
                                <span>I am a</span>
                                <span className="text-white font-bold italic underline decoration-amber-500/50 underline-offset-8">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'Legal Scholar',
                                                'Entrepreneur',
                                                'Structure Consultant',
                                                'Civic Leader'
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 50,
                                        }}
                                    />
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg md:text-xl max-w-lg font-light leading-relaxed">
                            Dismantling structural barriers and architecting the future of youth-led advocacy in Africa.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-5">
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="group relative px-10 py-5 bg-amber-500 hover:bg-orange-500 text-black font-black rounded-2xl transition-all duration-300 flex items-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.2)] active:scale-95"
                            >
                                Contact Me
                                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="group px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all flex items-center gap-3 active:scale-95">
                                <LuDownload className="w-5 h-5 text-amber-400 group-hover:animate-bounce" />
                                Download CV
                            </button>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                            <span className="text-white/20 text-[10px] uppercase font-black tracking-[0.5em]">Network</span>
                            <div className="flex gap-6">
                                {[
                                    { icon: FaInstagram, href: "https://www.instagram.com/m.and.ipa?igsh=OTB0ZHRzZTZpdHNl" },
                                    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mandipa-amantle-hlabano-1359a9210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNj%2FnHpV%2BQfKg3M7EP2sGVQ%3D%3D" },
                                    { icon: FaFacebookF, href: "#" },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        className="text-white/40 hover:text-amber-400 transition-all transform hover:scale-125"
                                    >
                                        <social.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Main Portrait */}
                    <div className="hidden lg:flex justify-center items-center relative h-full">
                        <div className="absolute w-[700px] h-[700px] bg-amber-500/20 rounded-full blur-[150px] animate-pulse" />

                        <div className="relative z-10 w-full max-w-md group">
                            <div className="absolute -inset-4 border border-white/5 rounded-[3rem] transition-all duration-700 group-hover:border-amber-500/20" />

                            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-700 group-hover:-rotate-2">
                                <img
                                    src={mandipaPortrait} // 3. USE the imported variable here too
                                    alt="Mandipa Portrait"
                                    className="w-full h-full object-cover object-top filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={onScrollClick}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 group"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent group-hover:h-16 transition-all duration-500" />
                <span className="text-[10px] text-amber-400 font-black uppercase tracking-[0.4em]">Scroll</span>
            </button>
        </section>
    );
};