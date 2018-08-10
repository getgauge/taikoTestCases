const { openBrowser, goto, inputField, into, write, click, text, below } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://localhost:8081/openmrs-standalone/referenceapplication/home.page");
        await write("admin",into(inputField({"placeHolder":"Enter your username"})));
        await write("Admin123",into(inputField({"placeHolder":"Enter your password"})));
        await click("Log In");
        await text("You must choose a location!").exists();
        await click("Registration Desk");
        await click("Register a patient");
        await write("Soumya",into(inputField(below(text("Given (required)")))));
        await write("Gupta",into(inputField(below(text("Middle")))));
        //await click("Gender");
        await write("Gupta",into(inputField(below(text("Family Name (required)")))));
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();