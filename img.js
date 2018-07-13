const { browser, openBrowser, goto, listItem, click, link } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://gauge.org/index.html");
        await click(link("Blog"),{waitForNavigation:true});
        await click(image(above(text('Zabil Maliackal'))))
        await waitFor(5000);

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();


//Zabil Maliackal