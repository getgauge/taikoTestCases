const { browser, openBrowser, goto, click, link, listItem, title } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/");
        await click("Plugins",{waitForNavigation:true});
        await click(listItem("Reports"));
        await click(link("Read more"),{waitForNavigation:true});
    } catch (e) {
        console.error(e);
    } finally {
        if (browser()) {
            closeBrowser();
        }
    }
})();
