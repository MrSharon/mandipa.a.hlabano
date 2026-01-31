import React, { useState } from 'react';
import {
    HiOutlineEnvelope,
    HiOutlineMapPin,
    HiOutlineChatBubbleLeftRight,
    HiOutlineArrowRight,
    HiOutlineCheckCircle,
    HiOutlinePaperAirplane
} from "react-icons/hi2";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

export const Contact = () => {
    const [status, setStatus] = useState(""); // "", "sending", "success", "error"
    const [activeInput, setActiveInput] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        // Replace 'YOUR_FORMSPREE_ID' with your ID from formspree.io
        fetch("https://formspree.io/f/xdazbggl", {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                setStatus("success");
                form.reset();
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("error");
            }
        }).catch(() => setStatus("error"));
    };

    return (
        <section id='contact' className="relative py-24 bg-black overflow-hidden">
            {/* VIBRANT BACKGROUND SYNC: Shifts glow color based on focused input */}
            <div
                className={`absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-all duration-1000 opacity-20 ${
                    activeInput === 'message' ? 'bg-orange-600' : 'bg-amber-500'
                }`}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE: Identity & Details */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-amber-400 text-sm font-bold uppercase tracking-[0.4em]">Get In Touch</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                                Let's Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Next Vision</span>
                            </h2>
                            <p className="text-gray-400 text-lg font-light max-w-md leading-relaxed">
                                Ready to bring structural clarity to your mission? Reach out for speaking, consulting, or civic partnerships.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: <HiOutlineEnvelope />, label: "Email", value: "mandipahlabano@gmail.com", href: "mandipahlabano@gmail.com" },
                                { icon: <HiOutlineChatBubbleLeftRight />, label: "Inquiries", value: "Strategic Consulting", href: "#" },
                                { icon: <HiOutlineMapPin />, label: "Base", value: "Gaborone, Botswana", href: "#" }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-white/30 uppercase font-black tracking-widest">{item.label}</p>
                                        <p className="text-white font-bold text-lg">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="flex items-center gap-6 pt-10 animate-fade-in">
                            <span className="text-white/50 text-xs uppercase tracking-[0.3em] font-bold">
                                Connect:
                            </span>
                            <div className="flex gap-5">
                                {[
                                    { icon: FaInstagram, href: "https://www.instagram.com/m.and.ipa?igsh=OTB0ZHRzZTZpdHNl", label: "Instagram" },
                                    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mandipa-amantle-hlabano-1359a9210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNj%2FnHpV%2BQfKg3M7EP2sGVQ%3D%3D", label: "LinkedIn" },
                                    { icon: FaFacebookF, href: "https://www.facebook.com/mandipa.hlabano.5", label: "Facebook" },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="group relative p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-amber-400 hover:border-amber-400"
                                    >
                                        <social.icon
                                            className="w-5 h-5 text-amber-400 group-hover:text-black transition-colors duration-300 relative z-10"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-amber-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Direct-Send Form */}
                    <div className="relative">
                        {status === "success" ? (
                            <div className="bg-white/5 border border-amber-500/50 backdrop-blur-xl p-12 rounded-[2.5rem] text-center space-y-6 animate-fade-in min-h-[500px] flex flex-col justify-center items-center">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50 mb-4">
                                    <HiOutlineCheckCircle size={40} className="text-green-500" />
                                </div>
                                <h3 className="text-3xl font-black text-white">Message Sent</h3>
                                <p className="text-gray-400 max-w-xs">Your message has been delivered directly to Mandipa's team. Expect a response shortly.</p>
                                <button onClick={() => setStatus("")} className="text-amber-400 font-bold hover:underline">Send another message</button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-2xl"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                                        <input
                                            name="name"
                                            onFocus={() => setActiveInput('name')}
                                            type="text"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all"
                                            placeholder="Mandipa H."
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                                        <input
                                            name="email"
                                            onFocus={() => setActiveInput('email')}
                                            type="email"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all"
                                            placeholder="example@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Subject</label>
                                    <select
                                        name="subject"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option className="bg-neutral-900">Strategic Consulting</option>
                                        <option className="bg-neutral-900">Speaking Engagement</option>
                                        <option className="bg-neutral-900">Civic Partnership</option>
                                        <option className="bg-neutral-900">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">Your Message</label>
                                    <textarea
                                        name="message"
                                        onFocus={() => setActiveInput('message')}
                                        rows="4"
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-amber-400 outline-none transition-all resize-none"
                                        placeholder="How can we collaborate?"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    disabled={status === "sending"}
                                    className="w-full group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-amber-500/20"
                                >
                                    {status === "sending" ? "Dispatching..." : (
                                        <>Send Message <HiOutlinePaperAirplane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                    )}
                                </button>

                                {status === "error" && <p className="text-red-500 text-sm text-center">Connection error. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>

                {/* FINAL FOOTER */}
                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white text-[11px] font-medium uppercase tracking-widest">
                        © 2026 Mandipa Amantle Hlabano. Structure. Clarity. Impact.
                    </p>
                    <div className="flex gap-8">
                        <a href="#hero" className="text-white/70 hover:text-white text-[11px] uppercase tracking-widest transition-colors">Back to Top</a>
                        <a href="#" className="text-white/70 hover:text-white text-[11px] uppercase tracking-widest transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    );
};