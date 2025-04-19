import React from 'react'
import Footer from './TestFooter'
import FileUploader from '../_component/components/FileUploader'

export default function page() {
  const handleFileSelect = (files: FileList) => {
    console.log('Files selected:', Array.from(files));
  };

  return (
    <FileUploader variant="precise" acceptedFileTypes = '*/*' />
  )
}
