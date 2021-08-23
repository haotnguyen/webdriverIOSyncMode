class reviewPage
{
    get productPrices(){
        return $$(`//tr//td[4]//strong`)
    }
    get totalPrices(){
        return $(`h3 strong`).getText().split(" ")[1]
    }
    get success_btn(){
        return $(`.btn-success`)
    }
    get country_input(){
        return $(`#country`)
    }
    get loading_icon(){
        return $(`.lds-ellipsis`)
    }
    get countryResult()
    {
        return $(`=India`)
    }
    get submit_btn(){
        return $(`[type="submit"]`)
    }
    get alert_msg()
{
    return $(`.alert-success`)
}    
    sumOfProducts(){
        var sumOfProducts = this.productPrices.map(price => parseInt(price.getText().split(" ")[1]))
        .reduce((acc, price) => acc + price,0)
        return sumOfProducts
    }
    totalPriceValue(){
        var totalPrice = parseInt(this.totalPrices)
        return totalPrice
    }
    enterCountry(countryName){
        return this.country_input.setValue(countryName)
    }
}
module.exports = new reviewPage()