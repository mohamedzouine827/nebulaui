'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import UploadIcon from '@/public/UploadIcon.svg';

type UploadStatus = {
  id: string;
  name: string;
  type: string;
  size: number;
  progress: number;
};

type FileUploaderProps = {
  variant?: 'compact' | 'detailed' | 'minimal' | 'precise';
};

type UploadedFileProps = {
  name: string;
  size: number;
  type: string;
  progress: number;
  onRemove?: () => void;
  variant: 'compact' | 'detailed' | 'minimal' | 'precise';
};

function formatSize(size: number) {
  return size < 1024 * 1024
    ? `${(size / 1024).toFixed(1)} KB`
    : `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function UploadedFiles({
  name,
  size,
  type,
  progress,
  onRemove,
  variant,
}: UploadedFileProps) {
  const containerClasses = {
    compact: 'px-3 py-2 text-sm',
    detailed: 'px-4 py-3 text-sm',
    minimal: 'px-3 py-2 text-sm',
    precise: 'px-4 py-3 text-sm',
  };

  const iconSize = variant === 'minimal' ? 'w-12 h-12 rounded-3xl' : 'w-12 h-12 rounded-3xl';
  const gap = variant === 'minimal' ? 'gap-4' : 'gap-4';

  return (
    <div
      className={`w-[473px] rounded-md outline outline-1 py-4 outline-offset-[-1px] outline-neutral-500 inline-flex flex-col bg-white ${containerClasses[variant]} ${
        variant === 'minimal' ? 'gap-2' : 'gap-2'
      }`}
    >
      <div className="flex justify-between items-center w-full jus">
        <div className={`flex justify-center items-center ${gap}`}>
          <div className={`bg-zinc-300 ${iconSize}`} />
          <div className="inline-flex flex-col justify-start items-start">
            <div className="text-neutral-700 font-medium truncate leading-tight">
              {name} ({progress < 100 ? `${progress}%` : 'Done'})
            </div>
            {variant !== 'minimal' && (
              <div className="text-neutral-500 text-xs font-normal leading-tight">
                {type || 'Unknown'} · {formatSize(size)}
              </div>
            )}
          </div>
        </div>
        <button
          onClick={onRemove}
          className="text-neutral-400 hover:text-red-500 transition-colors"
        >
          <XMarkIcon className="w-3.5 h-3.5 cursor-pointer" />
        </button>
      </div>

      {variant === 'precise' && (
        <div className="w-full h-[7px] bg-neutral-200 rounded-full overflow-hidden mt-1">
          <div
            className="h-full bg-neutral-500 transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}


export default function FileUploader({ variant = 'detailed' }: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);

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
      id: generateId(),
      name: file.name,
      type: file.type,
      size: file.size,
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
    <section className="bg-gray-200 rounded-[7px] px-8 w-fit py-8">
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
          className={`cursor-pointer relative self-stretch rounded-[7px] flex bg-white border border-dashed border-[#7A7A7A] overflow-hidden transition-all duration-50
            ${uploads.length > 0 ? ' px-8 py-12 flex  flex-col justify-center items-center gap-4' : 'px-24 py-32 flex-col gap-4'}
            flex justify-start items-center`}
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          whileHover={{
            backgroundColor: '#F5F5F5',
            borderColor: '#A3A3A3',
          }}
          transition={{
            layout: { duration: 0.1, type: 'tween', stiffness: 180, damping: 20 },
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
              <div className="flex flex-col gap-2 items-center justify-center">
                <div className="text-neutral-700 text-base font-medium z-20">
                  Drop or click to upload your file
                </div>
                <div className="text-neutral-500 text-sm font-normal z-20">
                  Max 5 Mb for each file
                </div>
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
                  key={upload.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <UploadedFiles
                    name={upload.name}
                    size={upload.size}
                    type={upload.type}
                    progress={upload.progress}
                    onRemove={() => handleRemoveFile(upload.id)}
                    variant={variant}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
