describe("Windows and Frames Miscellanous", ()=>{
    xit("Parent and child windows switch", ()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const openWindow_btn = $(`//button[@id="openwindow"]`)
        openWindow_btn.click()
        var numberOfWindow = browser.getWindowHandles()
        browser.switchToWindow(numberOfWindow[1])
        console.log(browser.getTitle())
        console.log(numberOfWindow);
        browser.maximizeWindow()
        browser.pause(2000)
        // browser.closeWindow()
        browser.switchToWindow(numberOfWindow[0])
        console.log(browser.getTitle())
        browser.newWindow("https://rahulshettyacademy.com/#/index")
        const title = browser.getTitle()
        browser.switchWindow(`https://rahulshettyacademy.com/AutomationPractice/`)
        console.log(numberOfWindow)
        const nameField = $(`//input[@id="name"]`)
        nameField.setValue(title)
        browser.pause(3000)
        browser.switchWindow(title)
        browser.pause(3000)
        // console.log(numberOfWindow);
        // console.log(browser.getTitle());
        // numberOfWindow = browser.getWindowHandles()
        // console.log(numberOfWindow)
        // Difference between switchToWindow() and switchWindow():
        /*
        switchToWindow() receives a handle as an argument. This handle can be retrieved by calling getWindowHandles() - which whill
        return a string array contains ID handle of each window. So it means that switchToWindow() can be called after
        getWindowHandles() is called
        switchWindow() receives URL or Title of a window. To use this, the window must be opened, the URL, Title must match
        */
        // newWindow() receives a URL as a string, with some optional options. This will create a new tab in current window
        // but it also count as a window
    })
    it("Frame switch", ()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const mouseHover =  $(`//button[@id="mousehover"]`)
        mouseHover.scrollIntoView()
        const numberOfATag = $$(`//a`).length
        console.log(numberOfATag);
        const frameID = $(`//iframe[@id="courses-iframe"]`)
        browser.switchToFrame(frameID)
        const numberOfATagiFrame = $$(`//a`).length
        console.log(numberOfATagiFrame);
        browser.switchToFrame(null)
        console.log($$(`//a`).length)
    })
})