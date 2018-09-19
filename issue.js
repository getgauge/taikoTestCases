const { openBrowser, goto, inputField, into, write, toRightOf, comboBox, click,
    openTab,closeTab } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("makemytrip.com/")
        await openTab("gauge.org/index.html")
        await closeTab()
        await closeTab()
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();