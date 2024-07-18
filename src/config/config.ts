export const config = {
  APP_WRITE_PROJECT_ID: process.env.NEXT_APP_WRITE_PROJECT_ID || "",
  APP_WRITE_SECRET_API: process.env.NEXT_APP_WRITE_SECRET_API || "",
  APP_WRITE_DB_ID: process.env.NEXT_APP_WRITE_DB_ID || "",
  APP_WRITE_PATIENT_COLLECTION_ID:
    process.env.NEXT_APP_WRITE_PATIENT_COLLECTION_ID || "",

  APP_WRITE_DOCTOR_COLLECTION_ID:
    process.env.NEXT_APP_WRITE_DOCTOR_COLLECTION_ID || "",

  APP_WRITE_APPOINTMENT_COLLECTION_ID:
    process.env.NEXT_APP_WRITE_APPOINTMENT_COLLECTION_ID || "",

  APP_WRITE_STORAGE_BUCKET_ID:
    process.env.NEXT_APP_WRITE_STORAGE_BUCKET_ID || "",
};
