// IMPORTS -
import { z } from "zod";
import { emailSchema, nameSchema, phoneNumberSchema } from "../common";

export enum registerSchemaKeys {
  FULL_NAME = "fullName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
}

export const registerSchema = z.object({
  [registerSchemaKeys.FULL_NAME]: nameSchema,
  [registerSchemaKeys.EMAIL]: emailSchema,
  [registerSchemaKeys.PHONE_NUMBER]: phoneNumberSchema,
});

export type registerSchemaType = z.infer<typeof registerSchema>;
