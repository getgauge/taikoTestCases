const { browser, openBrowser, goto, click, link, listItem, title,highlight } = require('taiko');
(async () => {
    try {
        await openBrowser({headless:false});
        await goto("https://gauge.org/");
        await click("Plugins");
        await highlight("Reports")
        await screenshot()
        await click(listItem("Reports"));
        await click(link("Read more"));
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();
