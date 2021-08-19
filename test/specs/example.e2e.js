// Mocha Test Framework 
 describe('My Login application', () => {
      it('Login faile page title', () => {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        console.log(browser.getTitle())
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        $("//*[@id='username']").setValue("rahulshettyacademy")
        // setValue will clear entered values (if any)
        $(`//*[@id='password']`).setValue("learning123456") 
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
        const txt = $(`(//p)[1]`).getText()
        console.log(txt)
        expect(txt).toHaveText("(username is rahulshettyacademy and Password is learning)")
    });
    xit("Login sucessfully", async () =>{
        //Add x before it will skip the test case when executing
        browser.url("https://rahulshettyacademy.com/loginpagePractise/#")
        const input_username = $(`//*[@id="username"]`)
        input_username.setValue("rahulshettyacademy")
        input_password = $(`//*[@id='password']`)
        input_password.setValue("learning")
        const signIn_button = $("//*[@id='signInBtn']")
        signIn_button.click()
        const checkout_button = $(`((//ul)[2]/descendant::*)[2]`)
        checkout_button.waitForExist()
        // Timeout for all Waitfor method is in wdio.conf.js file
        const pageTitle =   $(`//title`).getTitle()
        console.log(pageTitle)
        expect(browser).toHaveTitle("ProtoCommerce")
          //  toHaveTitle, toHaveTitleContaining, toHaveUrl, 
          //  toHaveUrlContaining are used for browser matchers, it
          //  means that we will parse variable "browser" to expect,
          //  else it will return error "browser.call is not a function"
     })
 })