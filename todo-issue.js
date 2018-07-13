const { browser, openBrowser, goto, link, click, listItem } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://todomvc.com/examples/react/#/");
        await waitFor(5000);

        await write("something");

        await press("Enter");
        await waitFor(5000);

        await click(link("Active"));
        await click(link("Completed"));
        await click(link("All"));

        await click(checkBox('class','toggle',near('something')))
        await reload("http://todomvc.com/examples/react/#/",{waitForNavigation:true});

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();