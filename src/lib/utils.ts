// IMPORTS -
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// CLASSNAMES -
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// PARSE STRINGIFY -
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value))

// CONVERT FILE TO URL -
export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

// CONVERT ARRAY BUFFER TO BLOB -
export const convertBufferToBlob = (buffer: File, type: any) => {
  return new Blob([buffer], { type })
}

// ENCRYPT KEY -
export function encryptKey(passkey: string) {
  return btoa(passkey)
}

// DECRYPT KEY -
export function decryptKey(passkey: string) {
  return atob(passkey)
}
