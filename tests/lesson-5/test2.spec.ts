import { test } from '@playwright/test'

// test("Testcase: Add product to cart", async ({ page }) => {
//     await page.goto("https://material.playwrightvn.com/");

//     await page.locator("//a[@href='02-xpath-product-page.html']").click();

//     // await page.locator("//button[@data-product-id='1']").click();
//     // await page.locator("//button[@data-product-id='1']").click();

//     for (let i = 0; i < 2; i++) {
//         await page.locator("//button[@data-product-id='1']").click();
//     }

//     for (let i = 0; i<3; i++) {
//         await page.locator("//button[@data-product-id='2']").click();
//     }

//     await page.locator("//button[@data-product-id='3']").click();
// });

test("Exercise 2: Product page", async ({ page }) => {
    await test.step("Navigate to the Material page", async () => {
        await page.goto("https://material.playwrightvn.com");
    });

    await test.step("Click on the Product page", async () => {
        await page.click("//a[@href='02-xpath-product-page.html']");
    });

    await test.step("Add product 1: 2 items", async () => {
        await page.dblclick("//button[@data-product-id='1']");
    })

    await test.step("Add product 2: 3 items", async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
    });

    await test.step("Add product 3: 1 items", async() => {
        await page.click("//button[@data-product-id='3']");
    });
})