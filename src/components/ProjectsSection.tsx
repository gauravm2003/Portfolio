import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Setsail from '../assets/Setsail.jpg';
import SoleStride from '../assets/SoleStride.jpg';

const projects = [
    {
        title: "SetSail",
        description: "An AI-powered travel planning web application that allows users to explore destinations and generate personalized travel itineraries.",
        tags: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Firebase"],
        image: Setsail,
        github: "https://github.com/gauravm2003/Setsail-Website",
        liveUrl: "https://gosetsail.vercel.app",
        color: "from-primary/20 to-primary/5",
    },
    {
        title: "SoleStride",
        description: "A modern footwear e-commerce platform built with a scalable full-stack architecture and seamless user experience.",
        tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
        image: SoleStride,
        github: "https://github.com/gauravm2003/SoleStride-Frontend",
        liveUrl: "https://yoursolestride.vercel.app",
        color: "from-muted to-card",
    },
    // {
    //     title: "DevBlog",
    //     description: "A minimal blogging platform with markdown support, syntax highlighting, and dark mode.",
    //     tags: ["Next.js", "MDX", "Vercel"],
    //     color: "from-secondary to-muted",
    // },
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const TiltCard = ({ project }: { project: typeof projects[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 20 });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 20 });
    const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
    const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            variants={fadeUp}
            style={{ perspective: 800 }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group bg-card border border-border rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl relative"
            >
                {/* Glare overlay */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: useTransform(
                            [glareX, glareY],
                            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, hsl(var(--primary) / 0.12) 0%, transparent 60%)`
                        ),
                    }}
                />

                {/* <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}>
                    <motion.span
                        className="font-heading text-2xl font-bold text-foreground/30"
                        animate={isHovered ? { scale: 1.15, color: "hsl(var(--foreground) / 0.6)" } : { scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {project.title}
                    </motion.span>
                    {/* Reveal line on hover 
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                />
            </div> */}

            <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden relative`}>
                {project.image ? (
                    <motion.img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                ) : (
                    <motion.span
                        className="font-heading text-2xl font-bold text-foreground/30"
                        animate={isHovered ? { scale: 1.15, color: "hsl(var(--foreground) / 0.6)" } : { scale: 1 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {project.title}
                    </motion.span>
                )}
                <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ originX: 0 }}
                />
            </div>

            <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                        <motion.span
                            key={tag}
                            className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-md"
                            animate={isHovered ? { y: -2 } : { y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                            {tag}
                        </motion.span>
                    ))}
                </div>
                <div className="flex gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href={project.liveUrl} className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </motion.div>
        </motion.div >
    );
};

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
            <motion.div
                className="max-w-7xl mx-auto"
                ref={ref}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-16 max-w-lg">
                    A selection of projects I've built while learning and experimenting with new technologies.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <TiltCard key={project.title} project={project} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default ProjectsSection;
