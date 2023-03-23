import { login } from './login';
import { logout } from './logout';
import { randomItem } from './cart_manipulation';
import { cartPositive } from './cart_positive';
import { cartNegative } from './cart_negative';

const { test, expect } = require('@playwright/test');
test.describe("Navigation", () => {
        test.beforeEach(async ({ page }) => {
                await page.goto('https://www.saucedemo.com/');
                await page.pause()
                await login(page, "standard_user")
        });
        test("Cart", async ({ page }) => {
                await randomItem(page)
                await cartPositive(page,"Pera", "Peric", "11000")
                await cartNegative(page)
                
                await logout(page)
        });
});