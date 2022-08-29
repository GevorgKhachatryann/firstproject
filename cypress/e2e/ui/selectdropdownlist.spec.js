import Selectors from "../../pages/Selectors";

let selectors = new Selectors()
describe('Simple Form Demo', () => {

    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })

    it('Check " Select Dropdown list" functionality.', () => {
        selectors.inputFormItem3().click()
        selectors.openFourthItem().click()
        selectors.selectDay().select('Sunday')
        selectors.selectedDay().should("have.text","Day selected :- Sunday")
        selectors.selectNewYork().click()
        selectors.firstSelected().click()
        selectors.getAllSelected().should("have.text","First selected option is : New York")
    })


})