import { login } from './login';
import { logout } from './logout';
import { removeFromCart, allItemsToCart } from './cart_manipulation';

const { test, expect } = require('@playwright/test');
test.describe("Navigation", () => {
        test.beforeEach(async ({ page }) => {
                await page.goto('https://www.saucedemo.com/');
                await page.pause()
                await login(page, "standard_user")
        });
        test("Cart", async ({ page }) => {
                await allItemsToCart(page)
                await removeFromCart(page)
            
                await logout(page)
        });
});