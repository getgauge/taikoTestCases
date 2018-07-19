const { browser, openBrowser, goto, click,comboBox } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("google.com");
        await click("I'm Feeling Lucky");
        await click(link("About"));
        assert.ok(await comboBox(toRightOf(image("id","lang-icon"))).exists())
        await comboBox(toRightOf(image("id","lang-icon"))).select("hi");
        await waitFor(5000)
        await click("Doodles Archive");
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();