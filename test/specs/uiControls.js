var chai = require("chai").expect

describe("Ecommerce Application", ()=> {
    it("UI Controls (Smoke)", ()=>{
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        const input_username = $(`//*[@id="username"]`)
        input_username.setValue("rahulshettyacademy")
        const input_password = $(`//*[@id='password']`)
        input_password.setValue("learning")
        // Click on "User" radio button -> Click on "Cancel button"
        // -> Verify popup is DISPLAYED.
        const radioButtonArray =  $$(`//*[@class="radiotextsty"]`)
        radioButtonArray[1].click()
        //browser.pause(4000)
        const txt_popup = $(`//*[@class="modal-body"]`)
        txt_popup.waitForDisplayed()
        const cancel_button = $(`//*[@id="cancelBtn"]`)
        cancel_button.click()
        browser.pause(2000)
        const boolean = radioButtonArray[1].isSelected()
        //Print out whether the "User" button is selected
        console.log(boolean)
        // Click on "User" radio button -> Click on "Okay" button
        // -> Click on "Admin" button -> Verify popup is NOT DISPLAYED.
        radioButtonArray[1].click()
        txt_popup.waitForDisplayed()
        const okay_button =  $(`//*[@id="okayBtn"]`)
        browser.pause(2000)
        okay_button.click()
        browser.pause(2000)
        radioButtonArray[0].click()
        browser.pause(2000)
        // Verify whether the popup is displayed
        // expect(txt_popup).toBeDisplayed()
        // expect(txt_popup).not.toBeDisplayed()
        // Add "not" keyword if want to expect opposite
        const dropdownList =  $(`//select[@class="form-control"]`)
        dropdownList.selectByAttribute("value", "teach")
        browser.pause(2000)
        // dropdownList.selectByVisibleText("Consultant")
        // browser.pause(2000)
        // dropdownList.selectByIndex(0)
        // browser.pause(2000)
        var valueResult =  dropdownList.getValue()
        // Chai is one library supports assertions
        // Download Chai library with command: npm install chai
        chai(valueResult).to.equal("stud")
    })
    it("Dynamic dropdown control (Smoke)", ()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const input_dropdown =  $(`//input[@id="autocomplete"]`)
        input_dropdown.setValue(`ind`)
        browser.pause(2000)
        const dropdownList =  $$(`//li[@class="ui-menu-item"]//child::*`)
        // for (let i = 0; i< dropdownList.length; i++){
        //     console.log( dropdownList[i].getText())
        //    let value =  dropdownList[i].getText()
        //    console.log(value)
        let dropdownListValue = dropdownList.filter ( (item) => {
            let text =  item.getText()
            return text === "India"})
        console.log(dropdownListValue.length)
        dropdownListValue[0].click()
        expect(dropdownListValue[0]).toBeSelected()
        browser.pause(3000)
    })
    it("Checkbox Identifications (Smoke)",  ()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const checkbox =  $$(`//input[@type="checkbox"]`)
        checkbox[1].click()
        browser.pause(2000)
        // Verify whether checkbox is selected or not
        // console.log( checkbox[1].isSelected())
        // console.log( checkbox[0].isSelected())
        expect(checkbox[1]).toBeSelected()
        // Take a screenshot
        // browser.saveScreenshot("screenshot.png")

    })
})