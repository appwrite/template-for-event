import { Client } from "appwrite";

export const AppwriteClient = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_API_ENDPOINT ?? "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_PROJECT_ID ?? "");
