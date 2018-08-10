const { openBrowser, goto, toRightOf, inputField, into, write, press, contains, button, click, radioButton, toLeftOf, checkBox } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("thetrainline.com");

        await write("London",into(inputField(toRightOf("From"))));
        await press("Enter");
        await write("Manchester");
        await press("Enter");
        await click("Tomorrow")
        await click(button({"type":"submit"}));

        await click("Continue");
        await click(checkBox(toLeftOf("Table Seat")));
        await click("Continue");

        await write("soumya.swaroop@gmail.com",into(inputField({"placeHolder":"Email address"})))
        await write("password",into(inputField({"placeHolder":"Password"})))
        await click(button({"type":"submit"}));

        await click("Continue");

        // await click("Continue");
        // await click("Journey Summary");
        // await click("Journey Summary");
        await click(contains("Proceed with"));
        await write("1111 1111 1111 1111",into(inputField({"placeHolder":"Card number"})));

    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();