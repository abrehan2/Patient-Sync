// IMPORTS -
import { genderOptions, identificationTypes } from '@/constants/form'
import { z } from 'zod'

export const emailSchema = z
  .string()
  .min(1, {
    message: 'Email is required.',
  })
  .email({
    message: 'Please enter a valid email address.',
  })

export const nameSchema = z
  .string()
  .min(5, {
    message: 'Name must be at least 5 characters.',
  })
  .trim()

const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/
export const phoneNumberSchema = z.string().refine((val) => phoneNumberRegex.test(val), {
  message: 'Please enter a valid phone number.',
})

export const documentSchema = z.custom<File[]>().refine(
  (data) => {
    return data?.length > 0
  },
  {
    message: 'Identification document is required.',
  },
)

export const birthSchema = z.string().refine(
  (date) => {
    const birth = new Date(date)
    const now = new Date()
    return birth < now
  },
  {
    message: 'Date of birth must be in the past',
  },
)

export const genderSchema = z.enum([genderOptions.MALE, genderOptions.FEMALE, genderOptions.OTHER])

export const identificationTypeSchema = z.enum([
  identificationTypes.BIRTH_CERTIFICATE,
  identificationTypes.CNIC,
  identificationTypes.DRIVER_LICENSE,
  identificationTypes.PASSPORT,
])

export const appointmentDateSchema = z.string().refine(
  (date) => {
    const day = new Date(date)
    const now = new Date()
    return day > now
  },
  {
    message: 'Appointment date must be in the future.',
  },
)
