const { browser, openBrowser, goto, link, click, listItem } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://todomvc.com/examples/react/#/");
        await click(link("Active"));
        await click(link("Completed"));
        await click(link("All"));
        await checkBox('something').check()
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();
