import Home from "../support/pages/homePage";
import customerServicePage from "../support/pages/customerServicePage"
import productDetailsPage from "../support/pages/productDetailsPage"
import todayDealsPage from "../support/pages/todaysDealsPage"
describe('AccessAmazon', () => {
    beforeEach(() => {
        Home.accessAmazon();
        Home.validateHomeLogo();
    });
    it('Go To Customer Service Page and search for more solutions', () => {
       
        Home.goTo('Customer Service');
        customerServicePage.validateCustomerServicePage();
        customerServicePage.searchOnFindMoreSolutions('Where is my stuff?{enter}');
        customerServicePage.validateSearch();

     });
     it('Acces Todays delas on Amazon.com and validate the filter', () => {
        Home.goTo('Todays Deals');
        todayDealsPage.selectFilter('Amazon Devices');
        todayDealsPage.clearFilter();
     });   

     it('Search for Scissors, swap different colors and Add to Cart', () => {
        Home.searchProducts('B07HP9PBMX{enter}');
        productDetailsPage.clickOnFirstProduct();
        productDetailsPage.checkImgLoad();
        productDetailsPage.swapProductColor();
        
     });

});