// IMPORTS -
import { z } from "zod";

export const emailSchema = z
  .string()
  .min(1, {
    message: "Email is required.",
  })
  .email({
    message: "Please enter a valid email address.",
  });

export const nameSchema = z
  .string()
  .min(5, {
    message: "Name must be at least 5 characters.",
  })
  .trim();

const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
export const phoneNumberSchema = z
  .string()
  .refine((val) => phoneNumberRegex.test(val), {
    message: "Please enter a valid phone number.",
  });
