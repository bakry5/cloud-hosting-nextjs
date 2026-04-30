import Image from 'next/image';
import { TiTick } from "react-icons/ti";

const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] px-6 lg:px-16 overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center mt-12 lg:mt-0 glass p-8 lg:p-12 rounded-3xl animate-fade-in-up shadow-2xl relative z-10">
                <div className="absolute top-0 left-0 w-32 h-32 bg-brand/20 rounded-br-full -z-10 blur-xl"></div>

                <h1 className="text-5xl lg:text-7xl font-black text-slate-800 tracking-tight leading-tight leading-tight mb-6">
                    Cloud <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand to-brand-accent">Hosting</span>
                </h1>

                <p className="text-xl lg:text-3xl text-slate-600 mb-8 font-medium">
                    The best web hosting solution for your online success
                </p>

                <div className="flex flex-col gap-4 mt-2 w-full">
                    <div className="flex items-center gap-3 text-lg lg:text-xl font-bold text-slate-700 bg-white/50 p-4 rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                        <span className="bg-brand text-white rounded-full p-1"><TiTick /></span>  Easy To Use Control Panel
                    </div>
                    <div className="flex items-center gap-3 text-lg lg:text-xl font-bold text-slate-700 bg-white/50 p-4 rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                        <span className="bg-brand text-white rounded-full p-1"><TiTick /></span>  Secure Hosting
                    </div>
                    <div className="flex items-center gap-3 text-lg lg:text-xl font-bold text-slate-700 bg-white/50 p-4 rounded-xl shadow-sm hover:scale-[1.02] transition-transform duration-300">
                        <span className="bg-brand text-white rounded-full p-1"><TiTick /></span>  Website Maintenance
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0 animate-float">
                <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-brand to-brand-accent rounded-full opacity-20 blur-3xl mix-blend-multiply"></div>
                    <Image
                        src="/download.png"
                        alt='cloud'
                        width={600}
                        height={600}
                        className="relative drop-shadow-2xl hover:scale-105 transition-transform duration-700 rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero