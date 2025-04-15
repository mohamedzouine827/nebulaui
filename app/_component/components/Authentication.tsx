import React from 'react'

export default function Authentication() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-8 rounded-3xl border border-neutral-200 bg-white p-8 shadow-lg">
  
  <div className="flex flex-col items-center gap-3 text-center">
    <h1 className="font-['Inter_Tight'] text-2xl font-semibold text-black">Verify your code</h1>
    <p className="font-['Inter_Tight'] text-sm font-normal text-stone-500">We sent a 4-digit code to your email. Enter it below to continue.</p>
  </div>

  
  <div className="flex items-center justify-center gap-4">
    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-neutral-300 font-['Inter_Tight'] text-xl font-semibold text-black">0</div>
    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-neutral-300 font-['Inter_Tight'] text-xl font-semibold text-black">0</div>
    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-neutral-300 font-['Inter_Tight'] text-xl font-semibold text-black">0</div>
    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-neutral-300 font-['Inter_Tight'] text-xl font-semibold text-black">0</div>
  </div>

  
  <div className="flex w-full gap-4">
    <button className="flex-1 rounded-xl border border-neutral-300 bg-white py-3 font-['Inter_Tight'] text-sm text-black transition-all duration-300 hover:bg-neutral-100">Cancel</button>
    <button className="flex-1 rounded-xl border border-black bg-black py-3 font-['Inter_Tight'] text-sm text-white transition-all duration-300 hover:bg-gray-800">Confirm</button>
  </div>

  
  <div className="text-center font-['Inter_Tight'] text-sm font-normal text-stone-500">Didn’t receive the code?</div>
</div>

  )
}
