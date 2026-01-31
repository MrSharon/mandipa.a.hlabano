import React, { useState } from 'react';
import {
    HiOutlineMicrophone,
    HiOutlineRocketLaunch,
    HiOutlineVideoCamera,
    HiOutlineArrowRight,
    HiOutlineXMark,
    HiOutlineCheckCircle,
    HiOutlinePaperAirplane
} from "react-icons/hi2";
import mandipaPortrait from "@/assets/mandipa.jpeg";

const YoutubeIcon = (props) => (
    <svg viewBox="0 0 28 28" fill="currentColor" className={props.className} xmlns="http://www.w3.org/2000/svg">
        <path d="M27.8821 7.42434C27.556 6.27383 26.7028 5.42065 25.5523 5.09447C23.321 4.5 14.2754 4.5 14.2754 4.5C14.2754 4.5 5.22979 4.5 3.00031 5.09447C1.8498 5.42065 0.996621 6.27383 0.670442 7.42434C0.166992 9.68413 0.166992 14.279 0.166992 14.279C0.166992 14.279 0.166992 18.8738 0.670442 21.1336C0.996621 22.2841 1.8498 23.1373 3.00031 23.4635C5.22979 24.0579 14.2754 24.0579 14.2754 24.0579C14.2754 24.0579 23.321 24.0579 25.5523 23.4635C26.7028 23.1373 27.556 22.2841 27.8821 21.1336C28.3856 18.8738 28.3856 14.279 28.3856 14.279C28.3856 14.279 28.3856 9.68413 27.8821 7.42434ZM11.4203 18.4912V10.0667L18.8359 14.279L11.4203 18.4912Z" />
    </svg>
);

export const Media = () => {
    // --- State Management ---
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [status, setStatus] = useState(""); // "", "sending", "success", "error"
    const [activeColor, setActiveColor] = useState("rgba(251, 191, 36, 0.05)"); // Default Amber glow

    const mediaNodes = [
        {
            time: "Past",
            title: "Global Alumna Feature",
            description: "Reflecting on the Meridian International Center & SUSI leadership highlights.",
            icon: <HiOutlineVideoCamera className="w-6 h-6" />,
            glow: "rgba(59, 130, 246, 0.15)", // Blue glow
            color: "from-blue-500/20 to-teal-500/10",
            tag: "Completed Highlights",
            grid: "md:col-span-4"
        },
        {
            time: "Present",
            title: "PutYouthOn! YouTube",
            description: "Weekly insights into legal literacy, civic participation, and youth governance.",
            icon: <YoutubeIcon className="w-8 h-8" />,
            glow: "rgba(249, 115, 22, 0.15)", // Orange glow
            color: "from-amber-500/20 to-orange-600/20",
            tag: "Live Content",
            grid: "md:col-span-8"
        },
        {
            time: "Future",
            title: "The Visionary Keynote",
            description: "Upcoming 2026 summits on Structural Justice and African Youth Leadership.",
            icon: <HiOutlineRocketLaunch className="w-6 h-6" />,
            glow: "rgba(168, 85, 247, 0.15)", // Purple glow
            color: "from-purple-600/20 to-amber-500/10",
            tag: "Booking for 2026",
            grid: "md:col-span-12"
        }
    ];

    // --- Form Handling ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        // Pointing to Formspree API (Replace with your actual ID)
        fetch("https://formspree.io/f/xdazbggl", {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => {
                    setIsBookingOpen(false);
                    setStatus("");
                }, 3500);
            } else {
                setStatus("error");
            }
        }).catch(() => setStatus("error"));
    };

    return (
        <section id="media" className="relative py-24 bg-black overflow-hidden">
            {/* 1. Dynamic Background Glow Sync */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 z-0"
                style={{ backgroundColor: activeColor }}
            />

            {/* 2. Flowing Background Image */}
            <div className="absolute inset-0 z-0 opacity-30 fixed pointer-events-none">
                <img src={mandipaPortrait} alt="" className="w-full min-h-screen object-cover" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.4em]">Media Ecosystem</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                        Voice of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-200">Visionary</span>
                    </h2>
                </div>

                {/* 3. Media Time-Fluid Mosaic */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {mediaNodes.map((node, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setActiveColor(node.glow)}
                            onMouseLeave={() => setActiveColor("rgba(251, 191, 36, 0.05)")}
                            className={`${node.grid} group relative p-8 md:p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-700 overflow-hidden cursor-default`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${node.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-white/60 text-[10px] font-black uppercase tracking-widest border border-white/5">
                                        {node.time}
                                    </span>
                                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-amber-400 border border-white/10 group-hover:bg-amber-400 group-hover:text-black transition-all duration-500 shadow-xl">
                                        {node.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                                    {node.title}
                                </h3>

                                <div className="mt-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                                    <p className="text-gray-400 font-light max-w-sm leading-relaxed">
                                        {node.description}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                                            {node.tag}
                                        </span>
                                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all">
                                            <HiOutlineArrowRight />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Booking Trigger */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsBookingOpen(true)}
                        className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 px-10 py-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-amber-400 transition-all group shadow-2xl"
                    >
                        <span className="text-white/50 font-medium">Seeking a speaker on Structural Justice?</span>
                        <span className="text-amber-400 text-xl font-black flex items-center gap-3 group-hover:text-white transition-all">
                            Book Mandipa <HiOutlineMicrophone />
                        </span>
                    </button>
                </div>
            </div>

            {/* 5. The Vibrant Booking Modal */}
            {isBookingOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 animate-fade-in">
                    <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" onClick={() => setIsBookingOpen(false)} />

                    <div className="relative w-full max-w-xl bg-neutral-900 border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden min-h-[450px] flex flex-col justify-center">
                        {/* Decorative Modal Glow */}
                        <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/20 rounded-full blur-[80px]" />

                        <button
                            onClick={() => setIsBookingOpen(false)}
                            className="absolute top-8 right-8 p-2 text-white/40 hover:text-white transition-colors"
                        >
                            <HiOutlineXMark size={28} />
                        </button>

                        {status === "success" ? (
                            <div className="text-center space-y-6 animate-fade-in py-10">
                                <div className="flex justify-center">
                                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/50">
                                        <HiOutlineCheckCircle size={48} className="text-green-500 animate-pulse" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-black text-white">Request Received</h3>
                                    <p className="text-gray-400 font-light">Mandipa’s team will get back to you shortly.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="relative z-10 space-y-8">
                                <div className="text-center space-y-2">
                                    <h3 className="text-4xl font-black text-white">Engagement Inquiry</h3>
                                    <p className="text-gray-400 font-light">Provide your details to initiate a booking request.</p>
                                </div>

                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <input name="organization" type="text" placeholder="Organization" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all" required />
                                        <input name="email" type="email" placeholder="Contact Email" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all" required />
                                    </div>
                                    <textarea name="details" placeholder="Tell us about the event, dates, and audience..." rows="4" className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all resize-none" required />

                                    <button
                                        disabled={status === "sending"}
                                        type="submit"
                                        className="w-full py-5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 disabled:from-neutral-700 disabled:to-neutral-800 text-black font-black text-lg rounded-2xl transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-3 active:scale-[0.98]"
                                    >
                                        {status === "sending" ? "Processing..." : (
                                            <>Submit Booking Request <HiOutlinePaperAirplane /></>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-red-400 text-sm text-center font-medium">
                                            There was an issue sending your request. Please try again.
                                        </p>
                                    )}
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};