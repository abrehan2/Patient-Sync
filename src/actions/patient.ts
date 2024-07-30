"use server";

// IMPORTS -
import { databases, storage, users } from "@/config/appwrite.config";
import { config } from "@/config/config";
import { parseStringify } from "@/lib/utils";
import { registerSchemaKeys } from "@/schemas/register";
import { CreateUserParams, RegisterUserParams } from "@/types/actions/patient";
import { ID, Query } from "node-appwrite";
import { InputFile } from "node-appwrite/file";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phoneNumber,
      undefined,
      user.fullName
    );

    return parseStringify(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error: any) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;

    if (identificationDocument) {
      const inputFile = InputFile.fromBuffer(
        identificationDocument.get(
          registerSchemaKeys.IDENTIFICATION_DOCUMENT
        ) as Blob,
        identificationDocument.get("fileName") as string
      );

      file = await storage.createFile(
        config.APP_WRITE_STORAGE_BUCKET_ID,
        ID.unique(),
        inputFile
      );
    }

    const newPatient = await databases.createDocument(
      config.APP_WRITE_DB_ID,
      config.APP_WRITE_PATIENT_COLLECTION_ID,
      ID.unique(),
      {
        identificationDocumentID: file?.$id,
        identificationDocumentUrl: `${config.PUBLIC_ENDPOINT}/storage/buckets/${config.APP_WRITE_STORAGE_BUCKET_ID}/files/
        ${file?.$id}/view?project=${config.APP_WRITE_PROJECT_ID}`,
        ...patient,
      }
    );
    console.log(newPatient);
    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};
