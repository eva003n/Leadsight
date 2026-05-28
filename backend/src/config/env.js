import { getAbsoluteFilePath } from "../utils/index.js";

const environment = process.env.NODE_ENV || "development";

const isProduction = environment === "production";

if (!isProduction) {

  const { config } = await import("dotenv");

  config({
    path: getAbsoluteFilePath(import.meta.url, "../../.env"),
  });
}

export const { NODE_ENV, PORT, BASE_URL, VERIFY_TOKEN } = process.env;
