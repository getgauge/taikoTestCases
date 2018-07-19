const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        await click(link("Documentation"));
        await click("Write Specifications")
        await scrollTo(link("Refactoring"))
        await scrollUp("Example")
        await waitFor(5000);

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();
