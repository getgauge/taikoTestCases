const { openBrowser, goto, toLeftOf, radioButton, click, below, text, inputField, into, write, reload, focus, press, link, comboBox } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("cleartrip.com");
        await focus(inputField(below(text("From"))));
        await write("Bangalore, IN - Kempegowda International Airport (BLR)",into(inputField(below(text("From")))),{delay:100});
        await press("Enter");
        await click(comboBox({"id":"Adults"}));
        await comboBox({"id":"Adults"}).select("2")
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();