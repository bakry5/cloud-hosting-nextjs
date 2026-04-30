"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/ButtonSpinner';

const LoginForm = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = async (e:React.FormEvent) => {
        e.preventDefault();
        if(email === "") return toast.error("Email is required");
        if(password === "") return toast.error("Password is required");

        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/users/login`, { email, password });
            router.replace('/');
            setLoading(false);
            router.refresh();
        } catch (error:any) {
            toast.error(error?.response?.data.message);
            console.log(error);
            setLoading(false);
        }
        
    }

    return (
        <form onSubmit={formSubmitHandler} className="flex flex-col gap-5 w-full">
            <input 
             className="w-full px-5 py-4 border border-slate-200 rounded-xl text-lg bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-300" 
             type="email" 
             placeholder="Enter Your Email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
            <input 
             className="w-full px-5 py-4 border border-slate-200 rounded-xl text-lg bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-300" 
             type="password" 
             placeholder="Enter Your Password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <button disabled={loading} type="submit" className="mt-2 w-full text-xl text-white bg-brand hover:bg-brand-dark px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? <ButtonSpinner /> : "Login"}
            </button>
        </form>
    )
}

export default LoginForm