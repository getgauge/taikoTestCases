const { openBrowser, goto, write, press, link, click, near, checkBox, button, reload } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://todomvc.com/examples/react/#/");
        await write("something");
        await press("Enter");
	    await click(link("Active"));
	    await click(checkBox({'class':'toggle'},near('something')));
	    await click(link("Completed"));
	    await click(button("Clear completed"));
	    await reload("http://todomvc.com/examples/react/#/");
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();