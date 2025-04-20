'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  PlusIcon, XMarkIcon, DocumentIcon,
  PhotoIcon, VideoCameraIcon, MusicalNoteIcon,
  ArchiveBoxIcon, DocumentTextIcon, DocumentArrowDownIcon
} from '@heroicons/react/24/solid';
import UploadIcon from '@/public/UploadIcon.svg';

type UploadStatus = {
  id: string;
  name: string;
  type: string;
  size: number;
  progress: number;
};

type FileUploaderProps = {
  variant?: 'compact' | 'detailed' | 'minimal' | 'precise' | 'progressive';
  maxFileSize?: number;
  acceptedFileTypes?: string;
};

type UploadedFileProps = {
  name: string;
  size: number;
  type: string;
  progress: number;
  onRemove?: () => void;
  variant: 'compact' | 'detailed' | 'minimal' | 'precise' | 'progressive';
};

function formatSize(size: number) {
  return size < 1024 * 1024
    ? `${(size / 1024).toFixed(1)} KB`
    : `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileIcon(type: string) {
  const iconClass = "w-12 h-12 text-primary-600";
  if (type.startsWith('image/')) return <PhotoIcon className={iconClass} />;
  if (type.startsWith('video/')) return <VideoCameraIcon className={iconClass} />;
  if (type.startsWith('audio/')) return <MusicalNoteIcon className={iconClass} />;
  if (type === 'application/pdf') return <DocumentTextIcon className={iconClass} />;
  if (
    type === 'application/zip' ||
    type === 'application/x-rar-compressed' ||
    type === 'application/x-7z-compressed'
  ) return <ArchiveBoxIcon className={iconClass} />;
  if (
    type === 'application/msword' ||
    type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) return <DocumentIcon className={iconClass} />;
  if (
    type === 'application/vnd.ms-excel' ||
    type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ) return <DocumentArrowDownIcon className={iconClass} />;
  return <DocumentIcon className={iconClass} />;
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
    progressive: 'px-4 py-3 text-sm',
  };

  const iconSize = variant === 'minimal' ? 'w-8  h-8  rounded-lg' : 'w-8  h-8  rounded-xl';
  const gap = variant === 'minimal' ? 'gap-3' : 'gap-4';

  return (
    <div className={`w-full rounded-lg border border-gray-200 bg-white shadow-xs hover:shadow-sm transition-shadow ${containerClasses[variant]} gap-2`}>
      <div className="flex justify-between items-center w-full">
        <div className={`flex items-center ${gap}`}>
          <div className={`${iconSize} flex items-center justify-center bg-primary-50`}>
            {getFileIcon(type)}
          </div>
          <div className="inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="text-gray-900 font-medium truncate max-w-[220px] leading-tight">
              {name}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary-600 text-xs font-medium">
                {progress < 100 ? `${progress}%` : 'Uploaded'}
              </span>
              {variant !== 'minimal' && (
                <span className="text-gray-500 text-xs font-normal">
                  · {type.split('/')[1] || 'file'} · {formatSize(size)}
                </span>
              )}
            </div>
          </div>
        </div>
        <button
          onClick={onRemove}
          className="text-gray-400 hover:text-error-500 transition-colors p-1"
          aria-label="Remove file"
        >
          <XMarkIcon className="w-4 h-4 cursor-pointer" />
        </button>
      </div>

      {(variant === 'precise' || variant === 'detailed' || variant === 'progressive') && (
        <div className="w-full flex items-center gap-2 mt-2">
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </div>
          {variant === 'progressive' && (
            <span className="text-xs text-gray-500 w-[32px] text-right">{progress}%</span>
          )}
        </div>
      )}
    </div>
  );
}

export default function FileUploader({
  variant = 'detailed',
  maxFileSize = 100,
  acceptedFileTypes = '*/*'
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploads, setUploads] = useState<UploadStatus[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const generateId = () =>
    typeof crypto !== 'undefined' && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.floor(Math.random() * 100000)}`;

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFiles = (files: FileList) => {
    const filesArray = Array.from(files);
    const validFiles = filesArray.filter(file => file.size <= maxFileSize * 1024 * 1024);

    if (validFiles.length !== filesArray.length) {
      console.warn(`Some files were too large (max ${maxFileSize}MB)`);
    }

    const newUploads = validFiles.map((file) => ({
      id: generateId(),
      name: file.name,
      type: file.type,
      size: file.size,
      progress: 0,
    }));

    setUploads(prev => [...prev, ...newUploads]);

    validFiles.forEach((file, index) => {
      const id = newUploads[index].id;
      simulateUpload(id, file.size);
    });
  };

  const simulateUpload = (id: string, size: number) => {
    let progress = 0;
    const uploadSpeed = 10000_000;
    const totalDuration = (size / uploadSpeed) * 1000;
    const intervalTime = 100;
    const steps = totalDuration / intervalTime;
    const progressIncrement = 100 / steps;

    const interval = setInterval(() => {
      progress = Math.min(progress + progressIncrement, 100);
      setUploads(prev =>
        prev.map(upload =>
          upload.id === id ? { ...upload, progress: Math.floor(progress) } : upload
        )
      );
      if (progress >= 100) clearInterval(interval);
    }, intervalTime);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      handleFiles(e.target.files);
      e.target.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    if (e.dataTransfer.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = () => setIsDragActive(false);

  const handleRemoveFile = (id: string) => {
    setUploads(prev => prev.filter(file => file.id !== id));
  };

  return (
    <section className="bg-gray-50 rounded-xl p-6 w-full max-w-md">
      <div className="w-full flex flex-col items-center gap-6">
        <input
          ref={inputRef}
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          accept={acceptedFileTypes}
        />

        <motion.div
          layout
          className={`cursor-pointer relative w-full rounded-xl flex flex-col items-center justify-center transition-all duration-150
            ${uploads.length > 0 ? 'p-6 border-2' : 'p-12 border-2'}
            ${isDragActive ? 'border-primary-300 bg-primary-50' : 'border-dashed border-gray-300 bg-white'}`}
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {uploads.length > 0 ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                <PlusIcon className="w-5 h-5 text-primary-600" />
              </div>
              <div className="text-center">
                <p className="text-gray-900 font-medium">Add more files</p>
                <p className="text-gray-500 text-sm mt-1">
                  Drag and drop or click to browse
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <Image
                  src={UploadIcon.src}
                  alt="Upload Icon"
                  width={24}
                  height={24}
                />
              </div>
              <div className="text-center">
                <p className="text-gray-900 font-medium">
                  Drag and drop your files here
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  or click to browse (max {maxFileSize}MB per file)
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {uploads.length > 0 && (
          <motion.div layout className="w-full flex flex-col gap-3">
            <AnimatePresence>
              {uploads.map((file) => (
                <UploadedFiles
                  key={file.id}
                  name={file.name}
                  size={file.size}
                  type={file.type}
                  progress={file.progress}
                  variant={variant}
                  onRemove={() => handleRemoveFile(file.id)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
