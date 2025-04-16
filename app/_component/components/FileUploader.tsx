'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import UploadIcon from '@/public/UploadIcon.svg';

type UploadStatus = {
  id: string;
  name: string;
  progress: number;
};

export default function FileUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);

  // Safe ID generation function
  const generateId = () => {
    return typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFiles = (files: FileList) => {
    const filesArray = Array.from(files);
    const newUploads = filesArray.map((file) => ({
      id: generateId(),  // Using the generateId function
      name: file.name,
      progress: 0,
    }));

    setUploads((prev) => [...prev, ...newUploads]);

    filesArray.forEach((file, index) => {
      const id = newUploads[index].id;
      const fileSizeMB = file.size / (1024 * 1024);
      simulateUpload(id, file.name, fileSizeMB);
    });
  };

  const simulateUpload = (id: string, fileName: string, fileSizeInMB: number) => {
    let progress = 1;
    const speedFactor = Math.max(0.5, 10 / fileSizeInMB);

    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 8 + 2);
      progress = Math.min(progress + increment, 100);

      setUploads((prevUploads) =>
        prevUploads.map((upload) =>
          upload.id === id ? { ...upload, progress } : upload
        )
      );

      if (progress >= 100) {
        clearInterval(interval);
      }
    }, Math.floor((Math.random() * 300 + 100) / speedFactor));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
      e.target.value = '';
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

  const handleRemoveFile = (id: string) => {
    setUploads((prev) => prev.filter((file) => file.id !== id));
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
        layout
        className={`cursor-pointer relative self-stretch rounded-[7px] flex bg-white border border-dashed border-[#7A7A7A] overflow-hidden transition-all duration-100
          ${uploads.length > 0 ? ' px-8 py-12 flex justify-center items-center gap-4' : 'px-24 py-32 flex-col gap-4'}
          flex justify-start items-center`}
        onClick={handleClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        whileHover={{
          backgroundColor: '#F5F5F5',
          borderColor: '#A3A3A3',
        }}
        transition={{
          layout: { duration: 0.1, type: 'spring', stiffness: 180, damping: 20 },
        }}
      >
        {uploads.length > 0 ? (
          <>
            <PlusIcon className="w-5 h-5 text-[#7A7A7A]" />
            <div className="text-neutral-500 text-sm font-medium">
              Drop or click to upload your file
            </div>
          </>
        ) : (
          <>
            <Image
              className="w-12 h-12 fill-[#7A7A7A]"
              src={UploadIcon.src}
              alt="Upload Icon"
              width={48}
              height={48}
            />
            <div className="text-neutral-500 text-sm font-normal z-20">
              Drop or click to upload your file
            </div>
          </>
        )}
      </motion.div>

      {/* File List */}
      {uploads.length > 0 && (
        <motion.div
          layout
          className="self-stretch flex flex-col justify-start items-center gap-4"
        >
          <AnimatePresence>
            {uploads.map((upload) => (
              <motion.div
                key={upload.id}  // Unique key using upload.id
                layout
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.25 }}
                className="self-stretch px-4 py-3 rounded-md outline outline-1 outline-offset-[-1px] outline-neutral-500 inline-flex justify-between items-center bg-white shadow-sm"
              >
                <div className="text-neutral-700 text-sm font-normal">
                  {upload.name} (
                  {upload.progress < 100 ? `${upload.progress}%` : 'Completed'})
                </div>
                <button
                  onClick={() => handleRemoveFile(upload.id)}
                  className="w-4 h-4 flex items-center justify-center ml-2 text-neutral-500 hover:text-red-500 transition-colors"
                >
                  <XMarkIcon className="w-4 h-4 cursor-pointer" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
