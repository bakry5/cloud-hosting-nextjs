import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Home", href: "/" },
      { label: "Articles", href: "/articles?pageNumber=1" },
      { label: "About", href: "/about" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
    contact: [
      { label: "moahmed.medhat23000@gmail.com", href: "mailto:moahmed.medhat23000@gmail.com" },
      { label: "+20 150 788 2744", href: "tel:+201507882744" },
      { label: "Egypt", href: "#" },
    ],
  };

  const socials = [
    { icon: <FiGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FiTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FiLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FiMail />, href: "mailto:moahmed.medhat23000@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
   
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <GrTechnology className="text-brand text-2xl" />
            <span className="font-black text-lg bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
              CLOUD
            </span>
            <span className="font-black text-lg text-white">HOSTING</span>
          </Link>
          <p className="text-sm leading-relaxed">
            A modern platform for cloud hosting articles, tutorials, and resources — built by{" "}
            <span className="text-brand font-semibold">Bakry</span>.
          </p>
    
          <div className="flex items-center gap-3 mt-1">
            {socials.map(s => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 hover:bg-brand hover:text-white transition-all duration-200 text-lg"
              >
                {s.icon}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Product</h4>
          <ul className="flex flex-col gap-2">
            {links.product.map(l => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm hover:text-brand transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

   
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Legal</h4>
          <ul className="flex flex-col gap-2">
            {links.legal.map(l => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm hover:text-brand transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

  
        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="flex flex-col gap-2">
            {links.contact.map(l => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm hover:text-brand transition-colors duration-200">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          <span>© {currentYear} Cloud Hosting. All rights reserved.</span>
          <span>
            Made with <span className="text-red-500">♥</span> by{" "}
            <span className="text-brand font-bold">Bakry</span>
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;