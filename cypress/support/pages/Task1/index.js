const el = require ('./elements').ELEMENTS;
class Home {
    accessAmazon(){
        cy.visit('https://www.amazon.com/');

    }
    
    validateHomeLogo (){
        cy
        .get(el.idLogo)
        .should ('be.visible');
    }

    goTo(page){
  
        switch (page) {
    
            case 'Customer Service':
                cy.get(el.hambMenu).click();
                cy.get(el.customerServiceMenu).click();
                break;
            case 'Todays Deals':
                cy.get(el.idTodayDeals).click();
                break;
        }

    }

    searchProducts(product){
        cy
        .get(el.searchBar)
        .type(product)
    }
//customerService
    validateCustomerServicePage(){
        cy.get(el.hubHelpSeaerch);
    }

    searchOnFindMoreSolutions (Text){
        cy
        .get(el.hubHelpSeaerch)
        .type(Text);

    }
    validateSearch(){
       cy
       .get(el.textReturnSearch)
       .contains('51 search results for');
       cy
       .get(el.firtResultSearch)
       .should ('be.visible');
    }



}
export default new Home();