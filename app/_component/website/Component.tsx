import React from 'react';

interface ComponentProps {
  Title: string;
}

export default function Component({ Title }: ComponentProps) {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className='bg-gray-200 w-[417px] h-[214px]'></div>
      
      <h1 className='group relative cursor-pointer'>
        {Title}
        <span className="absolute left-0 -bottom-[1px] h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full origin-left"></span>
      </h1>
    </div>
  );
}
