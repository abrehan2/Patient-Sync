// IMPORTS -
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// CLASSNAMES -
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// PARSE STRINGIFY -
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

// CONVERT FILE TO URL -
export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

// CONVERT ARRAY BUFFER TO BLOB -
export const convertBufferToBlob = (buffer: File, type: any) => {
  return new Blob([buffer], { type });
};
