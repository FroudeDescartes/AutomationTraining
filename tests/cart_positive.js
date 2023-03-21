//import { checkoutCredentials } from "./checkout_credentials"

async function cartPositive(page/*,firstName, lastName, zipCode*/) {
    await page.locator("#shopping_cart_container").click()
    await page.locator("#checkout").click()
    //await checkoutCredentials(page, "Pera", "Peric", "11000")
    await page.locator("#first-name").type("Pera")
    await page.locator("#last-name").type("Peric")
    await page.locator("#postal-code").type("11000")
    await page.locator("#continue").click()
    await page.locator("#finish").click()
    await page.locator("#back-to-products").click()

}

export { cartPositive }