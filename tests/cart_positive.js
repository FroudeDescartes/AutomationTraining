async function cartPositive(page, firstName, lastName, zipCode) {
    await page.locator("#shopping_cart_container").click()
    await page.locator("#checkout").click()
    await page.locator("#first-name").type(firstName)
    await page.locator("#last-name").type(lastName)
    await page.locator("#postal-code").type(zipCode)
    await page.locator("#continue").click()
    await page.locator("#finish").click()
    await page.locator("#back-to-products").click()

}

export { cartPositive }