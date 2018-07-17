const { browser, openBrowser, goto, click,comboBox } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await click("I'm Feeling Lucky",{waitForNavigation:true});
        await click("About",{waitForNavigation:true});
        await comboBox(near(inputField("placeholder","Search Doodles"))).select("‪हिन्दी‬");
        await click("Doodles संग्रह",{waitForNavigation:true});
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();