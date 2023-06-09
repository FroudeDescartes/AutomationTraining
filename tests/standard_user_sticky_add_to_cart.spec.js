// @ts-check
import { login } from './login';
import { logout } from './logout';
import { stickyAddToCart, removeFromCart } from './cart_manipulation';

const { test, expect } = require('@playwright/test');
test.describe("Navigation", () => {
        test.beforeEach(async ({ page }) => {
                await page.goto('https://www.saucedemo.com/');
                await page.pause()
                await login(page, "standard_user")
        });
        test("Cart", async ({ page }) => {
                await stickyAddToCart(page)
                await removeFromCart(page)

                await logout(page)
        });
});