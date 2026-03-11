import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// const skills = [
//   { name: "React", level: 85 },
//   { name: "TypeScript", level: 75 },
//   { name: "Tailwind CSS", level: 90 },
//   { name: "Node.js", level: 60 },
//   { name: "Git & GitHub", level: 80 },
//   { name: "Figma", level: 65 },
// ];
const skills = [
    { name: "React", level: 75 },
    { name: "React", level: 75 },
    { name: "React", level: 75 },
    { name: "React", level: 75 },
    { name: "React", level: 75 },
    { name: "React", level: 75 },
];

// const tools = ["C", "JavaScript", "Python", "TypeScript", "Render", "Vercel", "Bootstrap", "EJS", "Express.js", "NPM", "NodeJS", "Nodemon", "React", "Vite", "Firebase", "MongoDB", "MySQL", "Supabase", "Canva", "Git", "GitHub"];
const tools = ["C", "JavaScript (ES6+)", "TypeScript", "Python", "Bootstrap", "React", "Node.js", "Express.js", "REST API", "MongoDB", "SQL", "PostgreSQL", "Firebase", "Git", "GitHub"];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
            <motion.div
                className="max-w-7xl mx-auto"
                ref={ref}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-16">
                    Skills & <span className="text-gradient">Tools</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        {skills.map((skill, i) => (
                            <motion.div key={`${skill.name}-${i}`} variants={slideIn}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-heading font-medium text-foreground">{skill.name}</span>
                                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-primary rounded-full"
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: `${skill.level}%` } : {}}
                                        transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div variants={fadeUp}>
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Also working with</h3>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool, i) => (
                                <motion.span
                                    key={`${tool}-${i}`}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5 + i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                                    className="bg-background border border-border px-4 py-2 rounded-lg text-sm font-medium text-foreground"
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsSection;
