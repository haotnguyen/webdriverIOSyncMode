class loginPage
{
    get username(){
        return $(`//*[@id="username"]`)
    }
    get password(){
        return $(`//*[@id='password']`)
    }
    get signin_btn(){
        return $("//*[@id='signInBtn']")
    }
    get checkout_btn(){
        return $(`((//ul)[2]/descendant::*)[2]`)
    }
    Login(username, password){
        this.username.setValue(username)
        this.password.setValue(password)
        this.signin_btn.click()
    }
    
}
module.exports =  new loginPage()