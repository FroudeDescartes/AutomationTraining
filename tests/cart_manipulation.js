import { expect } from "@playwright/test"

async function stickyAddToCart(page) {
    await page.locator("#add-to-cart-sauce-labs-backpack").click()
    await page.locator("#add-to-cart-sauce-labs-bike-light").click()
    await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click()
    await page.locator("#add-to-cart-sauce-labs-onesie").click()
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    let addedToCart = await page.locator(".shopping_cart_badge").innerHTML()
    let addedToCartNum = parseInt(addedToCart)
    expect(addedToCartNum).toBe(6)
}


async function removeFromCart(page) {
    await page.locator("#shopping_cart_container").click()

    let cartItemCount = await page.locator(".cart_item").count()
    for (let i = cartItemCount - 1; i >= 0; i--) {
        await page.locator(".cart_item button").nth(i).click()
    }
    let noItem = page.locator(".cart_item")
    await expect(noItem).toBeHidden()
    await page.locator("#continue-shopping").click()
}


async function allItemsToCart(page) {
    let itemCount = await page.locator(".inventory_item").count()
    for (let i = 0; i < itemCount; i++) {
        await page.locator(".inventory_item button").nth(i).click()
    }
    let itemsInCart = await page.locator(".shopping_cart_badge").innerHTML()
    let itemsInCartNum = parseInt(itemsInCart)
    expect(itemsInCartNum).toBe(itemCount)
}


async function randomItem(page) {
    let itemCount = await page.locator(".inventory_item").count()
    let randomItemNumber = Math.floor(Math.random() * itemCount)
    await page.locator(".inventory_item button").nth(randomItemNumber).click()

    await page.locator("#shopping_cart_container").click()
    let itemAdded = page.locator(".cart_item")
    await expect(itemAdded).toBeVisible()
    await page.locator("#continue-shopping").click()
}


export { stickyAddToCart, removeFromCart, allItemsToCart, randomItem }

//every repetitive task needs to be made as separate function and then called in places where it need to occur, so that is my next goal