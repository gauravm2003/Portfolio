import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const container: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stats = [
    { label: "Projects", value: "2" },
    { label: "Technologies", value: "12+" },
    { label: "Coffee Cups", value: "∞" },
];

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
            <motion.div
                ref={ref}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start"
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Title */}
                <motion.div variants={fadeUp}>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground sticky top-24">
                        About <br />
                        <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                {/* Content */}
                <div className="space-y-6">
                    <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                        Final-year B.Tech student specializing in Artificial Intelligence,
                        passionate about building modern and scalable web applications. I enjoy
                        transforming ideas into real products using clean and intuitive user
                        interfaces.
                    </motion.p>

                    <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                        Currently focused on full-stack development. I am also exploring AI-powered
                        applications and integrating intelligent features into web platforms to
                        create smarter user experiences.
                    </motion.p>

                    {/* Stats */}
                    <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
                        {stats.map(({ label, value }) => (
                            <div key={label} className="bg-card rounded-xl p-5">
                                <p className="font-heading text-3xl font-bold text-primary">{value}</p>
                                <p className="text-muted-foreground text-sm mt-1">{label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;