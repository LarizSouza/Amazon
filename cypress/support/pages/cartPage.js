class cartPage {

    elements = {
        
        addToCart:() => cy.get ('#add-to-cart-button'),
        addedToCartFirstItem:() => cy.get ('.a-size-medium-plus'),
        addedToCartDetails:() => cy.get ('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading'),
        goToCart:() => cy.get ('.nav-cart-count-container'),
        deleteItemI:() => cy.get ('#sc-active-C407616fe-78e8-4447-bfb6-bb0a076565b8 > .sc-list-item-content > .a-grid-vertical-align > :nth-child(2) > .sc-action-links > .sc-action-delete > .a-declarative > .a-color-link'),
       deleteItemIII: ()=> cy.get('#sc-active-C113828b3-8001-4fbc-a252-9cbbd144db82 > .sc-list-item-content > .a-grid-vertical-align > :nth-child(2) > .sc-action-links > .sc-action-delete > .a-declarative > .a-color-link')
    }
cleanCart(){
    
        this.elements.deleteItemI().click(); 

   
}
    goToCart (){
        this.elements.goToCart().click();

    }

    addToCart(){
        this.elements.addToCart().click();

    }

    checkAddedToCart(cart){
        switch (cart) {
            case 'First':
                this.elements.addedToCartFirstItem()
                .contains('Added to Cart');
                break;
                case 'Sec':
                    this.elements.addedToCartDetails()
                    .contains('Added to Cart');
                    break;
        
        }
        
    }
    
    

}
export default new cartPage();