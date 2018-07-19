const { browser, openBrowser, goto, link, click, listItem } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("http://todomvc.com/examples/react/#/");
        await waitFor(1000);

        await write("flow");

        await press("Enter");
        await waitFor(1000);

        await click(link("Active"));
        assert.ok(await checkBox('class','toggle',near('flow')).exists())
        await click(checkBox('class','toggle',near('flow')))

        assert.ok(!await text('flow').exists())

        await click(link("Completed"));
        assert.ok(await checkBox('class','toggle',near('flow')).exists())

        await click(link("Clear completed"));
        await reload("http://todomvc.com/examples/react/#/",{waitForNavigation:true});

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();