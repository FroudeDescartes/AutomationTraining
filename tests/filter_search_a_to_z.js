import { expect } from "@playwright/test";

async function filterSearchAToZ(page) {
    await page.locator('[data-test="product_sort_container"]').selectOption('az');

    //provera filtera A-Z
    let az1 = page.locator(".inventory_item_name>>nth=0")
    await expect(az1).toHaveText("Sauce Labs Backpack")
    
    let az2 = page.locator(".inventory_item_name>>nth=1")
    await expect(az2).toHaveText("Sauce Labs Bike Light")
    
    let az3 = page.locator(".inventory_item_name>>nth=2")
    await expect(az3).toHaveText("Sauce Labs Bolt T-Shirt")
    
    let az4 = page.locator(".inventory_item_name>>nth=3")
    await expect(az4).toHaveText("Sauce Labs Fleece Jacket")
    
    let az5 = page.locator(".inventory_item_name>>nth=4")
    await expect(az5).toHaveText("Sauce Labs Onesie")
    
    let az6 = page.locator('.inventory_item_name>>nth=5')
    await expect(az6).toHaveText("Test.allTheThings() T-Shirt (Red)");
}

export { filterSearchAToZ }