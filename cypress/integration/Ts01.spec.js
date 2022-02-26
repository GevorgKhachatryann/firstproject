
import {Common1} from "./common1";
const token = "6d73c1b5cf459c71b11136a4227b3e8635cd1abebc718e23375e40896c005ae7"
describe("TestSuite01", () => {
    it('Scenario 01', function () {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users" ,
        }).then(response => {
          //  expect(response.status).to.eq(200)
            Common1().assert().checkEqual(response.status, 200)
            Common1().assert().haveLength(response.body, 20)
        });
    });
    it('Scenario 02', function () {
        //  let date = new Date()
        let mail = 'poxos775@example.com'

        cy.request({
            headers: {
                "Authorization": `Bearer ${token}`
            },

            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                "name": `Poxos Poxosyan`,
                "email": mail,
                "gender": "Male",
                "status": "active"
            },
        }).then(response => {
            // expect(response.status).to.be.eq(201)
            Common1().assert().checkEqual(response.status, 201)
            let id = response.body.id
            let mail = response.body.email
            let name = response.body.name
            let gender = response.body.gender
            let status = response.body.status

            cy.request({
                headers: {
                    "Authorization": `Bearer ${token}`
                },

                method: "GET",
                url: `https://gorest.co.in/public/v2/users/${id}`

            }).then(assert => {
                Common1().assert().checkEqual(assert.status, 200)
                Common1().assert().checkEqual(assert.body.name, name)
                Common1().assert().checkEqual(assert.body.email, mail)
                Common1().assert().checkEqual(assert.body.gender, gender)
                Common1().assert().checkEqual(assert.body.status, status)


              cy.request({
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },

                    method: "DELETE",
                    url: `https://gorest.co.in/public/v2/users/${id}`
                }).then(response => {
                    // expect(response.status).to.be.eq(204)
                    Common1().assert().checkEqual(response.status, 204)
                })


            });
        });
    })

})
