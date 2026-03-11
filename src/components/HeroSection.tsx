import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90, filter: "blur(12px)" },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        transition: { duration: 1.2, delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const slideInVariants = {
    hidden: { opacity: 0, x: -60, filter: "blur(10px)" },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 1.2, delay: 1.0 + i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const AnimatedWord = ({ word, offset = 0, variants: customVariants }: { word: string; offset?: number; variants?: Record<string, any> }) => (
    <span className="inline-flex overflow-hidden" style={{ perspective: 600 }}>
        {word.split("").map((char, i) => (
            <motion.span
                key={i}
                custom={i + offset}
                variants={customVariants || letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ transformOrigin: "bottom center" }}
            >
                {char}
            </motion.span>
        ))}
    </span>
);

const HeroSection = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-24">
            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.07] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "200px 200px",
                }}
            />

            {/* Ambient glow */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, hsl(var(--primary) / 0.06) 0%, transparent 70%)",
                    top: "30%",
                    left: "50%",
                    x: "-50%",
                }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-primary/20"
                        style={{
                            width: i % 2 === 0 ? 4 : 2,
                            height: i % 2 === 0 ? 4 : 2,
                            left: `${10 + i * 11}%`,
                            top: `${15 + (i % 4) * 20}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            y: [0, -40 - i * 5, 0],
                            x: [0, (i % 2 === 0 ? 15 : -15), 0],
                            opacity: [0, 0.6, 0],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            duration: 4 + i * 0.7,
                            repeat: Infinity,
                            delay: 1.5 + i * 0.3,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Top half — first name */}
            <div className="relative z-10 text-center">
                <motion.p
                    initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 2.0 }}
                    className="text-muted-foreground font-body text-sm tracking-[0.4em] uppercase mb-4"
                >
                    Student Web Developer
                </motion.p>

                <h1 className="font-heading text-[clamp(5rem,18vw,14rem)] leading-[0.85] text-foreground">
                    <AnimatedWord word="GAURAV" />
                </h1>
            </div>

            {/* Bottom half — last name */}
            <div className="relative z-10 text-center">
                <div className="relative inline-block isolate">
                    {/* Decorative line */}
                    <div className="absolute left-1/2 top-1/2 -z-10 w-screen -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <motion.div
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                            className="h-px w-full bg-border origin-left"
                        />
                    </div>

                    <h1 className="relative z-10 font-heading text-[clamp(5rem,18vw,14rem)] leading-[0.85]">
                        <span className="text-primary">
                            <AnimatedWord word="MELWANI" offset={0} variants={slideInVariants} />
                        </span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 2.4 }}
                    className="text-muted-foreground font-body text-base md:text-lg mt-6 max-w-md mx-auto"
                >
                    Crafting thoughtful digital experiences with clean code & bold design.
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 2.4, duration: 0.5 }, y: { repeat: Infinity, duration: 2, delay: 2.4 } }}
            >
                <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
        </section>
    );
};

export default HeroSection;
