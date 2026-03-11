// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const container = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
// };

// const AboutSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
//       <motion.div
//         className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start"
//         ref={ref}
//         variants={container}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//       >
//         <motion.div variants={fadeUp}>
//           <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground sticky top-24">
//             About<br />
//             <span className="text-gradient">Me</span>
//           </h2>
//         </motion.div>

//         <div className="space-y-6">
//           <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
//             I'm a computer science student passionate about building things for the web.
//             I enjoy the intersection of design and engineering — creating experiences that
//             are not only functional but feel great to use.
//           </motion.p>
//           <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
//             Currently focused on front-end development with React and TypeScript, while
//             expanding my knowledge in backend systems and cloud infrastructure. When I'm
//             not coding, you'll find me exploring design systems, contributing to open source,
//             or sketching UI concepts.
//           </motion.p>
//           <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
//             {[
//               { label: "Projects", value: "12+" },
//               { label: "Technologies", value: "15+" },
//               { label: "Coffee Cups", value: "∞" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={stat.label}
//                 variants={fadeUp}
//                 className="bg-card rounded-xl p-5"
//               >
//                 <p className="font-heading text-3xl font-bold text-primary">{stat.value}</p>
//                 <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default AboutSection;

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
    { label: "Projects", value: "12+" },
    { label: "Technologies", value: "15+" },
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