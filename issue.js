const { openBrowser, goto, below, image, click } = require('taiko');

(async () => {
   try {
       await openBrowser();
       await goto("amazon.in");
       await click("Today's Deals");
       await click(image(above("Deal of the Day")));
       await waitFor("5000")
   } catch (e) {
       console.error(e);
   } finally {
       closeBrowser();
   }
})();