import React from 'react'
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';

export default function UploadedFiles() {
    return (
        <div className="w-[473px] px-4 py-3 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-500 inline-flex bg-white justify-between items-center">
            <div className="flex justify-start items-start gap-4">
                <div className="w-12 h-12 bg-zinc-300 rounded-3xl"></div>
                <div className="inline-flex flex-col justify-center items-start gap-2">
                    <div className="justify-start text-neutral-700 text-sm font-normal font-['Inter_Tight']">File.mp4 (90%)</div>
                    <div className="justify-start text-neutral-500 text-xs font-normal font-['Inter_Tight']">Size: 5 Mb</div>
                </div>
            </div>
            <XMarkIcon className="w-4 h-4 cursor-pointer" />
        </div>
    )
}
