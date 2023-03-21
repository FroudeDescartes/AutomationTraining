import { expect } from "@playwright/test";

async function filterSearchLoHi(page) {
    await page.locator('[data-test="product_sort_container"]').selectOption('lohi');

    //provera filtera low to high
    let lohi1 = page.locator('.inventory_item_price>>nth=0')
    await expect(lohi1).toHaveText("$7.99");

    let lohi2 = page.locator('.inventory_item_price>>nth=1')
    await expect(lohi2).toHaveText("$9.99");

    let lohi3 = page.locator('.inventory_item_price>>nth=2')
    await expect(lohi3).toHaveText("$15.99");

    let lohi4 = page.locator('.inventory_item_price>>nth=3')
    await expect(lohi4).toHaveText("$15.99");

    let lohi5 = page.locator('.inventory_item_price>>nth=4')
    await expect(lohi5).toHaveText("$29.99");

    let lohi6 = page.locator('.inventory_item_price>>nth=5')
    await expect(lohi6).toHaveText("$49.99");
}

export {filterSearchLoHi}