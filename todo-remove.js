const { browser, openBrowser, goto, link, click, listItem } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("http://todomvc.com/examples/react/#/");

        await write("to remove");

        await press("Enter");    
        await waitFor(1000);
        await click(checkBox('class','toggle',near('to remove')))
        await hover(checkBox('class','toggle',near('to remove')))

        await click(button('class','destroy',near('to remove')))
        await waitFor(5000);
        await reload("http://todomvc.com/examples/react/#/");

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();