"use client";

// IMPORTS -
import { createUser } from "@/actions/patient";
import SubmitBtn from "@/components/generics/submit-btn";
import { Form, FormControl } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formFieldTypes, genderOptions } from "@/constants/form";
import { useRegisterForm } from "@/contexts/register";
import { onboardingSchema, onboardingSchemaKeys } from "@/schemas/onboarding";
import { User } from "@/types/common";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { CustomFormField } from "../generics/custom-form-field";
import { Label } from "../ui/label";

export const RegisterForm = ({ user }: { user: User }) => {
  const { formHook } = useRegisterForm();
  const router = useRouter();

  console.log(formHook);

  const onSubmit = async (values: z.infer<typeof onboardingSchema>) => {
    try {
      const user = await createUser(values);

      if (user) {
        router.push(`/patients/${user.$id}/register`);
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  return (
    <Form {...formHook}>
      <form
        onSubmit={formHook.handleSubmit(onSubmit)}
        className="space-y-6 flex-1"
      >
        <section className="space-y-4">
          <h1 className="header">Welcome!</h1>
          <p className="text-slate-500">Let us know more about yourself.</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="text-slate-500 sub-header">Personal Information</h2>
          </div>
        </section>
        <CustomFormField
          control={formHook.control}
          schemaKey={onboardingSchemaKeys.FULL_NAME}
          fieldType={formFieldTypes.INPUT}
          placeholder="Abdul Rehan"
          label="Full Name"
        />

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          <CustomFormField
            control={formHook.control}
            schemaKey={onboardingSchemaKeys.EMAIL}
            fieldType={formFieldTypes.DATE_PICKER}
            label="Date of Birth"
          />

          <CustomFormField
            control={formHook.control}
            schemaKey={onboardingSchemaKeys.PHONE_NUMBER}
            fieldType={formFieldTypes.SKELETON}
            placeholder="+1234567890"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {Object.values(genderOptions).map((option) => (
                    <div className="radio-group" key={option}>
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="cursor-point">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <SubmitBtn isValid={!formHook.formState.isValid}>Submit</SubmitBtn>
      </form>
    </Form>
  );
};
