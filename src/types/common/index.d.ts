// IMPORTS -
import { formFieldTypes } from "@/constants/form";
import {
  onboardingSchemaKeys,
  onboardingSchemaType,
} from "@/schemas/onboarding";
import { registerSchemaKeys, registerSchemaType } from "@/schemas/register";
import { Control } from "react-hook-form";

export type ReactChildren = {
  children: React.ReactNode;
};

export type customFormProps = {
  control: Control<any>;
  label?: string;
  schemaKey: onboardingSchemaKeys | registerSchemaKeys;
  fieldType: formFieldTypes;
  disabled?: boolean;
  placeholder?: string;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
};

export type buttonProps = {
  isValid: boolean;
  className?: string;
  children: React.ReactNode;
};

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}
