import { test } from '@playwright/test';

test("Personal notes", async ({ page }) => {
    await page.goto("https://material.playwrightvn.com/");

    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();

    // await page.locator("//input[@id='note-title']").fill("Trợ lý ảo hỗ trợ công chức sau sáp nhập tỉnh")
    // await page.locator("//textarea[@id='note-content']").fill("Trợ lý ảo sẽ hỗ trợ trả lời nhanh các thắc mắc còn chưa nắm rõ, ví dụ về thẩm quyền của cán bộ công chức, nhiệm vụ của cấp quản lý")
    // await page.click("//button[@id='add-note']");

    // await page.locator("//input[@id='note-title']").fill("iPhone 17 Pro có thể đổi vị trí logo")
    // await page.locator("//textarea[@id='note-content']").fill("Vị trí logo quả táo trên mặt lưng iPhone 17 Pro dự kiến thay đổi sau 6 năm do thiết kế cụm camera mới.")
    // await page.click("//button[@id='add-note']");

    // await page.locator("//input[@id='note-title']").fill("Perplexity - startup AI được Meta và Apple để mắt")
    // await page.locator("//textarea[@id='note-content']").fill("Nhà phát triển AI Hay tặng 20.000 tài khoản Pro cho trường đại học, thúc đẩy sinh viên và giảng viên sử dụng AI trong học tập. ")
    // await page.click("//button[@id='add-note']");

    const titles = [
        "Trợ lý ảo hỗ trợ công chức sau sáp nhập tỉnh",
        "iPhone 17 Pro có thể đổi vị trí logo",
        "Perplexity - startup AI được Meta và Apple để mắt"
    ];

    const descriptions = [
        "Trợ lý ảo sẽ hỗ trợ trả lời nhanh các thắc mắc còn chưa nắm rõ, ví dụ về thẩm quyền của cán bộ công chức, nhiệm vụ của cấp quản lý",
        "Vị trí logo quả táo trên mặt lưng iPhone 17 Pro dự kiến thay đổi sau 6 năm do thiết kế cụm camera mới.",
        "Nhà phát triển AI Hay tặng 20.000 tài khoản Pro cho trường đại học, thúc đẩy sinh viên và giảng viên sử dụng AI trong học tập. "
    ];

    for (let i = 0; i < titles.length; i++) {
        await page.locator("//input[@id='note-title']").fill(titles[i]);
        await page.locator("//textarea[@id='note-content']").fill(descriptions[i]);
        await page.click("//button[@id='add-note']");
    }

    for (let i = 0; i < titles.length; i++) {
        await page.locator("//input[@id='search']").fill(titles[i])
    }

});