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
    await expectRemoveFromCart(page)
    await continueShopping(page)
}


async function allItemsToCart(page) {
    let itemCount = await page.locator(".inventory_item").count()
    for (let i = 0; i < itemCount; i++) {
        await page.locator(".inventory_item button").nth(i).click()
    }
    await expectItemsInCart(page, itemCount)
}


async function randomItem(page) {
    let itemCount = await page.locator(".inventory_item").count()
    let randomItemNumber = Math.floor(Math.random() * itemCount)
    await page.locator(".inventory_item button").nth(randomItemNumber).click()
    await expectRandomItem(page)
    await continueShopping(page)
}

//assertions are made as separate subfunctions as every repetitive task
async function expectRemoveFromCart(page) {
    let noItem = page.locator(".cart_item")
    await expect(noItem).toBeHidden()
}

async function expectItemsInCart(page, itemCount) {
    let itemsInCart = await page.locator(".shopping_cart_badge").innerHTML()
    let itemsInCartNum = parseInt(itemsInCart)
    expect(itemsInCartNum).toBe(itemCount)
}

async function expectRandomItem(page) {
    await page.locator("#shopping_cart_container").click()
    let itemAdded = page.locator(".cart_item")
    await expect(itemAdded).toBeVisible()
}

async function continueShopping(page) {
    await page.locator("#continue-shopping").click()
}

export { stickyAddToCart, removeFromCart, allItemsToCart, randomItem }