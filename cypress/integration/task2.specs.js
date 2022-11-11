import Home from "../support/pages/Task1";
import todayDealsPage from "../support/pages/todaysDealsPage";
import productDetailsPage from "../support/pages/productDetailsPage"
import cartPage from "../support/pages/cartPage"

describe('Add to cart', () => {

    beforeEach (() => {
        Home.accessAmazon();
        Home.validateHomeLogo();
        Home.searchProducts('B07HP9PBMX{enter}');
        productDetailsPage.clickOnFirstProduct();
        productDetailsPage.checkImgLoad();
    });

     it.only('Search for Scissors, swap different colors and Add to Cart', () => {

        productDetailsPage.swapProductColor();
        cartPage.addToCart(); 
        
     });

     it('Search for two differents Scissorsa and ADD itens on Cart', () => {
        cartPage.addToCart();
        cartPage.checkAddedToCart('First');
        Home.searchProducts('B07H3QKN2Z{enter}');
        productDetailsPage.clickOnFirstProduct();
        productDetailsPage.checkImgLoad();
        cartPage.addToCart();
        cartPage.checkAddedToCart('Sec');
     });
    afterEach (() => {
        cy.wait(10)
        cartPage.goToCart();
        cartPage.cleanCart(); 
    });
});