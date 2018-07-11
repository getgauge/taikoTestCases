const { browser, openBrowser, goto, link, click, listItem } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://google.com");
        await click('Gmai')
    } catch (e) {
        console.error(e);
    } finally {
        if(browser())
            closeBrowser();
    }
})();