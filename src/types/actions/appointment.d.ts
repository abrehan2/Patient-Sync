// IMPORTS -
import { appointmentStatus } from "@/constants/form";

declare type appointmentProps = {
  userId: string;
  patient: string;
  status: appointmentStatus;
  doctor: string;
  appointmentReason: string;
  additionalComment?: string;
  appointmentDate: string;
  cancelReason?: string;
};
