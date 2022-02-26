import Selectors from "../pages/Selectors";

let selectors = new Selectors()

describe('Simple Form Demo', () => {


    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })
    it('Check "Checkbox Demo" page functionality.', () => {
        selectors.inputFormItem1().click()
        selectors.openSecondItem().click()
        selectors.checkBoxSelected().check()
        selectors.textIsVisible().should("have.text","Success - Check box is checked")
        selectors.checkAllBtn().click()
        selectors.selectSecond().click()
        selectors.uncheckAll().click()
    })

})