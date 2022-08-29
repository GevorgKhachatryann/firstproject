import Selectors from "../../pages/Selectors";

let selectors = new Selectors()

describe('Simple Form Demo', () => {


    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })
    it('Check "Ajax Form Submit" page functionality.', () => {
        selectors.inputFormItem6().click()
        selectors.opensixthItem().click()
        cy.request({
            method: 'POST',
            url: 'https://demo.seleniumeasy.com/php/first-form-demo.php',
            body: {
                title: 'gggggg',
                description: 'ddddddddddddddddddddddddddddddddddddddd',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

})