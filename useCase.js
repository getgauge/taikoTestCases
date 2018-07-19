const { browser, openBrowser, goto, click } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("https://in.bookmyshow.com/bengaluru");
        await click("Bengaluru");
        await write('NCR', into(await inputField("placeholder","Search for your city")));
        await click("NCR");
        await click("View All");
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();