const { browser, openBrowser, goto, click,comboBox } = require('taiko');
const assert = require('assert');

(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await click("I'm Feeling Lucky",{waitForNavigation:true});
        await click(link("About"));
        await comboBox("id","lang-chooser").select("‪हिन्दी‬");
        assert.equal("hi",await comboBox("id","lang-chooser").value());
        await click("Doodles संग्रह",{waitForNavigation:true});

        closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();
// (async () => {
//     await openBrowser();
//     await goto("google.com");
//     await click("I'm Feeling Lucky");
//     await click("About");
//     await comboBox("id","lang-chooser").select("‪हिन्दी‬");
//     assert.equal("hi",await comboBox("id","lang-chooser").value());
//     await closeBrowser();
// })();