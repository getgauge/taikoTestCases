const { browser, openBrowser, goto, link, click, listItem } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("http://google.com");
        await click(contains('Gmai'))
        assert.ok(await text('Meet your new inbox').exists());
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();