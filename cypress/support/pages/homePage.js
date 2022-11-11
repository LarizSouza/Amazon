class HomePage {
    elements = {
        idLogo:() => cy.get('#nav-logo-sprites'),
        hambMenu:() => cy.get('#nav-hamburger-menu'),
        customerServiceMenu: () => cy.get('.hmenu.hmenu-visible > li:nth-of-type(24) > .hmenu-item'),   
        searchBar: () => cy.get('#twotabsearchtextbox'), 
        idTodayDeals: () => cy.get ('[href="/gp/goldbox?ref_=nav_cs_gb"]'),
        
    }
    accessAmazon(){
        cy.visit('https://www.amazon.com/');

    }
    
    validateHomeLogo (){
        this.elements.idLogo()
        .should ('be.visible');
    }

    goTo(page){
  
        switch (page) {
    
            case 'Customer Service':
                this.elements.hambMenu().click();
                this.elements.customerServiceMenu().click();
                break;
            case 'Todays Deals':
                this.elements.idTodayDeals().click();
                break;
        }

    }

    searchProducts(product){
        this.elements.searchBar()
        .type(product)
    }

}
export default new HomePage();