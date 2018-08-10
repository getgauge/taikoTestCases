(async ()=>{
    await openBrowser({headless:false});
    await goto("https://postman-echo.com/basic-auth",{headers:{'Authorization':'Basic cG9zdG1hbjpwYXNzd29yZA=='}});
    await closeBrowser();
})();