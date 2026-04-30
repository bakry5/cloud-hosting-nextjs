import Link from 'next/link'
import Navbar from './Navbar';
import { cookies } from 'next/headers';
import { verifyTokenForPage } from '@/utils/verifyToken';
import LogoutButton from './LogoutButton';
import { FiUser, FiLogIn, FiUserPlus, FiArrowRight } from 'react-icons/fi';

const Header = () => {
  const token = cookies().get("jwtToken")?.value || "";
  const payload = verifyTokenForPage(token);

  return (
    <header className="sticky top-0 z-50 w-full isolate overscroll-y-none">
      {/* Animated gradient border */}
      <div className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent opacity-50 animate-pulse" />

      {/* Main header with glassmorphism */}
      <div className="backdrop-blur-2xl bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/50 dark:border-slate-700/50 shadow-2xl shadow-slate-900/10 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <Navbar isAdmin={payload?.admin || false} />

          <div className="flex items-center gap-2 sm:gap-3">
            {payload ? (
              <>
                <Link
                  href="/profile"
                  className='group relative flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-brand/10 to-brand-accent/10 hover:from-brand/20 hover:to-brand-accent/20 border border-brand/20 hover:border-brand/40 transition-all duration-300 overflow-hidden'
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/5 to-brand/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <FiUser className="text-white text-xs sm:text-sm" />
                  </div>
                  <span className='hidden sm:block text-slate-700 dark:text-slate-200 font-semibold capitalize text-sm group-hover:text-brand transition-colors duration-300'>
                    {payload?.username}
                  </span>
                </Link>
                <LogoutButton />
              </>
            ) : (
              <div className="flex items-center gap-2 sm:gap-3">
                <Link
                  className="group relative flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 font-semibold text-slate-700 dark:text-slate-200 hover:text-brand rounded-xl transition-all duration-300 overflow-hidden"
                  href="/login"
                >
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/5 transition-colors duration-300 rounded-xl"></div>
                  <FiLogIn className="relative text-base sm:text-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  <span className="relative hidden sm:inline">Login</span>
                </Link>
                
                <Link
                  className="group relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 font-semibold bg-gradient-to-r from-brand to-brand-accent hover:from-brand-dark hover:to-brand text-white rounded-xl shadow-lg shadow-brand/30 hover:shadow-xl hover:shadow-brand/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                  href="/register"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <span className="relative hidden sm:inline">Register</span>
                  <FiUserPlus className="relative sm:hidden text-base" />
                  <FiArrowRight className="relative hidden sm:block w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header