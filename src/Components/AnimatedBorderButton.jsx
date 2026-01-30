import { Download } from 'lucide-react'; // Or your specific icon import

export const AnimatedBorderButton = () => {
    return (
        <button className="relative px-8 py-3 bg-transparent text-white font-medium group transition-all duration-300">
            <svg
                className="absolute left-0 top-0 w-full h-full pointer-events-none"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                style={{ overflow: "visible" }}
            >
                {/* Glow Filter Definition */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* The Animated Path - Forms a full rounded rectangle */}
                <path
                    d="M 30,1 
                       H 170 
                       A 29,29 0 0 1 199,30 
                       A 29,29 0 0 1 170,59 
                       H 30 
                       A 29,29 0 0 1 1,30 
                       A 29,29 0 0 1 30,1"
                    fill="none"
                    stroke="var(--color-primary, #fbbf24)" /* Defaulting to amber-400 */
                    strokeWidth="3"
                    filter="url(#glow)"
                    strokeDasharray="520"
                    strokeDashoffset="520"
                    strokeLinecap="round"
                    className="animate-border-glow transition-all duration-1000 group-hover:stroke-dash-offset-0"
                    style={{
                        strokeDashoffset: 'var(--dash-offset, 520)',
                        transition: 'stroke-dashoffset 1.5s ease-in-out'
                    }}
                />
            </svg>
            <span className="relative z-10 flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
            </span>

            <style jsx>{`
                button:hover path {
                    stroke-dashoffset: 0 !important;
                }
                path {
                    stroke-dashoffset: 520;
                    stroke-dasharray: 520;
                }
            `}</style>
        </button>
    );
};