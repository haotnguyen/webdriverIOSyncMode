var chai = require("chai").expect
describe("Functional Testing on Application", ()=>{
    xit("Scrolling and mouse hover",  ()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const mouseHover =  $(`//button[@id="mousehover"]`)
        mouseHover.scrollIntoView()
        // Use scrollIntoView() method to scroll to an element
        browser.pause(2000)
        mouseHover.moveTo()
        // Use moveTo() method to hover element
        browser.pause(2000)
        const txtTop =  $(`((//div[@class="mouse-hover-content"])/child::*)[1]`) // Or //*[contains(text(),"Top")]
        txtTop.click()
        browser.pause(2000)
    })
    xit("Double click to show alert message",  ()=>{
        browser.url("http://only-testing-blog.blogspot.com/")
        const btn_doubleClick =  $(`//button[@ondblclick="myFunction()"]`) // Or //button[contains(text(),"Double-Click Me To See Alert")]
        btn_doubleClick.doubleClick()
        browser.pause(2000)
        //Alert is belong to browser
        console.log( browser.isAlertOpen())  // return true or false
        chai( browser.isAlertOpen()).to.be.true // Add expect with Chai 
        console.log( browser.getAlertText())
        chai( browser.getAlertText()).to.equal("Press 'OK' or 'Cancel' button!")
        browser.acceptAlert() // Click on OK button
        browser.pause(2000)
    })
    xit("Web table sort validation", ()=>{
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        const columnTitle = $$(`//th`)
        
        // columnTitle[0].click()
        const vegetableListLocators = $$(`//td[1]`)
        // Get all the vegetable names into an array
        // Sort that array into a new array
        // Compare 2 arrays
        // If result is true, the list is sorted, else the list is not sorted
        var originalVegetableNames = vegetableListLocators.map((vegetable, index, vegetableListLocators) =>{
            return vegetable.getText()
        })
        console.log(originalVegetableNames)
        // In Javascript, arrays are pass by reference
        // Here is the link with details explanation: https://kipalog.com/posts/Pass-by-reference-va-pass-by-value
        // This is a summary: 
        /*
        Pass-by-value ???????c hi???u l?? khi b???n thay ?????i bi???n trong h??m th?? ngo??i h??m s??? kh??ng b??? ???nh h?????ng. N?? gi???ng nh?? b???n copy gi?? tr??? c???a bi???n v??o bi???n kh??c r???i truy???n v??o h??m.
        Pass-by-reference l?? khi b???n thay ?????i bi???n trong h??m c??ng l??m ngo??i h??m b??? ???nh h?????ng. N?? gi???ng nh?? b???n truy???n ????ng ?????a ch??? c???a bi???n ???? v??o h??m.
        */
        // To fix this issue, we will use function slice()
        // Here is the link with details explanation: https://freetuts.net/ham-array-slice-trong-javascript-4078.html
        // This is a summary: 
        /*
        H??m slice c?? ch???c n??ng tr??ch xu???t m???t s??? ph???n t??? c???a m???ng, v??? tr?? b???t ?????u v?? k???t th??c vi???c tr??ch xu???t s??? ???????c x??c ?????nh b???i tham s??? truy???n v??o h??m.

        L??u ?? l?? h??m s??? tr??ch xu???t kh??ng bao g???m ph???n t??? end truy???n v??o. V?? d??? array.slice(1,4) th?? c??c ph???n t??? ???????c tr??ch xu???t s??? l?? 1, 2 v?? 3 (kh??ng bao g???m ph???n t??? 4).

        H??m s??? tr??? v??? k???t qu??? l?? m???t m???ng m???i bao g???m c??c ph???n t??? ???????c tr??ch xu???t. H??m s??? kh??ng l??m thay ?????i m???ng g???c.
        */
        var vegetableNamesBeforeSort = originalVegetableNames.slice()
        console.log(vegetableNamesBeforeSort)
        var vegetableNamesAfterSort = vegetableNamesBeforeSort.sort()
        console.log(vegetableNamesAfterSort)
        chai(originalVegetableNames).to.eql(vegetableNamesAfterSort)
    })
    it("Web table filter validation", ()=>{
        browser.url("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        // Enter "tomato" to search field
        // The result returns 1 value
        // Verify that the array of returned values only contain 1 value
        // Verify that the value of that array is "Tomato", match with entered value in search field
        const search_field = $(`//input[@id="search-field"]`)
        search_field.setValue("tomato")
        const vegetableListLocators = $$(`//td[1]`)
        expect(vegetableListLocators).toBeElementsArrayOfSize(1)
        // expect(vegetableListLocators).toBeElementsArrayOfSize({eq: 2})
        console.log(vegetableListLocators[0].getText())
        expect(vegetableListLocators[0]).toHaveText("Tomato")
        // expect(vegetableListLocators[0]).toHaveTextContaining("Wheat")
    })
})