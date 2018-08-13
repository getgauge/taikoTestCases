const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("https://gauge.org/index.html");
        assert.ok(text({"class":"github_star"}).exists())
        await click(link(toRightOf($(".github_star"))));
        var pageTitle = await title()
        assert.ok(pageTitle.includes("Open Source Test Automation Framework | Gauge"));
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
