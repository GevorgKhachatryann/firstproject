describe('Login without UI', () =>{
    it('should able to log in ', () => {
        cy.request({
            url:"https://conduit.productionready.io/api/users/login",
            method:'POST',
            body: {
                user: {email: "testing1234@test.com", password: "test"}
            }
        }).then(res => localStorage.setItem('jwtToken',res.user.token));

        cy.visit("https://demo.realworld.io/#/")
    });
})