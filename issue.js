const { browser, openBrowser, goto, click,comboBox } = require('taiko');
    (async () => {
        try {
        await openBrowser();
        await goto("google.com");
        await click("I'm Feeling Lucky");
        await click("About");
        await comboBox(near(inputField({"placeholder":"Search Doodles"}))).select("‪हिन्दी‬");
        await click("Doodles संग्रह");
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();