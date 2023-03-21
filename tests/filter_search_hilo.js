import { expect } from "@playwright/test";

async function filterSearchHiLo(page) {
    await page.locator('[data-test="product_sort_container"]').selectOption('hilo');

    //provera filtera high to low
    let hilo1 = page.locator('.inventory_item_price>>nth=0')
    await expect(hilo1).toHaveText("$49.99");

    let hilo2 = page.locator('.inventory_item_price>>nth=1')
    await expect(hilo2).toHaveText("$29.99");

    let hilo3 = page.locator('.inventory_item_price>>nth=2')
    await expect(hilo3).toHaveText("$15.99");

    let hilo4 = page.locator('.inventory_item_price>>nth=3')
    await expect(hilo4).toHaveText("$15.99");

    let hilo5 = page.locator('.inventory_item_price>>nth=4')
    await expect(hilo5).toHaveText("$9.99");


    let hilo6 = page.locator('.inventory_item_price>>nth=5')
    await expect(hilo6).toHaveText("$7.99");
}

export { filterSearchHiLo }