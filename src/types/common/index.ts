// IMPORTS -
import { formFieldTypes } from "@/constants/form";
import {
  onboardingSchemaKeys,
  onboardingSchemaType,
} from "@/schemas/onboarding";
import { Control } from "react-hook-form";

export type ReactChildren = {
  children: React.ReactNode;
};

export type customFormProps = {
  control: Control<onboardingSchemaType>;
  label?: string;
  schemaKey: onboardingSchemaKeys;
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
