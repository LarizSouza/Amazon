class productDetailsPage {

    elements = {
        
        imgColorOne: () => cy.get('#color_name_0'),
        imgColorTwo: ()=> cy.get('#color_name_1'),
        imgColorThree: ()=> cy.get('#color_name_2'),
        imgColorFour: ()=> cy.get('#color_name_3'),
        idImgc: () => cy.get('#imgTagWrapperId'),
        productColor: () => cy.get('.po-color > .a-span9 > .a-size-base'),
        firstProduct: () => cy.get('.s-widget-container > .s-card-container > .a-spacing-base > .puis-padding-left-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus'),
        idVariationColorname: () => cy.get('#variation_color_name'),
   
    }


    checkImgLoad (){
        this.elements.idImgc()
        .should('be.visible')
    }
    clickOnFirstProduct(){
        this.elements.firstProduct().click();

    }

    swapProductColor (){

                this.elements.imgColorOne().click();
                this.elements.idVariationColorname()
                .contains('3pc Black w/ Dark Gray Inlays');
                cy.wait(5)
                this.elements.imgColorTwo().click();
                this.elements.idVariationColorname()
                .contains('3pc Mint w/ Light Green Inlays');
                cy.wait(5)
                this.elements.imgColorThree().click();
                this.elements.idVariationColorname()
                .contains('3pc Red w/ Black Inlays');
                cy.wait(5)

            } 
            
            
            
       
 

    

    

}
export default new productDetailsPage();