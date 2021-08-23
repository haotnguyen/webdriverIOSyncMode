class shop
{
    get card(){
        return $$(`div[class="card h-100"]`)
    }
    get checkout_btn(){
        return $(`((//ul)[2]/descendant::*)[2]`)
    }
    addToCart(productList){
        this.card.filter(item => productList.includes(item.$("div h4 a").getText()))
        .map(selectedItem => selectedItem.$(`.card-footer button`).click())
    }
    
}
module.exports = new shop()