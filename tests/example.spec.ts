import { expect, test } from "@playwright/test";
import * as devData from "../data/dev-data.json";
import * as stgData from "../data/stg-data.json";
import * as prodData from "../data/prod-data.json";

test.describe('An example suite of test data for multiple environments', () => {

  let testData: any;
  process.env.ENV === 'stg' ? testData = stgData : process.env.ENV === 'prod' ? testData = prodData : testData = devData;

  test('An example test case of test data for multiple environments', async ({ page }) => {

    // Read data from .env files
    console.log(process.env.ENV);
    console.log(process.env.BASE_URL);

    // Read testData from .json files 
    console.log(testData.userName);
    console.log(testData.password);
  })
})