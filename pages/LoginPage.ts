import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // এখানে পরে locator গুলো লিখবেন

  constructor(page: Page) {
    this.page = page;
    // এখানে locator গুলো initialize করবেন
  }

  // এখানে পরে methods লিখবেন (যেমন: goto, login, getErrorMessage ইত্যাদি)
}