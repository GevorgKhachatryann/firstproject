import registrationPage from "../../pages/registrationPage"
describe('Simple Form Demo', () => {
    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/register?returnUrl=%2F')

    })
    it('Register', () => {
        registrationPage.typeFirstName('tesvan')
        registrationPage.typeLastName('LCC')
        registrationPage.selectDate([1])
        registrationPage.selectMonth("December")
        registrationPage.selectYear('2005')
        registrationPage.typeEmail("testing123@gmail.com")
        registrationPage.typeCompany("company123")
        registrationPage.typePassword("password456")
        registrationPage.typeConfirmPassword("password456")
        registrationPage.clickSubmitBtn()
        
    })

})