const { openBrowser, goto, below, inputField, focus, write, press, click } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("makemytrip.com");
        await focus(inputField(below("From")));
        await write("Bangalore",inputField(below("From")));
        await press("Enter");
        await write("Goa");
        await press("Enter");
        await click(link("20",below(text("August"))));
        await focus(inputField(below("Return")))
        await click(link("24",below(text("August"))));

        await click(button("Search"))
        console.log(await text(contains("ZERO Cancellation |  Cancel your ticket for Free. Buy Zero Cancellation @ only")).exists())
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();

        // await click(inputField({"id":"hp-widget__paxCounter_pot"}))
        // await click("2",below(contains("ADULTS")))
        // await click("1",below(contains("CHILDREN")))
        // await click("Premium Economy",above("Done"))
        // await click("Done")

        //        await click(checkBox(toLeftOf("ZERO Cancellation |  Cancel your ticket for Free. Buy Zero Cancellation @ only")))
        // await click(radioButton({"id":"cbn_none"},below(text(contains("Mon, 20 Aug`18")))))
        // await click(radioButton({"id":"cbn_none"},below(text(contains("Fri, 24 Aug`18")))))
        // await click(link("Duration",below("Fri, 24 Aug`18")))
        // await click(radioButton(link("Duration",below("Fri, 24 Aug`18"))))
