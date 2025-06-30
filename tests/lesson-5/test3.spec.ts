import { test } from '@playwright/test';

test("Create todo list", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    await page.locator("//a[@href='03-xpath-todo-list.html']").click();

    let toDoList = [];
    for (let i = 1; i <= 100; i++) {
        const todo = `To do ${i}`;

        await page.locator("//input[@id='new-task']").fill(todo);
        await page.click("//button[@id='add-task']");

        toDoList.push(todo);
    };
    console.log(toDoList);
})

//3b không làm dc 😭
