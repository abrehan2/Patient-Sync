// IMPORTS -
import { z } from "zod";
import {
  birthSchema,
  documentSchema,
  emailSchema,
  genderSchema,
  identificationTypeSchema,
  nameSchema,
  phoneNumberSchema,
} from "../common";

export enum registerSchemaKeys {
  FULL_NAME = "fullName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  BIRTH = "birth",
  GENDER = "gender",
  ADDRESS = "address",
  OCCUPATION = "occupation",
  PRIMARY_PHYSICIAN = "primaryPhysician",
  ALLERGIES = "allergies",
  CURRENT_MEDICATION = "currentMedication",
  IDENTIFICATION_TYPE = "identificationType",
  IDENTIFICATION_NUMBER = "identificationNumber",
  IDENTIFICATION_DOCUMENT = "identificationDocument",
}

export const registerSchema = z.object({
  [registerSchemaKeys.FULL_NAME]: nameSchema,
  [registerSchemaKeys.EMAIL]: emailSchema,
  [registerSchemaKeys.PHONE_NUMBER]: phoneNumberSchema,
  [registerSchemaKeys.BIRTH]: birthSchema,
  [registerSchemaKeys.GENDER]: genderSchema,
  [registerSchemaKeys.ADDRESS]: z.string().min(1, "Address is required"),
  [registerSchemaKeys.OCCUPATION]: z.string().min(1, "Occupation is required"),
  [registerSchemaKeys.PRIMARY_PHYSICIAN]: z
    .string()
    .min(1, "Primary physician is required"),
  [registerSchemaKeys.ALLERGIES]: z.string().optional(),
  [registerSchemaKeys.CURRENT_MEDICATION]: z.string().optional(),
  [registerSchemaKeys.IDENTIFICATION_TYPE]: identificationTypeSchema,
  [registerSchemaKeys.IDENTIFICATION_NUMBER]: z
    .string()
    .min(1, "Identification number is required"),
  [registerSchemaKeys.IDENTIFICATION_DOCUMENT]: documentSchema,
});

export type registerSchemaType = z.infer<typeof registerSchema>;
