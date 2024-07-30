// IMPORTS -
import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userId: string;
  fullName: string;
  email: string;
  phone: string;
  birth: string;
  gender: Gender;
  address: string;
  occupation: string;
  primaryPhysician: string;
  allergies?: string;
  currentMedication?: string;
  identificationType: string;
  identificationNumber: string;
  identificationDocument: FormData;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
