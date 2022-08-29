import Selectors from "../../pages/Selectors";

let selectors = new Selectors()
describe('Simple Form Demo', () => {

    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })

        it('Check " Simple Form Demo" functionality.', () => {
            selectors.inputFormItem().eq(0).click()
            selectors.openFirstItem().click()
            selectors.enterYourMessage().type('Hello, World')
            selectors.showMessagebtn().click()
            selectors.outputText().should("have.text", "Hello, World")
            selectors.firstValue().type('7')
            selectors.secondValue().type('5')
            selectors.getTotal().click()
        })
})