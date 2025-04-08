// components/CodePreview.tsx
"use client"
// components/CodePreview.tsx
import React, { useState } from 'react';
import CopyIcon from "@/public/copy.svg"
import Image from 'next/image';

interface CodePreviewProps {
  previewText?: string;
  codeText?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  previewText = 'Preview',
  codeText = 'Code',
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');

  return (
    <div className="w-[731px] flex flex-col items-center gap-6">
      {/* Tabs */}
      <div className="w-full flex items-center justify-between bg-white border-b border-gray-300">
        <div className="flex items-center">
          {/* Preview Tab */}
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-2 ${
              activeTab === 'preview'
                ? 'border-b-2 border-black text-black font-medium'
                : 'text-neutral-500 font-normal'
            } text-base`}
          >
            {previewText}
          </button>

          {/* Code Tab */}
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 ${
              activeTab === 'code'
                ? 'border-b-2 border-black text-black font-medium cursor-pointer'
                : 'text-neutral-500 font-normal cursor-pointer'
            } text-base`}
          >
            {codeText}
          </button>
        </div>

        {/* Copy Icon */}
        <div className="w-6 h-6 bg-stone-500 rounded-sm flex items-center justify-center cursor-pointer">
          {/* You can add a real icon here */}
          <Image src="/copy.svg" alt="copy icon" height={18} width={18} />

        </div>
      </div>

      {/* Content */}
      <div className="w-full h-80 border border-zinc-300 rounded-lg flex items-center justify-center text-gray-400 text-lg">
        {activeTab === 'preview' ? 'Preview Content' : 'Code Content'}
      </div>
    </div>
  );
};

export default CodePreview;
