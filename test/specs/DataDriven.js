var loginPage = require("../pageObjects/loginPage")
var reviewPage = require("../pageObjects//reviewPage")
var shop = require("../pageObjects/shop")
var chai = require("chai").expect
var fs = require("fs")
var credentials = JSON.parse(fs.readFileSync("test/TestData/loginTest.json"))
var productCredentials = JSON.parse(fs.readFileSync("test/TestData/productList.json"))

describe("Demo Data Driven", ()=>{
    credentials.forEach(({username, password}) =>{
        xit('Login faile page title', () => {
            browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
            loginPage.Login(username, password)
            browser.pause(3000)
            // addValue doesn't clear entered values (if any)
            const signIn_button = $("//*[@id='signInBtn']")
            signIn_button.click()
            const txt_error_message = $(`(//*[@id="login-form"]/child::*)[1]`)
            const text1 = txt_error_message.getText()
            console.log(text1 + " print error message") 
            //waitUntil expects a condition and wait until that
            //condition is fullfilled with a truthy value
            browser.waitUntil(() => {const currentText = signIn_button.getAttribute('value')
                                            return currentText === "Sign In"}, 
                                            { timeout: 5000, timeoutMsg: "Timeout"})
            const text2 = txt_error_message.getText()
            console.log(text2 + " print error message")
            const txt = $(`(//p)[1]`)
            expect(txt).toHaveText("(username is rahulshettyacademy and Password is learning)")
        })
    })
    productCredentials.forEach(({products}) =>{
        it("End to End demo", ()=>{
            browser.url("https://rahulshettyacademy.com/loginpagePractise/#") 
            loginPage.Login("rahulshettyacademy","learning")
            loginPage.signin_btn.click()
            loginPage.checkout_btn.waitForExist()
            shop.addToCart(products)
            shop.checkout_btn.click()
            // browser.pause(2000)
            var sumOfProducts = reviewPage.sumOfProducts()
            var totalPrice = reviewPage.totalPriceValue()
            chai(sumOfProducts).to.be.equal(totalPrice)
            reviewPage.success_btn.click()
            reviewPage.enterCountry("Ind")
            reviewPage.loading_icon.waitForExist({reverse: true})
            reviewPage.countryResult.click()
            reviewPage.submit_btn.click()
            expect(reviewPage.alert_msg).toHaveTextContaining("Success")
            // browser.pause(2000)
        })
    })

})