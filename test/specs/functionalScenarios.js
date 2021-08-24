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
        Pass-by-value được hiểu là khi bạn thay đổi biến trong hàm thì ngoài hàm sẽ không bị ảnh hưởng. Nó giống như bạn copy giá trị của biến vào biến khác rồi truyền vào hàm.
        Pass-by-reference là khi bạn thay đổi biến trong hàm cũng làm ngoài hàm bị ảnh hưởng. Nó giống như bạn truyền đúng địa chỉ của biến đó vào hàm.
        */
        // To fix this issue, we will use function slice()
        // Here is the link with details explanation: https://freetuts.net/ham-array-slice-trong-javascript-4078.html
        // This is a summary: 
        /*
        Hàm slice có chức năng trích xuất một số phần tử của mảng, vị trí bắt đầu và kết thúc việc trích xuất sẽ được xác định bởi tham số truyền vào hàm.

        Lưu ý là hàm sẽ trích xuất không bao gồm phần tử end truyền vào. Ví dụ array.slice(1,4) thì các phần tử được trích xuất sẽ là 1, 2 và 3 (không bao gồm phần tử 4).

        Hàm sẽ trả về kết quả là một mảng mới bao gồm các phần tử được trích xuất. Hàm sẽ không làm thay đổi mảng gốc.
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