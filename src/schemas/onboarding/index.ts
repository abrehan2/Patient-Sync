// IMPORTS -
import { z } from "zod";
import { emailSchema, nameSchema, phoneNumberSchema } from "../common";

export enum onboardingSchemaKeys {
  FULL_NAME = "fullName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
}

export const onboardingSchema = z.object({
  [onboardingSchemaKeys.FULL_NAME]: nameSchema,
  [onboardingSchemaKeys.EMAIL]: emailSchema,
  [onboardingSchemaKeys.PHONE_NUMBER]: phoneNumberSchema,
});

export type onboardingSchemaType = z.infer<typeof onboardingSchema>;
