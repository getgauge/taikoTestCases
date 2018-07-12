const { browser, openBrowser, goto, click,below } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        await click(link("Gauge Commmands",below(link("Roadmap"))),{waitForNavigation:true});
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();