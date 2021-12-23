describe('Sign In Test Suite', function(){

    it('visit koala staging', function()
    {
        cy.visit("https://koala-demo.staging.order.koala.io/");
        cy.title().should('contain','Koala Grill');
    })
    
    it('go to signin form and login', function()
    {
        cy.contains('Sign In/Join').click();
        cy.get('#identifier').type('test12345@test.com');
        cy.get('#secret').type('12341234');
        cy.get('[type=submit]').click();
        cy.contains("Welcome back, Cypress").should('be.visible');

        
    })

})
