

import Selectors from "../pages/Selectors";

let selectors = new Selectors()
describe('Simple Form Demo', () => {

    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })

    it('Check "Input Form Submit" page functionality', () => {
        selectors.inputFormItem4().click()
        selectors.openFifthItem().click()
        selectors.sendBtnNotWorking().should("not.be.disabled")
        selectors.firstName().type('Gevorg')
        selectors.lastName().type('Khachatryan')
        selectors.elAddress().type('example@gmail.com')
        selectors.phone().type('1234567896')
        selectors.address().type('1234567898')
        selectors.city().type('kkkkk')
        selectors.state().select('Georgia')
        selectors.zip().type('1234')
        selectors.website().type('aaaaaaaaaa.com')
        selectors.yes().click()
        selectors.comment().type('aaaaaaaaaaaaaa')
        selectors.pencil().click()
        selectors.sendBtn().click()
    })


})