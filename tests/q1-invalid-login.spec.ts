import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { invalidUser } from "../utils/testData";

test("Q1 - Invalid Login", async ({ page }) => {

  const loginPage = new LoginPage(page);

  // Arrange

  // Act

  // Assert

});