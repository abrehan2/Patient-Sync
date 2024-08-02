"use client";

// IMPORTS -
import { createAppointment } from "@/actions/appointment";
import { Form } from "@/components/ui/form";
import { SelectItem } from "@/components/ui/select";
import { appointmentStatus, Doctors, formFieldTypes } from "@/constants/form";
import { useAppointmentForm } from "@/contexts/appointment";
import {
  appointmentSchema,
  appointmentSchemaKeys,
} from "@/schemas/appointment";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { z } from "zod";
import { CustomFormField } from "../generics/custom-form-field";
import SubmitBtn from "../generics/submit-btn";

export const AppointmentForm = ({
  userId,
  type,
  patientId,
}: appointmentFormProps) => {
  const { formHook } = useAppointmentForm();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof appointmentSchema>) => {
    let status;

    switch (type) {
      case appointmentStatus.SCHEDULE:
        status = "scheduled";
        break;

      case appointmentStatus.CANCEL:
        status = "cancelled";
        break;

      default:
        status = "pending";
        break;
    }

    try {
      if (type === "create" && patientId) {
        const appointmentData = {
          userId,
          patient: patientId,
          status: status as appointmentStatus,
          ...values,
        };
        const appointment = await createAppointment(appointmentData);

        if (appointment) {
          formHook.reset();
          toast.success("Appointment created successfully.");
          router.push(
            `/patients/${userId}/appointment/success?appointmentId=${appointment.$id}`
          );
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  let btnLabel;

  switch (type) {
    case "cancel":
      btnLabel = "Cancel appointment";
      break;

    case "create":
      btnLabel = "Create appointment";
      break;

    case "schedule":
      btnLabel = "Schedule appointment";
      break;

    default:
      break;
  }

  return (
    <Form {...formHook}>
      <form
        onSubmit={formHook.handleSubmit(onSubmit)}
        className="space-y-6 flex-1"
      >
        <section className="mb-12 space-y-4">
          <h1 className="header">Appointment</h1>
          <p className="text-slate-500">Request a new appointment.</p>
        </section>

        {type !== "cancel" && (
          <>
            <CustomFormField
              control={formHook.control}
              schemaKey={appointmentSchemaKeys.DOCTOR}
              fieldType={formFieldTypes.SELECT}
              placeholder="Select a doctor"
              label="Doctor"
            >
              {Object.values(Doctors).map((doctor) => (
                <SelectItem key={doctor} value={doctor}>
                  {doctor}
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              control={formHook.control}
              schemaKey={appointmentSchemaKeys.APPOINTMENT_DATE}
              fieldType={formFieldTypes.DATE_PICKER}
              label="Expected appointment date"
            />

            <div className="flex flex-col gap-6 xl:flex-row xl:justify-between">
              <CustomFormField
                control={formHook.control}
                schemaKey={appointmentSchemaKeys.APPOINTMENT_REASON}
                fieldType={formFieldTypes.TEXTAREA}
                label="Reason for appointment"
                placeholder="Please provide a reason for the appointment."
              />

              <CustomFormField
                control={formHook.control}
                schemaKey={appointmentSchemaKeys.ADDITIONAL_COMMENT}
                fieldType={formFieldTypes.TEXTAREA}
                label="Additional comments"
                placeholder="Any additional comments?"
              />
            </div>
          </>
        )}

        {type === "cancel" && (
          <CustomFormField
            fieldType={formFieldTypes.TEXTAREA}
            control={formHook.control}
            schemaKey={appointmentSchemaKeys.CANCEL_REASON}
            label="Reason for cancellation"
            placeholder="Please provide a reason for the cancellation."
          />
        )}

        <SubmitBtn isValid={!formHook.formState.isValid}>{btnLabel}</SubmitBtn>
      </form>
    </Form>
  );
};
