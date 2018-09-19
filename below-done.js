const { browser, openBrowser, goto, click,below } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("https://gauge.org/index.html");
        await click(link("Gauge Commmands",below(text("Explore"))));
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();