const puppeteer = require("puppeteer");
const io = require("puppeteer-io");


test(`addEvent() test`, async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(`file://${__dirname}/test.html`);

    await io({
        page,
        async input() {
            await page.click("button");
        },
        async output({ message }) {
            await message("Button.click");
        }
    });

    await page.close();
    await browser.close();
});
