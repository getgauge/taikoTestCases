const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/");
        await click(link("Documentation"),{waitForNavigation:true});
        assert.equal(await title(),"Gauge Documentation — Gauge 1.0.0 documentation");
        await focus(inputField("id","search"));
        await write("Custom")
        await click("Taking Custom Screenshots")
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();
