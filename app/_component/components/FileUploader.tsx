'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type UploadStatus = {
  name: string;
  progress: number;
};

export default function FileUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFiles = (files: FileList) => {
    const filesArray = Array.from(files);
    const newUploads = filesArray.map((file) => ({
      name: file.name,
      progress: 0,
    }));

    setUploads((prev) => [...prev, ...newUploads]);

    filesArray.forEach((file) => {
      const fileSizeMB = file.size / (1024 * 1024); // bytes → MB
      simulateUpload(file.name, fileSizeMB);
    });
  };


  const simulateUpload = (fileName: string, fileSizeInMB: number) => {
    let progress = 1;

    // Simulate "slower" upload for bigger files (adjustable)
    const speedFactor = Math.max(0.5, 10 / fileSizeInMB); // smaller files = faster

    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8 + 2); // 2–10%
      progress = Math.min(progress + increment, 100);

      setUploads((prevUploads) =>
        prevUploads.map((upload) =>
          upload.name === fileName
            ? { ...upload, progress }
            : upload
        )
      );

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, Math.floor((Math.random() * 300 + 100) / speedFactor)); // interval based on size
  };



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      e.target.value = ''; // reset input to allow uploading same file again
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-[473px] inline-flex flex-col justify-start items-center gap-7">
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Box */}
      <motion.div
        className="cursor-pointer relative self-stretch px-24 py-32 rounded-[7px] bg-white flex flex-col justify-start items-center gap-4 border border-dashed border-[#7A7A7A] overflow-hidden"
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        whileHover={{
          scale: 1,

          backgroundColor: '#F5F5F5',
          borderColor: '#A3A3A3',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}

      >

        {/* Icon */}
        <div className="w-12 h-12 relative overflow-hidden z-20">
          <div className="w-10 h-[2.36px] left-[4px] top-[41.64px] absolute outline outline-[3px] outline-offset-[-1.5px] outline-neutral-500" />
          <div className="w-0 h-7 left-[24.10px] top-[4px] absolute outline outline-[3px] outline-offset-[-1.5px] outline-neutral-500" />
          <div className="w-5 h-2 left-[14.20px] top-[4.05px] absolute outline outline-[3px] outline-offset-[-1.5px] outline-neutral-500" />
        </div>

        {/* Text */}
        <div className="justify-start text-neutral-500 text-sm font-normal z-20">
          Drop or click to upload your file
        </div>
    </motion.div>

      {/* File Progress List */ }
  {
    uploads.length > 0 && (
      <div className="self-stretch flex flex-col justify-start items-center gap-4">
        {uploads.map((upload) => (
          <div
            key={upload.name}
            className="self-stretch px-4 py-3 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-500 inline-flex justify-between items-center"
          >
            <div className="justify-start text-neutral-700 text-sm font-normal">
              {upload.name} (
              {upload.progress < 100
                ? `${upload.progress}%`
                : 'Completed'}
              )
            </div>
            <div className="w-4 h-4 relative">
              
            </div>
          </div>
        ))}
      </div>
    )
  }
    </div >
  );
}
