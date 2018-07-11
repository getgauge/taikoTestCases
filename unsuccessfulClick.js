const { browser, openBrowser, goto, click,below } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://github.com/getgauge/gauge");
        await click(link("cmd"));
        //await click(link("Why Gauge"));
        assert.equal(await title(),"gauge/cmd at master · getgauge/gauge");
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();