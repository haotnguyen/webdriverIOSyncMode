describe("Ecommerce Application", ()=>{
    it("End to End demo", ()=>{
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        const input_username = $(`//*[@id="username"]`)
        input_username.setValue("rahulshettyacademy")
        input_password = $(`//*[@id='password']`)
        input_password.setValue("learning")
        const signIn_button = $("//*[@id='signInBtn']")
        signIn_button.click()
        const checkout_button = $(`((//ul)[2]/descendant::*)[2]`)
        checkout_button.waitForExist()
        var productList = $$(`(//app-card/child::*)`)
        // productList.filter(item =>
        //     item.$(`//div[@class="card-body"]//h4//a`).getText() === "Blackberry"
        // ).map(selectedItem => selectedItem.$(`//div[@class="card-footer"]//button`).click())
        console.log(productList)
        var newProduct = productList.filter((item) =>{ return item.$(`//div//h4//a`).getText() === "Blackberry"})
        console.log(newProduct)
        // var card = $$(`div[class="card h-100"]`)
        // var newcard = card.filter(item =>item.$("div h4 a").getText() === "Blackberry").map(selectedItem => selectedItem.$(`.card-footer button`).click())
        // console.log(card)
        // console.log(newcard)
        // var newcard2 = card.filter((item) => {
        //     return item.$("div h4 a").getText() === "Blackberry"
        // })
        // console.log(newcard2)
        browser.pause(3000)
    })
})