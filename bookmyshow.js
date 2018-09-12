const { browser, openBrowser, goto, click,link,image } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("https://in.bookmyshow.com/bengaluru");

        await click("Bengaluru");
        await write('NCR', into(await inputField({"placeholder":"Search for your city"})));
        await click("NCR");
        await click("View All");
        await click(link("English"),below('Select Language'))
        await click(image(below(link("Now Showing"))))
        await click(link("Book Tickets"))

        await click(link({"class":"__showtime-link"}))
        await click("Accept")

        await click("Select Seats")
        await click(link(toRightOf("D")))

        // await click(link(contains("Pay ")))
        // await click(radioButton(toLeftOf(contains("M-Ticket"))))
    } catch (e) {
        await screenshot()
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();