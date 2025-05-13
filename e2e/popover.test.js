describe('Popover Widget', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:9000/');
    });


    it('should show and position the popover correctly', async () => {
        await page.waitForSelector('#popover-button');
        const button = await page.$('#popover-button');
        const buttonBox = await button.boundingBox();

        await button.click();

        await page.waitForSelector('.popover', { visible: true });
        const popover = await page.$('.popover');
        const popoverBox = await popover.boundingBox();

        expect(popoverBox).not.toBeNull();

        // Проверка горизонтального центрирования
        const buttonCenter = buttonBox.x + buttonBox.width / 2;
        const popoverCenter = popoverBox.x + popoverBox.width / 2;
        expect(Math.abs(popoverCenter - buttonCenter)).toBeLessThanOrEqual(2);

        // Проверка вертикального положения: popover над кнопкой
        expect(popoverBox.y + popoverBox.height).toBeLessThan(buttonBox.y);
    });

    it('should hide the popover on second click', async () => {
        await page.click('#popover-button');
        await page.waitForSelector('.popover', { hidden: true });
    });
});
