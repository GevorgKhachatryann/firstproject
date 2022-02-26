class registrationPage {

    elements = {
        firstNameInput:() => cy.get("#FirstName"),
        lastNameInput: () => cy.get('#LastName'),
        dateOfBirth:()=> cy.get('[name="DateOfBirthDay"]'),
        monthOfBirth:()=> cy.get('[name="DateOfBirthMonth"]'),
        yearOfBirth:()=> cy.get('[name="DateOfBirthYear"]'),
        email:()=> cy.get('#Email'),
        company:()=> cy.get('#Company'),
        password:()=> cy.get("#Password"),
        confirmpassword:()=> cy.get('#ConfirmPassword'),
        SubmitBtn:()=> cy.get('#register-button'),

    }
    typeFirstName(firstName){
        this.elements.firstNameInput().clear().type(firstName)

    }
    typeLastName(lastName){

        this.elements.lastNameInput().clear().type(lastName)
    }
    selectDate(day){
        this.elements.dateOfBirth().select(day)
    }
    selectMonth(month){
        this.elements.monthOfBirth().select(month)
    }
    selectYear(year){
        this.elements.yearOfBirth().select(year)
    }
    typeEmail(email){
        this.elements.email().clear().type(email)
    }
    typeCompany(company){
        this.elements.company().clear().type(company)
    }
    typePassword(password){
        this.elements.password().clear().type(password)
    }
    typeConfirmPassword(confirm){
        this.elements.confirmpassword().clear().type(confirm)
    }
    clickSubmitBtn(submit){
        this.elements.SubmitBtn().click(submit)
    }

}
  module.exports = new registrationPage()