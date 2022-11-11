class customerServicePage {
    elements = {
        idLogo:() => cy.get('#nav-logo-sprites'),
        hubHelpSeaerch: () => cy.get( '#hubHelpSearchInput'),
        boxReturnSearch: () => cy.get ('.a-box-inner'),
        textReturnSearch: () => cy.get('.a-column > .a-color-secondary'),
        firtResultSearch: () => cy.get (':nth-child(3) > .cs-help-search-results > .cs-help-search-result-row > .a-size-medium > .a-link-normal')
    }

    validateCustomerServicePage(){
        this.elements.hubHelpSeaerch();
    }

    searchOnFindMoreSolutions (Text){
        this.elements.hubHelpSeaerch()
        .type(Text);

    }
    validateSearch(){
        this.elements.textReturnSearch()
       .contains('51 search results for');
       this.elements.firtResultSearch()
       .should ('be.visible');
    }



}
export default new customerServicePage();