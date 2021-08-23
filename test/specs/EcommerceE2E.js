var chai = require("chai").expect
describe("Ecommerce Application", ()=>{
    it("End to End demo", ()=>{
        var productNames = ["Blackberry", "Nokia Edge"]
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        const input_username = $(`//*[@id="username"]`)
        input_username.setValue("rahulshettyacademy")
        input_password = $(`//*[@id='password']`)
        input_password.setValue("learning")
        const signIn_button = $("//*[@id='signInBtn']")
        signIn_button.click()
        const checkout_button = $(`((//ul)[2]/descendant::*)[2]`)
        checkout_button.waitForExist()
        // var productList = $$(`(//div[@class="card h-100"])`)
        // productList.filter(item =>
        //     item.$(`.//div//h4//a`).getText() === "Blackberry"
        // ).map(selectedItem => selectedItem.$(`.//div[@class="card-footer"]//button`).click())
        var card = $$(`div[class="card h-100"]`)
        card.filter(item => productNames.includes(item.$("div h4 a").getText()))
        .map(selectedItem => selectedItem.$(`.card-footer button`).click())
        checkout_button.click()
        var productPrices = $$(`//tr//td[4]//strong`)
        var sumOfProducts = productPrices.map(price => parseInt(price.getText().split(" ")[1]))
        .reduce((acc, price) => acc + price,0)
        var totalPriceLocator = $(`h3 strong`).getText().split(" ")[1]
        var totalPrice = parseInt(totalPriceLocator)
        chai(sumOfProducts).to.be.equal(totalPrice)
        const sucess_btn = $(`.btn-success`)
        sucess_btn.click()
        const country_input = $(`#country`)
        country_input.setValue("ind")
        const loading_icon = $(`.lds-ellipsis`)
        loading_icon.waitForExist({reverse: true})
        const countryResult = $(`=India`) // Link Text selector 
        // const countryResult = $(`//*[contains(text(),"India")]`)
        console.log(countryResult)
        countryResult.click()
        const submit_btn = $(`[type="submit"]`)
        submit_btn.click()
        const alert_msg = $(`.alert-success`)
        expect(alert_msg).toHaveTextContaining("Success")
        browser.pause(2000)
    })
})