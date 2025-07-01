import { test, expect } from '@playwright/test'

// test("Testcase 1", async ({ page }) => {
//     await page.goto('https://material.playwrightvn.com/');

//     await page.locator("//a[@href='01-xpath-register-page.html']").click();

//     await page.locator("//input[@id='username']").fill("Nhi");

//     await page.locator("//input[@id='email']").pressSequentially("tttnhi.fw@gmail.com", { delay: 5 })

//     await page.locator("//input[@id='female']").check();

//     await page.locator("//input[@id='cooking']").check()

//     await page.locator("//option[@value='sports']").click()

//     await page.locator("//select[@id='country']").selectOption({
//         value: "canada"
//     })

//     await page.locator("//input[@id='dob']").pressSequentially("03222000", { delay: 150 })

//     await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/data/profile-image.png")

//     await page.locator("//textarea[@id='bio']").fill("welcome mọi người đã đến với channel của Nhi nha 😍")

//     await page.locator("//input[@id='rating']").focus();
//     for (let i = 0; i < 5; i++) {
//         await page.keyboard.press('ArrowRight');
//     }

//     //favocolor chưa làm dc
//     await page.locator("//input[@id='favcolor']").click();


//     //tooltip
//     await page.locator("//div[@class='tooltip']").hover();
//     const tooltipText = page.locator("//span[@class='tooltiptext']"); //xác định nội dung tooltip là thẻ span
//     await expect(tooltipText).toBeVisible(); // mong muốn tooltip hiển thị
//     await expect(tooltipText).toHaveText("Subscribe to our newsletter for updates"); // kiểm tra text trong tooltip

//     //subcribes
//     await page.locator('//label[@for="newsletter"]').click();

//     //switch button
//     await page.locator('//span[@class="slider round"]').click();

//     //rating star
//     const rating = page.locator('//div[@class="rating-star"]');

//     //width: 100px --> mỗi sao chiếm 20px 
//     await rating.click({
//         position: {
//             x: 80, // để chọn 4 sao thì click ở khoảng x = 80px
//             y: 10, // y = 1/2 height là ở giữa ngôi sao
//         }
//     });

//     //custom date: cái này ko bấm dc lun


//     //submit
//     await page.locator("//button[@type='submit']").click();

// })

const date = "2024-07-01";
const username = "Nhi";
const email = "tttnhi.fw@gmail.com";
const descriptions = "welcome mọi người đã đến với channel của Nhi nha 😍";
const country = "canada";

test('Exercise 1: Register Page', async ({ page }) => {
    await test.step("navigate to Material Playwright Page", async () => {
        await page.goto('https://material.playwrightvn.com/')
    })

    await test.step("navigate to the Register Page", async () => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html')
    })

    await test.step("fill information to all fields", async () => {
        await page.locator("//input[@id='username']").fill(username);
        await page.locator("//input[@id='email']").fill(email);
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='country']").selectOption({ value: "canada" });
        await page.locator("//input[@id='dob']").fill(date);
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/data/profile-image.png");
        await page.locator("//textarea[@id='bio']").fill(descriptions);
        await page.locator("//input[@id='rating']").fill("10");
        await page.locator("//input[@id='favcolor']").fill("#00fffb");
        await page.locator("//div[@class='tooltip']").hover();
        await page.locator("//label[@for='newsletter']").check();
        await page.click("//span[@class='slider round']");
    })

    await test.step("click button Register", async () => {
        await page.locator("//button[@type='submit']").click();
    })
})