"use client";

// IMPORTS -
import { Form } from "@/components/ui/form";
import { formFieldTypes } from "@/constants/form";
import { useOnboardingForm } from "@/contexts/onboarding";
import { onboardingSchema, onboardingSchemaKeys } from "@/schemas/onboarding";
import { z } from "zod";
import { CustomFormField } from "../generics/custom-form-field";
import SubmitBtn from "../generics/submit-btn";

export const OnboardingForm = () => {
  const { formHook } = useOnboardingForm();

  const onSubmit = (values: z.infer<typeof onboardingSchema>) => {
    console.log(values);
  };

  return (
    <Form {...formHook}>
      <form
        onSubmit={formHook.handleSubmit(onSubmit)}
        className="space-y-6 flex-1"
      >
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there! Welcome to Patient Sync.</h1>
          <p className="text-slate-500">Schedule your first appointment.</p>
        </section>
        <CustomFormField
          control={formHook.control}
          schemaKey={onboardingSchemaKeys.USERNAME}
          fieldType={formFieldTypes.INPUT}
          placeholder="abrehan_"
          label="Username"
        />

        <CustomFormField
          control={formHook.control}
          schemaKey={onboardingSchemaKeys.EMAIL}
          fieldType={formFieldTypes.INPUT}
          placeholder="rehannajam2@gmail.com"
          label="Email"
        />

        <CustomFormField
          control={formHook.control}
          schemaKey={onboardingSchemaKeys.PHONE_NUMBER}
          fieldType={formFieldTypes.PHONE_INPUT}
          placeholder="+1234567890"
          label="Phone Number"
        />
        <SubmitBtn isValid={!formHook.formState.isValid}>Submit</SubmitBtn>
      </form>
    </Form>
  );
};
