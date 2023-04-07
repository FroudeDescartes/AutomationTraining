import { expect } from "@playwright/test"

async function homePage(page) {
    let homePageTextVisible = page.locator("div.app_logo", { hasText: /.*Swag Labs*./ })
    await expect(homePageTextVisible).toBeVisible()

    let homePagePdpList = page.locator("div.inventory_list")
    await expect(homePagePdpList).toBeVisible()

    let homePageFooterLinkTwitter = page.locator(".social_twitter")
    await expect(homePageFooterLinkTwitter).toBeVisible()

    let homePageFooterLinkFacebook = page.locator(".social_facebook")
    await expect(homePageFooterLinkFacebook).toBeVisible()

    let homePageFooterLinkLinkedIn = page.locator(".social_linkedin")
    await expect(homePageFooterLinkLinkedIn).toBeVisible()
}

export {homePage}