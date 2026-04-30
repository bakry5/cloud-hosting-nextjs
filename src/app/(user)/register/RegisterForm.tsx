"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Link from 'next/link';
import { DOMAIN } from '@/utils/constants';
import ButtonSpinner from '@/components/ButtonSpinner';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const formSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim() === "") return toast.error("Username is required");
        if (email.trim() === "") return toast.error("Email is required");
        if (password.trim() === "") return toast.error("Password is required");

        try {
            setLoading(true);
            await axios.post(`${DOMAIN}/api/users/register`, { email, password, username });
            router.replace('/');
            router.refresh();
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full px-5 py-4 border border-slate-200 rounded-xl text-base bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all duration-300";

    return (
        <div className="flex flex-col gap-5 w-full">
            <form onSubmit={formSubmitHandler} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-slate-600 ml-1">Username</label>
                    <input
                        className={inputClass}
                        type="text"
                        placeholder="bakry123"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-slate-600 ml-1">Email</label>
                    <input
                        className={inputClass}
                        type="email"
                        placeholder="bakry@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm font-semibold text-slate-600 ml-1">Password</label>
                    <input
                        className={inputClass}
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <button
                    disabled={loading}
                    type="submit"
                    className="mt-2 w-full text-lg text-white bg-brand hover:opacity-90 px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {loading ? <ButtonSpinner /> : "Create Account"}
                </button>
            </form>

            <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-slate-200" />
                <span className="text-xs text-slate-400 font-medium">OR</span>
                <div className="flex-1 h-px bg-slate-200" />
            </div>

          
            <p className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-brand font-bold hover:underline transition-all"
                >
                    Sign in
                </Link>
            </p>
        </div>
    );
};

export default RegisterForm;