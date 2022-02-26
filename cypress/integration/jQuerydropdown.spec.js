import Selectors from "../pages/Selectors";

let selectors = new Selectors()

describe('Simple Form Demo', () => {


    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })
    it('Check "Ajax Form Submit" page functionality.', () => {
        selectors.inputFormItem6().click()
        selectors.openseventhItem().click()
        selectors.firstselect().select(1, {force: true})
        selectors.select3().select([1, 2, 3], {force:true})
        selectors.lastcheck().should('have.length', 3)
        selectors.firstclick().click()
        selectors.secondclick().click()
        selectors.thirdclick().click()
        selectors.check5().should('not.have.length')
        selectors.fourthclick().click()
        cy.get('#select2-wzuz-result-93vu-GU').should("be.disabled")
    })

})