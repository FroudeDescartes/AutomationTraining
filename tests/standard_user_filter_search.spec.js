// @ts-check
import { filterSearchHiLo } from './filter_search_hilo';
import { filterSearchLoHi } from './filter_search_lohi';
import { filterSearchZToA } from './filter_search_z_to_a';
import { filterSearchAToZ } from './filter_search_a_to_z';
import { login } from './login';
import { logout } from './logout';

const { test, expect } = require('@playwright/test');
test.describe("Navigation", () => {
        test.beforeEach(async ({ page }) => {
                await page.goto('https://www.saucedemo.com/');
                await page.pause()
                await login(page, "standard_user")
        });
        test("Page environment", async ({ page }) => {
                let HomePageTextVisible = page.locator("div.app_logo", { hasText: /.*Swag Labs*./ })
                let HomePagePdpList = page.locator("div.inventory_list")
                await expect(HomePageTextVisible).toBeVisible()
                await expect(HomePagePdpList).toBeVisible()
                await filterSearchZToA(page)
                await filterSearchLoHi(page)
                await filterSearchHiLo(page)
                await filterSearchAToZ(page)

                await logout(page)
        });
});

//posebni test suit za svaku celinu a u svakom test suitu ratliciti testovi
//svaki test suit mora da bude razliciti fajl
//provera svega (expect)
//napraviti test koji proverava da li je br itema u korpi jednak onom broju koji sam dodao 