async function cartNegative(page) {
    await page.locator("#shopping_cart_container").click()
    //fali kod koji ce potvrditi da nema nista u cart-u
    await page.locator("#continue-shopping").click()
}

export { cartNegative }