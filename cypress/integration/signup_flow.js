describe('Signup Test Suite', function(){

    it('visit koala staging', function()
    {
        cy.visit("https://koala-demo.staging.order.koala.io/");
        cy.title().should('contain','Koala Grill');
    })
    
    it('go to signup form', function()
    {
        cy.contains('Sign In/Join').click();
        cy.contains('Sign Up').click();
    })

    it('fill and submit signup form', function()
    {
        function RandomName() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
          }

          function RandomEmail() {
            var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
            var string = '';
            var email = '';
            for (var ii = 0; ii < 15; ii++) {
               string += chars[Math.floor(Math.random() * chars.length)];
            }
            
            email = (string + '@gmail.com');
            return email;
          }

          function RandomPhone() {
            var phone = Math.floor(2120000000 + (2129900000-2120000000) * Math.random());
            return phone;
          }

          function RandomPassword() {
            var randomPass = Math.random().toString(36).slice(-8);
            return randomPass;
          }
          
          cy.get('#first_name').type(RandomName());
          cy.get('#last_name').type(RandomName());
          cy.get('#email').type(RandomEmail());
          cy.get('input[placeholder*="Phone Number"]').type(RandomPhone());
          cy.get('#password').type(RandomPassword());
          //cy.get('[type="checkbox"]').check();
          cy.get('form').find('[name="terms_and_conditions"]').check({force: true});
          //cy.get('.control__indicator').check();
          //cy.get('.styles__StyledPrimaryButton-sc-3mz1a9-0 .fSGwvD').submit({force: true});
          cy.get('#password').type('{enter}')
          cy.contains('Welcome back').should('be.visible');
          

          



    })
})