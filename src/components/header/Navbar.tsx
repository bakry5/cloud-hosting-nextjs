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

const Navbar = ({ isAdmin } : NavbarProps) => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => setToggle(prev => !prev);
    const closeMenu = () => setToggle(false);

    return (
        <nav className="flex items-center justify-between w-full lg:w-auto">
            <div className="flex items-center justify-between w-full lg:w-auto">
                <Link href="/" className=" text-lg  flex items-center gap-2  md-text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand via-brand-accent to-brand transition-all hover:opacity-80 tracking-tight animate-gradient">
                    <div className="relative">
                        <GrTechnology className="text-brand text-3xl animate-pulse-slow" />
                        <div className="absolute inset-0 blur-lg bg-brand/30 rounded-full" />
                    </div>
                    <span className="     bg-gradient-to-r from-brand to-brand-accent bg-clip-text text-transparent">CLOUD</span>
                    <span className="text-slate-700 dark:text-slate-200">HOSTING</span>
                </Link>

                {/* Mobile Menu Toggle */}
                <div className="lg:hidden text-3xl text-slate-800 dark:text-slate-200 cursor-pointer p-2 rounded-xl hover:bg-brand/10 transition-all duration-300 hover:scale-110" onClick={toggleMenu}>
                    {toggle ? <IoMdClose /> : <AiOutlineMenu />}
                </div>
            </div>

            {/* Desktop and Mobile Links Wrapper */}
            <div
                className={`
                  !bg-[#555b68]  absolute lg:static top-20 left-0 w-full lg:w-auto backdrop-blur-xl bg-white/90 lg:bg-transparent lg:backdrop-blur-none lg:border-none shadow-2xl lg:shadow-none border-b border-slate-200/50 lg:border-none transition-all duration-500 origin-top 
                    ${toggle ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 lg:scale-y-100 lg:opacity-100'}
                `}
            >
                <ul className="flex flex-col lg:flex-row items-start lg:items-center p-6 lg:p-0 gap-4 lg:gap-2 lg:ml-10 ">
                    <Link onClick={closeMenu} className="relative w-full lg:w-auto px-4 py-3 lg:px-4 lg:py-2 text-base font-semibold dark:text-slate-200 hover:text-brand transition-all duration-300 rounded-xl lg:rounded-none hover:bg-brand/5 lg:hover:bg-transparent group flex items-center gap-3 lg:gap-0 " href="/">
                        <FiHome className="lg:hidden text-lg" />
                        <span>Home</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-brand-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                    <Link onClick={closeMenu} className="relative w-full lg:w-auto px-4 py-3 lg:px-4 lg:py-2 text-base font-semibold  dark:text-slate-200 hover:text-brand transition-all duration-300 rounded-xl lg:rounded-none hover:bg-brand/5 lg:hover:bg-transparent group flex items-center gap-3 lg:gap-0" href="/articles?pageNumber=1">
                        <FiFileText className="lg:hidden text-lg" />
                        <span>Articles</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-brand-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                    <Link onClick={closeMenu} className="relative w-full lg:w-auto px-4 py-3 lg:px-4 lg:py-2 text-base font-semibold  dark:text-slate-200 hover:text-brand transition-all duration-300 rounded-xl lg:rounded-none hover:bg-brand/5 lg:hover:bg-transparent group flex items-center gap-3 lg:gap-0" href="/about">
                        <FiInfo className="lg:hidden text-lg" />
                        <span>About</span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-brand-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                    </Link>
                   {isAdmin && (
                     <Link onClick={closeMenu} className="relative w-full lg:w-auto px-4 py-3 lg:px-4 lg:py-2 text-base font-semibold text-brand-accent hover:text-brand transition-all duration-300 rounded-xl lg:rounded-none hover:bg-brand-accent/10 lg:hover:bg-transparent group flex items-center gap-3 lg:gap-0" href="/admin">
                         <FiShield className="lg:hidden text-lg" />
                         <span>Admin Dashboard</span>
                         <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent to-brand transition-all duration-300 group-hover:w-full rounded-full"></span>
                     </Link>
                   )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;