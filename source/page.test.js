const puppeteer = require("puppeteer");
const io = require("puppeteer-io");


let browser, page;

beforeAll(async () => {
    browser = await puppeteer.launch();
});

beforeEach(async () => {
    page = await browser.newPage();
});

afterEach(async () => {
    await page.close();
});

afterAll(async () => {
    await browser.close();
});

test(`check onFocusIn and onFocusOut callbacks`, done => {
    io({
        page, done,
        async input() {
            await page.goto("http://localhost:8080");
            await page.focus("select");
            await page.focus("input");
        },
        async output({ message }) {
            await message("Select: focus in");
            await message("Select: focus out");
        }
    });
});

test(`check onChange callback`, async () => {
    await io({
        page,
        async input() {
            await page.goto("http://localhost:8080");

            let select = await page.$("select");

            await select.focus();
            await select.press("Enter");
            await select.press("ArrowDown");
            await select.press("Enter");
        },
        async output({ dataFromMessage }) {
            let [,secondItem] = await dataFromMessage("test-data");
            let selectedId = await dataFromMessage("Select: change");

            expect(selectedId).toBe(secondItem.id);
        }
    });
});
