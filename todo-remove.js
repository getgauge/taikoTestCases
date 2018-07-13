const { browser, openBrowser, goto, link, click, listItem } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://todomvc.com/examples/react/#/");

        await write("to remove");

        await press("Enter");        
        await click(checkBox('class','toggle',near('to remove')))
        await hover(checkBox('class','toggle'))

        await click(button('class','destroy'))
        await waitFor(5000);
        await reload("http://todomvc.com/examples/react/#/",{waitForNavigation:true});

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();