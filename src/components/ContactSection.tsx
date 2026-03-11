import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
            <motion.div
                className="max-w-2xl mx-auto text-center"
                ref={ref}
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                    Let's <span className="text-gradient">Connect</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-10 leading-relaxed">
                    I'm always open to new opportunities, collaborations, or just a friendly chat about web development.
                </motion.p>

                <motion.div variants={fadeUp}>
                    <a
                        href="mailto:2022pietcagourav023@poornima.org"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-medium text-lg hover:opacity-90 transition-opacity mb-12"
                    >
                        <Mail className="w-5 h-5" />
                        Say Hello
                    </a>
                </motion.div>

                <motion.div variants={fadeUp} className="flex justify-center gap-6">
                    {[
                        { icon: Github, label: "GitHub", href: "https://github.com/gauravm2003" },
                        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gaurav-melwani-0b047b263" },
                        { icon: Mail, label: "Email", href: "mailto:2022pietcagourav023@poornima.org" },
                    ].map(({ icon: Icon, label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            <Icon className="w-5 h-5" />
                            {label}
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;
