class todayDealsPage {

    elements = {
        
        amazonDevicesFilter: () => cy.get('[data-testid="carousel-D6282403F93F6CE2C527F3735DA57B7A"] > .GridPresets-module__gridPresetImageSection_2p68sRHExZZwCJorBe2_N3 > .GridPresets-module__gridPresetImage_1FnIo-Do5TDxU-XJMp1M77'),
        amazonDevicesCheckBox: ()=> cy.get(':nth-child(1) > label > .CheckboxFilter-module__gridFilterCheckbox_9gZBKxneWNZMc30ac9ue7'),
        clearBtn: () => cy.get('.LinkFilterOption-module__linkFilterOptionListElement_AzC4LFMfeFF1CkwveJM01 > .LinkFilterOption-module__linkFilterOption_k3Xp4bgxEaBmcgTA0UAxc'),
       
        
    }


    selectFilter(filter){
        switch (filter) {
            case 'Amazon Devices':
             this.elements.amazonDevicesFilter().click();
                break;
            case 'Eletronics':
               // cy.get(el.todaysDeals).click();
                break;
            case 'TVs':
                cy.get(el.todaysDeals).click();
                break;
        }
    }

    clearFilter(){
        this.elements.clearBtn()
        .click();
        cy.wait(2)
        this.elements.amazonDevicesCheckBox()
        .should('not.be.checked');
    }

}
export default new todayDealsPage();