import Selectors from "../pages/Selectors";

let selectors = new Selectors()

describe('Simple Form Demo', () => {


    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })
    it('Check "Ajax Form Submit" page functionality.', () => {
        selectors.inputFormItem6().click()
        selectors.opensixthItem().click()
        selectors.name().type('dddddddd')
        selectors.description().type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        selectors.ajaxsubmit().click()
        selectors.checksubmit().should('have.text',"Form submited Successfully!")
    })

})