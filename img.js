const { browser, openBrowser, goto, listItem, click, link,image } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        await click(link("Blog"));

        await click(image(above(text('Zabil Maliackal'))))
        await assert.ok(text('Why we built Gauge').exists())

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();