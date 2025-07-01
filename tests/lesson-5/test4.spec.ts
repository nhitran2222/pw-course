import { test } from '@playwright/test';

test("Exercise 4: Personal notes", async ({ page }) => {
    await test.step("navigate to the Material Playwright page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[@href='04-xpath-personal-notes.html']");
    });

    const notes = [
        {
            title: 'Trợ lý ảo hỗ trợ công chức sau sáp nhập tỉnh',
            description: 'Trợ lý ảo sẽ hỗ trợ trả lời nhanh các thắc mắc còn chưa nắm rõ, ví dụ về thẩm quyền của cán bộ công chức, nhiệm vụ của cấp quản lý'
        },
        {
            title: 'iPhone 17 Pro có thể đổi vị trí logo',
            description: 'Vị trí logo quả táo trên mặt lưng iPhone 17 Pro dự kiến thay đổi sau 6 năm do thiết kế cụm camera mới.'
        },
        {
            title: 'Anker thu hồi thêm 5 mẫu pin sạc dự phòng',
            description: 'MỹAnker tiếp tục triển khai đợt thu hồi pin sạc dự phòng thứ hai tại Mỹ, sau lần đầu vào tháng 6 với hơn một triệu thiết bị ảnh hưởng.'
        },
        {
            title: 'Loa di động đa năng giá 3,5 triệu đồng',
            description: 'Alpha Works Sonik 120 VNE có thiết kế trẻ trung, hướng tới người thích âm thanh sôi động, kèm micro, nhưng thiếu ứng dụng quản lý.'
        },
        {
            title: 'Tai nghe truyền xương tích hợp cảm biến nhịp tim',
            description: 'Mojawa HaptiFit Terra là tai nghe thể thao có cảm biến nhịp tim, hỗ trợ huấn luyện viên AI, bộ nhớ trong 32 GB, chống nước IP68.'
        },
        {
            title: 'Việt Nam lập sàn giao dịch kết nối nghiên cứu, sản xuất và thị trường',
            description: 'Sàn giao dịch Khoa học và Công nghệ Việt Nam ra mắt tối 30/6, có địa chỉ https://techmartvietnam.vn, thực hiện vai trò kết nối giữa nghiên cứu, sản xuất và thị trường.'
        },
        {
            title: 'Trận đấu bóng đá bằng robot hình người đầu tiên thế giới',
            description: 'Bốn đội robot hình người, vận hành hoàn toàn tự động bằng AI, lần đầu tham gia các trận đấu bóng đá, tạo nên sự phấn khích.'
        },
        {
            title: 'Doanh nghiệp kỳ vọng cơ chế sandbox thúc đẩy công nghệ mới',
            description: 'Nhiều doanh nghiệp Việt đánh giá sự ra đời của Luật Khoa học, công nghệ và đổi mới sáng tạo, trong đó có cơ chế sandbox, sẽ tạo sự phát triển đột phá của ngành.'
        },
        {
            title: 'Phụ huynh đã biết con xếp hạng học lực thứ mấy toàn quốc chưa?',
            description: 'Chỉ cần vài cú click tại SchoolRank 2025, bạn sẽ biết con mình đứng Top bao nhiêu toàn quốc.'
        },
        {
            title: 'Cách cập nhật số CCCD thành mã số thuế trên eTax Mobile',
            description: 'Từ ngày 1/7, số định danh trên CCCD sẽ được sử dụng làm mã số thuế và người dân có thể tự cập nhật trên ứng dụng thuế điện tử eTax Mobile'
        }
    ];

    await test.step('Thêm mới 10 notes có title và description', async() => {
        for (let note of notes) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.description);
            await page.click("//button[@id='add-note']");
        }
    })
    

    await test.step('tìm kiếm title bất kì', async() => {
        for(let note of notes) {
            await page.locator("//input[@id='search']").fill("CCCD")
        }
    })
});
