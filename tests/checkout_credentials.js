async function checkoutCredentials(page, firstName, lastName, zipCode) { //da li sam mogao JSON fajl da napravim i iskoristim
    await page.locator("#first-name").type(firstName)
    await page.locator("#last-name").type(lastName)
    await page.locator("#last-name").type(zipCode)// do ovde da bude JSON fajl
    await page.locator("#continue").click()
    await page.locator("#finish").click()
    await page.locator("#back-to-products").click()
}

export { checkoutCredentials }