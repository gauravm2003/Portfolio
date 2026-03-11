// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const links = [
//   { label: "About", href: "#about" },
//   { label: "Skills", href: "#skills" },
//   { label: "Projects", href: "#projects" },
//   { label: "Contact", href: "#contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
//         <a href="#" className="font-heading text-xl font-bold text-foreground">
//           AR<span className="text-primary">.</span>
//         </a>

//         <div className="hidden md:flex items-center gap-8">
//           {links.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>

//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-foreground"
//         >
//           {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-background border-b border-border px-6 pb-4 space-y-3">
//           {links.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               onClick={() => setOpen(false)}
//               className="block text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
//             >
//               {link.label}
//             </a>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type NavLinksProps = {
  onClick?: () => void;
};

const NavLinks = ({ onClick }: NavLinksProps) => (
  <>
    {links.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        onClick={onClick}
        className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
      >
        {label}
      </a>
    ))}
  </>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 h-16">
        <a href="#" className="font-heading text-xl font-bold text-foreground">
          GM<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-6 pb-4 flex flex-col gap-3">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;