const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        await click(link("Documentation"));
        assert.equal(await title(),"Gauge Documentation — Gauge 1.0.0 documentation");
        await focus(inputField({"id":"search"}));
        await write("Custom")
        await click(contains("Taking"))
        //Custom Screenshots
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
