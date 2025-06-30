import { test } from "@playwright/test";

test("Testcase: User actions", async ({ page }) => {

    //Step 1: Mở trang đăng ký
    await test.step("Mở trang web User Registration", async () => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

        // await page.locator("//input[@id='username']").fill("K15-Class");

        // await page.locator("//input[@id='email']").pressSequentially("trantuyetnhi22032000@gmail.com", {
        //     delay: 150 // 150ms giữa mỗi ký tự
        // });

        // await page.locator("//input[@id='male']").check();
        // const isChecked = await page.locator("//input[@id='male']").isChecked();
        // console.log(isChecked);

        // await page.locator("//input[@id='reading']").check();
        // const isCBChecked = await page.locator("//input[@id='reading']").isChecked();
        // console.log(isChecked);

        // await page.locator("//input[@id='reading']").setChecked(false);


        // await page.locator("//select[@id='country']").selectOption({
        //     value: "canada"
        // });

        
        await page.locator("//input[@id='profile']").setInputFiles("data/image.png");


    });

    //Step 2: Mở trang kiểm tra chuột
    // await test.step("Mở trang web kiểm tra chuột và bàn phím", async () => {
    //     await page.goto('https://material.playwrightvn.com/018-mouse.html');

    //     // double click
    //     await page.locator("//div[@id='clickArea']").dblclick();

    //     // click chuột phải
    //     await page.locator("//div[@id='clickArea']").click({
    //         button: "right"
    //     });

    //     // click với tổ hợp phím
    //     await page.locator("//div[@id='clickArea']").click({
    //         modifiers: ["Shift", "Control"],
    //         timeout: 3000
    //     });
    // });

});

//Input
