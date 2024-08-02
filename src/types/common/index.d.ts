// IMPORTS -
import { formFieldTypes } from "@/constants/form";
import { appointmentSchemaKeys } from "@/schemas/appointment";
import {
  onboardingSchemaKeys,
  onboardingSchemaType,
} from "@/schemas/onboarding";
import { registerSchemaKeys, registerSchemaType } from "@/schemas/register";
import { Control } from "react-hook-form";

declare type ReactChildren = {
  children: React.ReactNode;
};

declare type customFormProps = {
  control: Control<any>;
  label?: string;
  schemaKey: onboardingSchemaKeys | registerSchemaKeys | appointmentSchemaKeys;
  fieldType: formFieldTypes;
  disabled?: boolean;
  placeholder?: string;
  dateFormat?: string;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
};

declare type buttonProps = {
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

declare type FileUploadProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};
