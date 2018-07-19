const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        assert.ok(text("class","github_star").exists())
        await click(link(toRightOf(text("class","github_star"))));
                // assert.ok(await comboBox(toRightOf(image("id","lang-icon"))).exists())
        // await comboBox(toRightOf(image("id","lang-icon"))).select("‪हिन्दी‬");

        await waitFor(15000);

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();
