const puppeteer = require("puppeteer");
const io = require("puppeteer-io");


test(`addEvent() test`, async () => {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await io({
        page,
        async input() {
            await page.goto(`file://${__dirname}/error.html`);
        },
        async output({ error }) {
            await error("test-error");
        }
    });

    await page.close();
    await browser.close();
});
