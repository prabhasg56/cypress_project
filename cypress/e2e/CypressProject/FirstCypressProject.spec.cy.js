/// <reference types = "cypress"/>

context('User Registration and Login', function () {
    it('Invoke Amazon Web Site', () => {
        cy.visit('www.amazon.in');
        cy.viewport(2280,1020);
        cy.contains('amazon').should('exist');
        
    })
    it('User Registration', function(){
        cy.contains('Account & Lists').click();
        cy.contains('Create your Amazon account').click();
        cy.get('#ap_customer_name').type('Prabhas kumar');
        cy.get('#ap_phone_number').type('7782835748');
        cy.get('#ap_password').type('prabhasSPK@1998');
        cy.get('#continue').click();
        //cy.contains('Solve Puzzle').click();
    })
    it('User Login', function(){
        cy.go(-2);
        cy.get('#ap_email').type('7782835748');
        cy.get('.a-button-inner > #continue').click();
        cy.get('#ap_password').type('prabhasSPK@1998');
        cy.get('#signInSubmit').click();
    
        cy.get('#ap_password1').type('prabhasSPK@1998');
        // let captcha = cy.get('#auth-captcha-image');
        // console('captcha')
        // console.log(captcha);
        cy.get('#signInSubmit').click();

    })
   
})
