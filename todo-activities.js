const { browser, openBrowser, goto, link, click, listItem } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("http://todomvc.com/examples/react/#/");

        await write("flow");

        await press("Enter");

        await click(link("Active"));
        await click(checkBox({'class':'toggle'},near('flow')))

        await click(link("Completed"));

        await click(link("Clear completed"));
        await reload("http://todomvc.com/examples/react/#/");

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();