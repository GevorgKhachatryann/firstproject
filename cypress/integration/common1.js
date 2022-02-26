export const Common1 = ()  => {
    return{
        assert: () => {
            return {
                checkEqual: (status, expectedStatus) =>{
                    expect(status).to.be.eq(expectedStatus)
                },

                haveLength: (body, length) =>{
                    expect(body).to.have.length(length)
                },
            }
        }
    }
}