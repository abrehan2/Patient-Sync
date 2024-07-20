"use server";

// IMPORTS -
import { users } from "@/config/appwrite.config";
import { config } from "@/config/config";
import { createUserParams } from "@/types/actions/patient";
import { ID, Query } from "node-appwrite";

export const createUser = async (user: createUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phoneNumber,
      undefined,
      user.fullName
    );

    console.log(newUser);
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents.users[0];
    }
  }
};
