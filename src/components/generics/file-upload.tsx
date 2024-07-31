"use client";

// IMPORTS -
import { convertFileToUrl } from "@/lib/utils";
import { FileUploadProps } from "@/types/common";
import Image from "next/image";
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
      {files && files.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={1000}
          height={1000}
          className="max-h-[400px] overflow-hidden object-cover"
          alt="file"
        />
      ) : (
        <>
          <div className="file-upload_label">
            <p className="text-14-regular ">
              <span className="text-green-500">Click to upload </span>
              or drag and drop
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUpload;
