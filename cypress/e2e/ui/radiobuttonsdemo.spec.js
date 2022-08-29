import Selectors, {loopSelector} from "../../pages/Selectors";

let selectors = new Selectors()
describe('Simple Form Demo', () => {

    beforeEach(() => {
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        selectors.adCloseBtn().click()
    })


    it('Check "Radio Buttons Demo" page functionality.', async () => {
        selectors.inputFormItem2().click()
        selectors.openThirdItem().click()
        selectors.clickMale().click()
        selectors.getCheckedValue().click()
        selectors.maleIsChecked().should("have.text","Radio button 'Male' is checked" )
        selectors.clickFemale().click()
        selectors.getCheckedValue1().click()
        selectors.FemaleIsChecked().should("have.text","Radio button 'Female' is checked" )
        /*selectors.genderIsMale().click()
        selectors.ageGroupIs().click()
        selectors.getValues().click()
        selectors.valueShownField().should('contain','Sex : Male')
        selectors.valueShownField().should('contain','Age group: 0 - 5')
        */
        let gender = [loopSelector.genderIsMale, loopSelector.genderFemale]
        let age = [loopSelector.ageGroupIs, loopSelector.ageGroupIs2, loopSelector.ageGroupIs3]
        let s  = loopSelector.genderIsMale.split('=')[2].replace("\"",'').replace(']','').replace('"','')
        console.log(s)
        let a = loopSelector.genderFemale.split('=')[2].replace("\"",'').replace(']','').replace('"','')
        console.log(a)
        let d = loopSelector.ageGroupIs.split('=')[1].replace("\"",'').replace(']','').replace('"','')
        console.log(d)
        let cc = loopSelector.ageGroupIs2.split('=')[1].replace("\"",'').replace(']','').replace('"','')
        console.log(cc)
        let ee = loopSelector.ageGroupIs3.split('=')[1].replace("\"",'').replace(']','').replace('"','')
        console.log(ee)
        let ageGroup
        for(let i = 0; i < gender.length; i++){
            cy.get(gender[i]).click()
            selectors.getValues().click()
            for (let j = 0; j < age.length; j++){

                cy.get(age[j]).click()
                selectors.getValues().click()
                ageGroup = age[j].split('=')[1].replace("\"", '').replace(']', '').replace('"', '')
                console.log(ageGroup)

                console.log(selectors.valueShownField())
                cy.contains(`Sex : ${gender[i].split('=')[2].replace("\"", '').replace(']', '').replace('"', '')}`).should('be.visible')
                cy.contains(`Age group: ${age[j].split('=')[1].replace("\"", '').replace(']', '').replace('"', '')}`).should('be.visible')

                // expect(Cypress.$('p.groupradiobutton').val()).to.contains()
                // await expect(await selectors.valueShownField()).to.contains()
                }
            }




        //let arr = []


        // cy.get(".panel-body > .radio-inline").each((el, i) => {
        //     arr.push(el.text())
        //     console.log(arr)
        //     cy.get(".panel-body > :nth-child(2) > :nth-child(2) > input").click()
        //     cy.get(":nth-child(3) > :nth-child(2) > input").click()
        //     cy.get(".panel-body > .btn").click()
        //
        //     selectors.valueShownField().should('contain','Sex : Male')
        //     selectors.valueShownField().should('contain','Age group: 0 - 5')
        //
        //     expect(`Sex : Male`).to.be.eq(`Sex : ${arr[0]}`)
        // })
        // selectors.valueShownField().click()
        // selectors.valueShownField().click()
    })

})