import React from 'react'

export default function SideBar() {
    return (
        <section className=' flex flex-col min-w-[250px] px-8 py-8 gap-6'>
            <div className="self-stretch justify-start text-black text-xl font-medium ">Installation</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-start text-black text-xl font-medium ">Components</div>
                <div className="w-16 flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch justify-start text-black text-base font-normal animate-slideIn">
                        Navbar
                    </div>
                    <div className="self-stretch justify-start text-black text-base font-normal animate-slideInDelay">
                        Buttons
                    </div>
                </div>
            </div>
        </section>
    )
}
