import { expect } from "@playwright/test"

async function cartNegative(page) {
    await page.locator("#shopping_cart_container").click()
    let checkCartEmpty = page.locator(".cart_list")
    await expect(checkCartEmpty).not.toHaveText("Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Fleece Jacket, Sauce Labs Bolt T-Shirt, Sauce Labs Onesie, Test.allTheThings() T-Shirt (Red)")
    await page.locator("#continue-shopping").click()
}

export { cartNegative }