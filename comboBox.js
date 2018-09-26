const { browser, openBrowser, goto, click,comboBox } = require('taiko');
const assert = require('assert');

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("google.com");
        await click("I'm Feeling Lucky");
        await click(link("About"));
        await comboBox({"id":"lang-chooser"}).select("‪हिन्दी‬");
//        assert.equal("hi",await comboBox({"id":"lang-chooser"}).value());
        await click("Doodles संग्रह");
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();
