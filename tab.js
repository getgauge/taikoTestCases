const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        await click(link("Documentation"),{waitForNavigation:true});
        await click("Write Specifications",{waitForNavigation:true})
        await click("IntelliJ Idea")
        await click("Gauge plugin for IntelliJ IDEA",{waitForNavigation:true})
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();
