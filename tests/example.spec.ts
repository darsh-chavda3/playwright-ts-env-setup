import { expect, test } from "@playwright/test";
import * as data from "../data/data.json";

test.describe("An example suite of test data for multiple environments", () => {
  const env: string = (process.env.ENV || "dev").toLowerCase();
  const testData = data[env];

  test("An example test case of test data for multiple environments", async ({ page }) => {
    // Read data from .env files
    console.log(env);
    console.log(process.env.BASE_URL);

    // Read testData from .json files
    console.log(testData.userName);
    console.log(testData.password);
  });
});
