// @ts-check
import { login } from './login';
const { test, expect } = require('@playwright/test');
test("User locked out", async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.pause()
        await login(page, "locked_out_user");
        await page.keyboard.press("Enter")
        let ErrorMessage = page.locator(".error-message-container > h3:nth-child(1)")//,{ hasText: /.*Epic sadface: Sorry, this user has been locked out.*./ })
        await expect(ErrorMessage).toBeVisible()
});