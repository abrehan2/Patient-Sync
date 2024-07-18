// IMPORTS -
import * as sdk from "node-appwrite";
import { config } from "./config";

const client = new sdk.Client();
client
  .setEndpoint(config.PUBLIC_ENDPOINT)
  .setProject(config.APP_WRITE_PROJECT_ID)
  .setKey(config.APP_WRITE_SECRET_API);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
