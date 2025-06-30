import { test } from '@playwright/test'

test("Testcase: Add product to cart", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    await page.locator("//a[@href='02-xpath-product-page.html']").click();

    // await page.locator("//button[@data-product-id='1']").click();
    // await page.locator("//button[@data-product-id='1']").click();

    for (let i = 0; i < 2; i++) {
        await page.locator("//button[@data-product-id='1']").click();
    }

    for (let i = 0; i<3; i++) {
        await page.locator("//button[@data-product-id='2']").click();
    }

    await page.locator("//button[@data-product-id='3']").click();
});