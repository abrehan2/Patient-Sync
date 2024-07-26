"use client";

// IMPORTS -
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
  onboardingSchema,
  onboardingSchemaKeys,
  onboardingSchemaType,
} from "@/schemas/onboarding";
import { ReactChildren } from "@/types/common";

export const OnboardingFormProvider = ({ children }: ReactChildren) => {
  const formHook = useForm<onboardingSchemaType>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      [onboardingSchemaKeys.FULL_NAME]: "",
      [onboardingSchemaKeys.EMAIL]: "",
      [onboardingSchemaKeys.PHONE_NUMBER]: "",
    },
    mode: "onChange",
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useOnboardingForm = () => {
  const formHook = useFormContext<onboardingSchemaType>();

  return useMemo(() => ({ formHook }), [formHook]);
};
