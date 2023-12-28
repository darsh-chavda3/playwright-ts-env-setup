import { FullConfig } from "@playwright/test";
import dotenv from "dotenv";

export default async function globalSetup(config: FullConfig) {

  if (process.env.test_env) {
    dotenv.config({
      path: `.env.${process.env.test_env}`,
      override: true
    })
  }
}