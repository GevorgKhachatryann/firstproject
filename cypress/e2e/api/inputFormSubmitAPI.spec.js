
import Selectors from "../../pages/Selectors";

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

            cy.request({
                method: 'POST',
                url: 'https://demo.seleniumeasy.com/input-form-demo.html',
                body: {
                    first_name: 'Gevorg',
                    last_name: 'Khachatryan',
                    email: 'test@mail.ru',
                    phone: '(845)555-5555',
                    address: 'United States',
                    city: 'Los Angeles',
                    state: 'Washington',
                    zip: '98290',
                    website: 'sssssssssssss',
                    hosting: 'yes',
                    comment: '',
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
            })

    })


})