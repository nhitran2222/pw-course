import { test } from '@playwright/test';

test("Exercise 3: Todo list page", async ({ page }) => {
    await test.step("Navigate to the Material Playwright page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click on the Todo page", async () => {
        await page.click("//a[@href='03-xpath-todo-list.html']");
    })

    await test.step("Create 100 new todo item that have content 'Todo <i>'", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.click("//button[@id='add-task']");
        }
    })

    await test.step("xóa những todoItem là số lẻ", async () => {
        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        for (let i = 1; i <= 100; i++) {
            i % 2 !== 0 && await page.locator(`//button[@id='todo-${i}-delete']`).click();
        }
    })
})