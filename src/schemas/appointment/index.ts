// IMPORTS -
import { z } from 'zod'
import { appointmentDateSchema } from '../common'

export enum appointmentSchemaKeys {
  DOCTOR = 'doctor',
  APPOINTMENT_REASON = 'appointmentReason',
  ADDITIONAL_COMMENT = 'additionalComment',
  APPOINTMENT_DATE = 'appointmentDate',
  CANCEL_REASON = 'cancelReason',
}

export const appointmentSchema = z.object({
  [appointmentSchemaKeys.DOCTOR]: z.string().min(1, 'Plese select a doctor.'),
  [appointmentSchemaKeys.APPOINTMENT_REASON]: z
    .string()
    .min(1, 'Please provide a reason for the appointment.'),
  [appointmentSchemaKeys.ADDITIONAL_COMMENT]: z.string().optional(),
  [appointmentSchemaKeys.APPOINTMENT_DATE]: appointmentDateSchema,
  [appointmentSchemaKeys.CANCEL_REASON]: z.string().optional(),
})

export type appointmentSchemaType = z.infer<typeof appointmentSchema>
