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

export const usernameSchema = z.string().min(2, {
  message: "Username must be at least 2 characters.",
});

const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
export const phoneNumberSchema = z
  .string()
  .refine((val) => phoneNumberRegex.test(val), {
    message: "Please enter a valid phone number.",
  });
