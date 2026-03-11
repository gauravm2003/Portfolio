// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-50px" });

//   return (
//     <motion.footer
//       ref={ref}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : {}}
//       transition={{ duration: 0.6 }}
//       className="py-8 px-6 md:px-12 lg:px-24 border-t border-border"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-muted-foreground text-sm">
//           © 2026 Gaurav Melwani. Built with ❤️.
//         </p>
//         <p className="text-muted-foreground text-sm">
//           Designed with ☕ and curiosity.
//         </p>
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;

import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="py-8 px-6 md:px-12 lg:px-24 border-t border-border"
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-muted-foreground text-sm">
                    © 2026 Gaurav Melwani. Built with ❤️.
                </p>
                <p className="text-muted-foreground text-sm">
                    Designed with ☕.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;