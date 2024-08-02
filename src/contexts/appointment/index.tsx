"use client";

// IMPORTS -
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useMemo } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import {
  appointmentSchema,
  appointmentSchemaKeys,
  appointmentSchemaType,
} from "@/schemas/appointment";
import { ReactChildren } from "@/types/common";

export const AppointmentFormProvider = ({ children }: ReactChildren) => {
  const formHook = useForm<appointmentSchemaType>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      [appointmentSchemaKeys.DOCTOR]: "",
      [appointmentSchemaKeys.ADDITIONAL_COMMENT]: "",
      [appointmentSchemaKeys.APPOINTMENT_REASON]: "",
      [appointmentSchemaKeys.APPOINTMENT_DATE]: undefined,
      [appointmentSchemaKeys.CANCEL_REASON]: "",
    },
    mode: "onChange",
  });

  return <FormProvider {...formHook}>{children}</FormProvider>;
};

export const useAppointmentForm = () => {
  const formHook = useFormContext<appointmentSchemaType>();

  return useMemo(() => ({ formHook }), [formHook]);
};
