const { browser, openBrowser, goto, link, click, listItem,checkBox } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://todomvc.com/examples/react/#/");
        await write("something");
        await press("Enter");        
        await click(checkBox('class','toggle',near('something')))
        await hover(checkBox('class','toggle'))
        await waitFor(5000);
        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();