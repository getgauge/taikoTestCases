const { browser, openBrowser, goto, click,link,image } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("https://in.bookmyshow.com/bengaluru");

        await click("Bengaluru");
        await write('NCR', into(await inputField({"placeholder":"Search for your city"})));
        await click("NCR");
        await click("View All");
        await click("View All");
        await click(link("English"))
        await click(image("Hotel Transylvania 3: A Monster Vacation"))
        await click(link("Book Tickets"))
        await waitFor("5000")

        //await hover(link("5:20 PM",toRightOf(link("Carnival: Rockline Mall"))))
        await click(link(contains("4:20 PM"),toRightOf(link("Cinepolis: Binnypet Mall"))))
        await click(link('Accept'))
        await click(listItem(contains("1")))
        await click(link(toRightOf("D")))
        await click("Select Seats")
        await click(link(contains("Pay ")))
        await click($("#FLDonation"))
        await click(radioButton(toLeftOf(contains("M-Ticket"))))
        await waitFor("5000")

        await closeBrowser();
    } catch (e) {
        console.error(e);
    } finally {
    }
})();