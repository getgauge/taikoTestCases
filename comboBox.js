const { browser, openBrowser, goto, click,comboBox } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await click("I'm Feeling Lucky",{waitForNavigation:true});
        await waitFor(5000);
        await click(link("About"),{waitForNavigation:true});
        await comboBox("id","lang-icon").select("hi");
        await click("Doodles Archive",{waitForNavigation:true});
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();