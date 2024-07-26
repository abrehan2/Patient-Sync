"use server";

// IMPORTS -
import { users } from "@/config/appwrite.config";
import { parseStringify } from "@/lib/utils";
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
  } catch (error: any) {
    if (error && error?.code === 409) {
      const documents = await users.list([Query.equal("email", [user.email])]);

      return documents.users[0];
    }
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error: any) {
    console.log("ERROR: ", error);
  }
};
