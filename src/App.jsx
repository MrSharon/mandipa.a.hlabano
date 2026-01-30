import {NavBar} from "@/layout/NavBar.jsx";
import {Hero} from "@/sections/Hero.jsx";
import {About} from "@/sections/About.jsx";
import {Experience} from "@/sections/Experience.jsx";
import {Skills} from "@/sections/Skills.jsx";
import {Ventures} from "@/sections/Ventures.jsx";
import {Media} from "@/sections/Media.jsx";
import {Contact} from "@/sections/Contact.jsx";
import {useEffect, useState} from "react";

function App() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper function to scroll to any section by ID
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // This accounts for your fixed NavBar height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-black">
            {/* Pass the function to the NavBar */}
            <NavBar scrolled={scrolled} scrollToSection={scrollToSection} />

            <main>
                <section id="hero">
                    <Hero onScrollClick={() => scrollToSection('about')}/>
                </section>

                {/* IDs are now lowercase to ensure consistency */}
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="skills"><Skills /></section>
                <section id="ventures"><Ventures /></section>
                <section id="media"><Media /></section>
                <section id="contact"><Contact /></section>
            </main>
        </div>
    )
}
export default App;