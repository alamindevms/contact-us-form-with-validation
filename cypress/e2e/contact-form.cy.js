describe('Contact Form', () => {
    it('submits the form successfully', () => {
      cy.visit('/');
  
      // Fill in the form fields
      cy.get('input[id="name"]').type('Al Amin Hossain');
      cy.get('input[id="email"]').type('alamindev.io@gmail.com');
      cy.get('input[id="phone"]').type('01922866947');
      cy.get('input[id="subject"]').type('Hi there.');
      cy.get('textarea[id="message"]').type('Programmer like to debug.');
  
      // Submit
      cy.get('button[type="submit"]').click();
  
      // successful
      cy.contains('Submission Successful').should('be.visible');
    });
  
    it('displays error messages for empty fields', () => {
      cy.visit('/');
  
      // Submit without filling in any fields
      cy.get('button[type="submit"]').click();
  
      // show the error messages for each required field
      cy.get('p[data-error="name"]').should('be.visible');
      cy.get('p[data-error="email"]').should('be.visible');
      cy.get('p[data-error="phone"]').should('be.visible');
      cy.get('p[data-error="subject"]').should('be.visible');
      cy.get('p[data-error="message"]').should('be.visible');
    });
  });
  