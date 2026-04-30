"use client";
import Link from "next/link";
import { GrTechnology } from "react-icons/gr";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { FiHome, FiFileText, FiInfo, FiShield } from "react-icons/fi";

interface NavbarProps {
    isAdmin: boolean;
}

const navLinks = [
    { href: "/", label: "Home", icon: <FiHome /> },
    { href: "/articles?pageNumber=1", label: "Articles", icon: <FiFileText /> },
    { href: "/about", label: "About", icon: <FiInfo /> },
];

const Navbar = ({ isAdmin }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between w-full lg:w-auto">

            {/* Logo */}
            <Link
                href="/"
                className="flex items-center gap-2 font-black tracking-tight hover:opacity-80 transition-opacity"
            >
                <div className="relative">
                    <GrTechnology className="text-brand text-3xl animate-pulse-slow" />
                    <div className="absolute inset-0 blur-lg bg-brand/30 rounded-full" />
                </div>
                <span className="text-lg md:text-2xl bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">
                    CLOUD
                </span>
                <span className="text-lg md:text-2xl text-slate-700 dark:text-slate-200">
                    HOSTING
                </span>
            </Link>

            {/* Mobile toggle */}
            <button
                className="lg:hidden text-2xl text-slate-700 dark:text-slate-200 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                onClick={() => setOpen(p => !p)}
                aria-label="Toggle menu"
            >
                {open ? <IoMdClose /> : <AiOutlineMenu />}
            </button>

            {/* Links — desktop: inline | mobile: dropdown */}
            <ul
                className={`
                    flex-col lg:flex-row
                    lg:flex lg:items-center lg:gap-1 lg:ml-10
                    absolute lg:static top-full left-0 w-full lg:w-auto
                    p-4 lg:p-0
                    bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent
                    border-b border-slate-200 dark:border-slate-700 lg:border-none
                    shadow-lg lg:shadow-none
                    rounded-b-2xl lg:rounded-none
                    transition-all duration-300 origin-top
                    ${open ? "flex scale-y-100 opacity-100" : "hidden lg:flex scale-y-95 opacity-0 lg:scale-y-100 lg:opacity-100"}
                `}
            >
                {navLinks.map(({ href, label, icon }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            onClick={() => setOpen(false)}
                            className="
                                relative flex items-center gap-3 lg:gap-0
                                px-4 py-3 lg:py-2
                                text-base font-semibold
                                text-slate-700 dark:text-slate-200
                                hover:text-brand dark:hover:text-brand
                                rounded-xl lg:rounded-md
                                hover:bg-brand/5 lg:hover:bg-transparent
                                transition-colors duration-200
                                group
                            "
                        >
                            <span className="lg:hidden text-lg">{icon}</span>
                            {label}
                            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-brand to-brand-accent rounded-full transition-all duration-300 group-hover:w-full lg:block hidden" />
                        </Link>
                    </li>
                ))}

                {isAdmin && (
                    <li>
                        <Link
                            href="/admin"
                            onClick={() => setOpen(false)}
                            className="
                                relative flex items-center gap-3 lg:gap-0
                                px-4 py-3 lg:py-2
                                text-base font-semibold
                                text-brand-accent hover:text-brand
                                rounded-xl lg:rounded-md
                                hover:bg-brand-accent/10 lg:hover:bg-transparent
                                transition-colors duration-200
                                group
                            "
                        >
                            <FiShield className="lg:hidden text-lg" />
                            Admin Dashboard
                            <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-gradient-to-r from-brand-accent to-brand rounded-full transition-all duration-300 group-hover:w-full lg:block hidden" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;