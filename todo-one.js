const { openBrowser, goto, write, press, near, checkBox, click } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://todomvc.com/examples/react/#/");
        await write("automate with taiko");
        await press("Enter");
        await click(checkBox(near("automate with taiko")));
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();