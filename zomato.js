const { openBrowser, goto, text, click, below, link, toRightOf } = require('taiko');

(async () => {
    try {
        await openBrowser({headless:false});
        await goto("www.zomato.com/bangalore");
        await click(text("Pocket-Friendly Delivery"));
        // await click("Zomato Gold partner");
        // await click("View Menu", below("The Grub Central"));
        // await click(link({"id":"menu-next-page"}));
        await click("Order Food Online");
        await click("Order Online");
        await click(link("ADD"))
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();