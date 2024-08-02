"use server";

// IMPORTS -
import { databases } from "@/config/appwrite.config";
import { config } from "@/config/config";
import { parseStringify } from "@/lib/utils";
import { ID } from "node-appwrite";

export const createAppointment = async (appointment: any) => {
  try {
    const newAppointment = await databases.createDocument(
      config.APP_WRITE_DB_ID,
      config.APP_WRITE_APPOINTMENT_COLLECTION_ID,
      ID.unique(),
      appointment
    );

    return parseStringify(newAppointment);
  } catch (error) {
    console.error("An error occurred while creating a new appointment:", error);
  }
};
