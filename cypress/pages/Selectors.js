export default class Selectors {


    valueShownField() {
        return cy.get('p.groupradiobutton')
    };

    adCloseBtn() {
        return cy.get('#at-cv-lightbox-close')
    };

    inputFormItem() {
        return cy.get(".dropdown-toggle")
    };

    openFirstItem() {
        return cy.get('.open > .dropdown-menu > :nth-child(1) > a')
    }

    enterYourMessage() {
        return cy.get('.form-group > #user-message')
    };

    showMessagebtn() {
        return cy.get('#get-input > .btn')
    };

    outputText() {
        return cy.get('#display')
    };

    firstValue() {
        return cy.get('#sum1')
    };

    secondValue() {
        return cy.get('#sum2')
    };

    getTotal() {
        return cy.get('#gettotal > .btn')
    };

    inputFormItem1() {
        return cy.get(":nth-child(1) > :nth-child(1) > .dropdown-toggle")
    };

    openSecondItem() {
        return cy.get('.open > .dropdown-menu > :nth-child(2) > a')
    };

    checkBoxSelected() {
        return cy.get('#isAgeSelected')
    };

    textIsVisible() {
        return cy.get(' #txtAge ')
    }

    checkAllBtn() {
        return cy.get('#check1')
    }

    selectSecond() {
        return cy.get(' :nth-child(4) > label > .cb1-element')
    }

    uncheckAll() {
        return cy.get('#check1')
    }

    inputFormItem2() {
        return cy.get(":nth-child(1) > :nth-child(1) > .dropdown-toggle")
    }

    openThirdItem() {
        return cy.get('.open > .dropdown-menu > :nth-child(3) > a')
    }

    clickMale() {
        return cy.get('[name="optradio"][value="Male"]')
    }

    getCheckedValue() {
        return cy.get('#buttoncheck')
    }

    maleIsChecked() {
        return cy.get('.radiobutton')
    }

    clickFemale() {
        return cy.get('.panel-body > :nth-child(3) > input')
    }

    getCheckedValue1() {
        return cy.get('#buttoncheck')
    }

    FemaleIsChecked() {
        return cy.get('.radiobutton')
    }

    getValues() {
        return cy.get('.panel-body > .btn')
    }

    inputFormItem3() {
        return cy.get(":nth-child(1) > :nth-child(1) > .dropdown-toggle")
    }

    openFourthItem() {
        return cy.get(".open > .dropdown-menu > :nth-child(4) > a")
    }

    selectDay() {
        return cy.get('#select-demo')
    }

    selectedDay() {
        return cy.get('.selected-value')
    }

    selectNewYork() {
        return cy.get('[value="New York"]')
    }

    firstSelected() {
        return cy.get('#printMe')
    }

    getAllSelected() {
        return cy.get('.getall-selected')
    }

    inputFormItem4() {
        return cy.get(":nth-child(1) > :nth-child(1) > .dropdown-toggle")
    }

    openFifthItem() {
        return cy.get('.open > .dropdown-menu > :nth-child(5) > a')
    }

    sendBtnNotWorking() {
        return cy.get('.btn')
    }

    firstName() {
        return cy.get('[name="first_name"]')
    }

    lastName() {
        return cy.get('[name="last_name"]')
    }

    elAddress() {
        return cy.get('[name="email"]')
    }

    phone() {
        return cy.get('[name="phone"]')
    }

    address() {
        return cy.get('[name="address"]')
    }

    city() {
        return cy.get('[name="city"]')
    }

    state() {
        return cy.get('[name="state"]')
    }

    zip() {
        return cy.get('[name="zip"]')
    }

    website() {
        return cy.get('[name="website"] ')
    }

    yes() {
        return cy.get('[value="yes"] ')
    }

    comment() {
        return cy.get('[name="comment"] ')
    }

    pencil() {
        return cy.get('.glyphicon.glyphicon-pencil')
    }

    sendBtn() {
        return cy.get('.btn')
    }

    inputFormItem6() {
        return cy.get(":nth-child(1) > :nth-child(1) > .dropdown-toggle")
    };

    opensixthItem() {
        return cy.get('.open > .dropdown-menu > :nth-child(6) > a')
    };
    name(){
        return cy.get('#title')
    }
    description(){
        return cy.get( '#description')
    }
    ajaxsubmit(){
        return  cy.get('#btn-submit')
    }
    checksubmit(){
        return cy.get('#submit-control')
    }
    openseventhItem() {
        return  cy.get('.dropdown-menu > :nth-child(7) > a')
    };
    firstselect(){
        return  cy.get('panel-body, #country')
    }
    select3(){
        return cy.get("body > div.container-fluid.text-center > div > div.col-md-6.text-left > div:nth-child(3) > div > div.panel-body > select")
    }
    lastcheck(){
        return  cy.get("[class='select2-selection__rendered']")
    }
    firstclick(){
        return cy.get('[title="Alaska"] > .select2-selection__choice__remove')
    }
    secondclick(){
        return  cy.get('[title="Arizona"] > .select2-selection__choice__remove')
    }
    thirdclick(){
        return       cy.get('.select2-selection__choice__remove')

    }
    check5(){
        return         cy.get("body > div.container-fluid.text-center > div > div.col-md-6.text-left > div:nth-child(3) > div > div.panel-body > span > span.selection > span > ul > li > input")
    }
    fourthclick(){
        return  cy.get(':nth-child(4) > .panel > .panel-body > .select2 > .selection > .select2-selection > .select2-selection__arrow')
    }
}

export const loopSelector = {
    "genderIsMale": '[name="gender"][value="Male"]',
    "genderFemale": '[name="gender"][value="Female"]',
    "ageGroupIs": '[value="0 - 5"]',
    "ageGroupIs2": '[value="5 - 15"]',
    "ageGroupIs3": '[value="15 - 50"]',
    "getValues": '[.panel-body > .btn]'

}