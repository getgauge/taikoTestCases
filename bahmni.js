const { openBrowser, goto, inputField, into, write, toRightOf, comboBox, click } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("https://localhost:8000/bahmni/home/index.html#/login");
        await write("user",into(inputField({"placeHolder":"Enter your username"})));
        await write("password",into(inputField({"placeHolder":"Enter your password"})));
        await comboBox(toRightOf("Location *")).select("General Ward");
        await click(button("Login"));
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();
