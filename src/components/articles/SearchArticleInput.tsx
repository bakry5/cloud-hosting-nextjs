"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchArticleInput = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState("");

    const formSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        router.push(`/articles/search?searchText=${searchText}`);
    }

    return (
        <form onSubmit={formSubmitHandler} className="my-10 w-full md:w-2/3 mx-auto relative group">
            <input 
             className="w-full pl-6 pr-16 py-4 rounded-full text-lg border border-slate-200 focus:border-brand bg-white text-slate-800 shadow-sm focus:shadow-md outline-none transition-all duration-300 focus:ring-4 focus:ring-brand/10" 
             type="search" 
             placeholder="Search for articles..."
             value={searchText}
             onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand text-white px-5 py-2 rounded-full font-medium hover:bg-brand-dark transition-colors shadow-sm">
                Search
            </button>
        </form>
    )
}

export default SearchArticleInput;