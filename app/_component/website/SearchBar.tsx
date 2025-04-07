import Image from 'next/image';
import React from 'react';
import Search from "@/public/search.svg"

export default function SearchBar() {
  return (
    <div className="w-full min-w-[500px] px-6 py-3 rounded-lg border outline-offset-[-0.70px] outline-neutral-500 inline-flex justify-between items-center overflow-hidden">
      
      <input alt='search option' placeholder='Search' className='justify-start outline-none text-zinc-600 text-base font-normal border-0 border-white'/>
      <Image src={Search.src} width={24} height={24} alt='search icon'/>
    </div>
  );
}
