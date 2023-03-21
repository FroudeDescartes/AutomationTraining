async function stickyAddToCart(page) {
    await page.locator("#add-to-cart-sauce-labs-backpack").click()
    await page.locator("#add-to-cart-sauce-labs-bike-light").click()
    await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click()
    await page.locator("#add-to-cart-sauce-labs-onesie").click()
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    //pre funkcije serialNumberOfItem moram izbaciti sve iz korpe iz ove funkcije
    await page.locator("#shopping_cart_container").click()
    let emptyCart = page.locator(".btn btn_secondary btn_small cart_button").nth(i).click()
    for (let i = 0; i < emptyCart.length; i++) {

    }
    
}


async function serialNumberOfItem(page) {
    await page.locator(".btn btn_primary btn_small btn_inventory").nth("i").click()
    let item = await page.locator(".btn btn_primary btn_small btn_inventory").nth("i")
    for (let i = 0; i < item.length; i++) {

    }

}



export { stickyAddToCart, serialNumberOfItem }

//napraviti fju koja ubacuje element u korpu po rednom br elementa koristeci .nth()
//napraviti fju koja ubacuje proizvod u korpu po imenu
//napraviti fju koja ubacuje random proizvod u korpu
//sve u ovom fajlu