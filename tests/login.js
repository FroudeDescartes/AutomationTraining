import { expect } from "@playwright/test"

async function login(page, username, password = "secret_sauce") {
       await page.locator("#user-name").type(username)
       await page.locator("#password").type(password)
       await expectUsername(page, username)
       await expectPassword(page, password)
       await page.keyboard.press("Enter")
}

async function expectUsername(page, username) {
       let loginUsername = await page.locator("#user-name").inputValue()
       expect(loginUsername).toBe(username)
}

async function expectPassword(page, password) {
       let loginPassword = await page.locator("#password").inputValue()
       expect(loginPassword).toBe(password)
}

export { login }