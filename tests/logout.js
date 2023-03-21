async function logout(page) {
    await page.locator("#react-burger-menu-btn").click()
    await page.locator("#logout_sidebar_link").click()
}

export { logout }