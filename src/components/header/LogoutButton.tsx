"use client";
import axios from "axios";
import { DOMAIN } from '@/utils/constants';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";

const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const logoutHandler = async () => {
    setIsLoading(true);
    try {
        const response = await axios.get(`${DOMAIN}/api/users/logout`);
        
        if (response.status === 200) {
          toast.success("Logged out successfully");
          router.push("/");
          router.refresh();
        }
    } catch (error) {
        toast.warning("Something went wrong during logout");
        console.error("Logout error:", error);
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <button
      onClick={logoutHandler}
      disabled={isLoading}
    
      className="flex items-center justify-center gap-1.5 p-2 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl 
                 bg-slate-800 dark:bg-slate-700 hover:bg-red-600 text-slate-200 hover:text-white 
                 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 group 
                 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        <FiLogOut className="text-lg sm:text-base group-hover:rotate-12 transition-transform duration-300" />
      )}
      

      <span className="hidden sm:block font-medium text-xs sm:text-sm">
        {isLoading ? 'Logging out...' : 'Logout'}
      </span>
      
      
      {!isLoading && <span className="sm:hidden text-[10px] font-bold">Exit</span>}
    </button>
  )
}

export default LogoutButton;