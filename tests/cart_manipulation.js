import { expect } from "@playwright/test"

async function stickyAddToCart(page) {
    await page.locator("#add-to-cart-sauce-labs-backpack").click()
    await page.locator("#add-to-cart-sauce-labs-bike-light").click()
    await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click()
    await page.locator("#add-to-cart-sauce-labs-onesie").click()
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
}

//Before function serialNumberOfItem, cart needs to be empty, so:
async function removeFromCart(page) {
    await page.locator("#shopping_cart_container").click()
    await page.locator('#remove-sauce-labs-bike-light').click()
    await page.locator('#remove-sauce-labs-backpack').click()
    await page.locator('#remove-sauce-labs-bolt-t-shirt').click()
    await page.locator('#remove-sauce-labs-fleece-jacket').click()
    await page.locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click()
    await page.locator('#remove-sauce-labs-onesie').click()
}


/*async function serialNumberOfItem(page) {
    await page.locator(".btn btn_primary btn_small btn_inventory").nth("i").click()
    let item = await page.locator(".btn btn_primary btn_small btn_inventory").nth("i")
    for (let i = 0; i < item.length; i++) {

    }

}*/



export { stickyAddToCart, removeFromCart, /*serialNumberOfItem*/ }

//napraviti fju koja ubacuje element u korpu po rednom br elementa koristeci .nth()
//napraviti fju koja ubacuje proizvod u korpu po imenu
//napraviti fju koja ubacuje random proizvod u korpu
//sve u ovom fajlu