import { expect } from "@playwright/test"

async function login(page, username, password = "secret_sauce") {
       await page.locator("#user-name").type(username)
       await page.locator("#password").type(password)
       await page.keyboard.press("Enter")
}

export { login }