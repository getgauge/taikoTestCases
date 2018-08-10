const { openBrowser, goto, text, click, below } = require('taiko');
const assert = require("assert");

(async () => {
    try {
        await openBrowser();
        await goto("https://react-shopping-cart-67954.firebaseapp.com/");
        await click(text("M"));
        await click("Add to cart",below("Dark Thug Blue-Navy T-Shirt"));
        assert.equal((await text("CHECKOUT").exists()).description,'Exists')
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();