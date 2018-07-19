const { browser, openBrowser, goto, click, link, listItem, title } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/");
        await click("Plugins");
        await click(listItem("Reports"));
        await click(link("Read more"));
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();
