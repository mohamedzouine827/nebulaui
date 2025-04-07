import React from 'react'

export default function HeroSection() {
    return (
        <section className='py-[128px] flex flex-col items-center gap-[32px]'>
            <div className=' items-center justify-center flex flex-col gap-5'>
                <h1 className='text-gray-950 text-5xl font-medium'>
                    Effortless UI, Stunning Animations
                </h1>
                <h2 className='text-gray-500 text-xl font-normal'>
                    A modern UI library packed with beautifully crafted, animated components to elevate your web experience
                </h2>
            </div>
            <div className="inline-flex justify-start items-start gap-4">
                <div className="px-6 py-3.5 bg-black rounded-md flex justify-center items-center gap-2.5 cursor-pointer">
                    <div className="justify-start text-white text-base font-medium  leading-snug">Get Started</div>
                </div>
                <div className="w-32 px-4 py-3.5 rounded-md outline outline-1 outline-offset-[-1px] outline-black flex justify-center 2.5 cursor-pointer items-center gap-2.5">
                    <div className="justify-start text-black text-base font-medium  leading-snug">Docs</div>
                </div>
            </div>
        </section>
    )
}
