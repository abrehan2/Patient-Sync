// IMPORTS -
import { z } from "zod";
import { emailSchema, nameSchema, phoneNumberSchema } from "../common";

export enum registerSchemaKeys {
  FULL_NAME = "fullName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  BIRTH = "birth",
  GENDER = "gender",
}

export const registerSchema = z.object({
  [registerSchemaKeys.FULL_NAME]: nameSchema,
  [registerSchemaKeys.EMAIL]: emailSchema,
  [registerSchemaKeys.PHONE_NUMBER]: phoneNumberSchema,
  [registerSchemaKeys.BIRTH]: z.string().trim(),
  [registerSchemaKeys.GENDER]: z.string().trim(),
});

export type registerSchemaType = z.infer<typeof registerSchema>;
