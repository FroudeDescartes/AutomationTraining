import { expect } from "@playwright/test";

async function filterSearchZToA(page) {
    await page.locator('[data-test="product_sort_container"]').selectOption('za');

    //provera filtera Z-A
    let za1 = page.locator('.inventory_item_name>>nth=0')
    await expect(za1).toHaveText("Test.allTheThings() T-Shirt (Red)");
    
    let za2 = page.locator(".inventory_item_name>>nth=1")
    await expect(za2).toHaveText("Sauce Labs Onesie")
    
    let za3 = page.locator(".inventory_item_name>>nth=2")
    await expect(za3).toHaveText("Sauce Labs Fleece Jacket")
    
    let za4 = page.locator(".inventory_item_name>>nth=3")
    await expect(za4).toHaveText("Sauce Labs Bolt T-Shirt")
    
    let za5 = page.locator(".inventory_item_name>>nth=4")
    await expect(za5).toHaveText("Sauce Labs Bike Light")
    
    let za6 = page.locator(".inventory_item_name>>nth=5")
    await expect(za6).toHaveText("Sauce Labs Backpack")
}

export { filterSearchZToA }