"use client";

// IMPORTS -
import { registerPatient } from "@/actions/patient";
import { CustomFormField } from "@/components/generics/custom-form-field";
import FileUpload from "@/components/generics/file-upload";
import SubmitBtn from "@/components/generics/submit-btn";
import { Form, FormControl } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SelectItem } from "@/components/ui/select";
import {
  Doctors,
  formFieldTypes,
  genderOptions,
  identificationTypes,
} from "@/constants/form";
import { useRegisterForm } from "@/contexts/register";
import { convertBufferToBlob } from "@/lib/utils";
import { registerSchema, registerSchemaKeys } from "@/schemas/register";
import { User } from "@/types/common";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { z } from "zod";

export const RegisterForm = ({ user }: { user: User }) => {
  const { formHook } = useRegisterForm();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    try {
      let formData = new FormData();

      if (
        values[registerSchemaKeys.IDENTIFICATION_DOCUMENT] &&
        values[registerSchemaKeys.IDENTIFICATION_DOCUMENT].length > 0
      ) {
        const blob = convertBufferToBlob(
          values[registerSchemaKeys.IDENTIFICATION_DOCUMENT][0],
          values[registerSchemaKeys.IDENTIFICATION_DOCUMENT][0].type
        );

        formData.append(registerSchemaKeys.IDENTIFICATION_DOCUMENT, blob);
        formData.append(
          registerSchemaKeys.IDENTIFICATION_TYPE,
          values[registerSchemaKeys.IDENTIFICATION_TYPE]
        );

        formData.append(
          "fileName",
          values[registerSchemaKeys.IDENTIFICATION_DOCUMENT][0].name
        );
      }

      const patientData = {
        ...values,
        userId: user.$id,

        identificationDocument: formData,
      };

      const patient = await registerPatient(patientData);

      if (patient) {
        toast.success("Patient registered successfully.");
        router.push(`/patients/${user.$id}/appointment`);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
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
          <div className="mb-6 space-y-1">
            <h2 className="text-slate-500 sub-header">Personal Information</h2>
          </div>
        </section>
        <CustomFormField
          control={formHook.control}
          schemaKey={registerSchemaKeys.FULL_NAME}
          fieldType={formFieldTypes.INPUT}
          placeholder="Abdul Rehan"
          label="Name"
        />

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.EMAIL}
            fieldType={formFieldTypes.INPUT}
            placeholder="rehannajam2@gmail.com"
            label="Email"
          />

          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.PHONE_NUMBER}
            fieldType={formFieldTypes.PHONE_INPUT}
            placeholder="+1234567890"
            label="Phone Number"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.BIRTH}
            fieldType={formFieldTypes.DATE_PICKER}
            label="Date of Birth"
          />

          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.GENDER}
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
                      <Label htmlFor={option} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.ADDRESS}
            fieldType={formFieldTypes.INPUT}
            placeholder="F-10/4, Islamabad"
            label="Address"
          />

          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.OCCUPATION}
            fieldType={formFieldTypes.INPUT}
            placeholder="Software Engineer"
            label="Occupation"
          />
        </div>

        <section className="space-y-6">
          <div className="mb-6 space-y-1">
            <h2 className="text-slate-500 sub-header">Medical Information</h2>
          </div>
        </section>
        <CustomFormField
          control={formHook.control}
          schemaKey={registerSchemaKeys.PRIMARY_PHYSICIAN}
          fieldType={formFieldTypes.SELECT}
          placeholder="Select a physician"
          label="Primary Physician"
        >
          {Object.values(Doctors).map((doctor) => (
            <SelectItem key={doctor} value={doctor}>
              {doctor}
            </SelectItem>
          ))}
        </CustomFormField>

        <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.ALLERGIES}
            fieldType={formFieldTypes.TEXTAREA}
            placeholder="Pollen, Penicillin, etc."
            label="Allergies (if any)"
          />

          <CustomFormField
            control={formHook.control}
            schemaKey={registerSchemaKeys.CURRENT_MEDICATION}
            fieldType={formFieldTypes.TEXTAREA}
            placeholder="Aspirin, etc."
            label="Current medication (if any)"
          />
        </div>
        <section className="space-y-6">
          <div className="mb-6 space-y-1">
            <h2 className="text-slate-500 sub-header">
              Identification and Verification
            </h2>
          </div>
        </section>

        <CustomFormField
          control={formHook.control}
          schemaKey={registerSchemaKeys.IDENTIFICATION_TYPE}
          fieldType={formFieldTypes.SELECT}
          placeholder="Select an identification type"
          label="Identification Type"
        >
          {Object.values(identificationTypes).map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          control={formHook.control}
          schemaKey={registerSchemaKeys.IDENTIFICATION_NUMBER}
          fieldType={formFieldTypes.INPUT}
          placeholder="1234567890"
          label="Identification Number"
        />

        <CustomFormField
          control={formHook.control}
          schemaKey={registerSchemaKeys.IDENTIFICATION_DOCUMENT}
          fieldType={formFieldTypes.SKELETON}
          label="Scanned copy of identification document"
          renderSkeleton={(field) => (
            <FormControl>
              <FileUpload files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />

        <SubmitBtn isValid={!formHook.formState.isValid}>Submit</SubmitBtn>
      </form>
    </Form>
  );
};
