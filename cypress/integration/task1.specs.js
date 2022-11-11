import Home from "../support/pages/Task1";
describe('AccessAmazon', () => {
    it('Acess Amazon.com', () => {
        Home.accessAmazon();
       Home.validateHomeLogo();
        Home.goTo('Customer Service');
        Home.validateCustomerServicePage();
       Home.searchOnFindMoreSolutions('Where is my stuff?{enter}');
      Home.validateSearch();
         // search id  
     });
     it('Acess Amazon.com and validate the filter', () => {
        
        Home.goTo('Todays Deals');
        cy.wait(10)
        todayDealsPage.selectFilter('Amazon Devices');
        todayDealsPage.clearFilter();
     });   
});