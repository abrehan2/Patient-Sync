// IMPORTS -
import { z } from "zod";
import { emailSchema, phoneNumberSchema, usernameSchema } from "../common";

export enum onboardingSchemaKeys {
  USERNAME = "username",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
}

export const onboardingSchema = z.object({
  [onboardingSchemaKeys.USERNAME]: usernameSchema,
  [onboardingSchemaKeys.EMAIL]: emailSchema,
  [onboardingSchemaKeys.PHONE_NUMBER]: phoneNumberSchema,
});

export type onboardingSchemaType = z.infer<typeof onboardingSchema>;
