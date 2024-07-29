"use client";

// IMPORTS -
import { FileUploadProps } from "@/types/common";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ files, onChange }: FileUploadProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload bg-slate-50">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileUpload;
