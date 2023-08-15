    describe('On LinkedIn', () => {

        it('I can login', () => {

            cy.visit('https://linkedin.com');

            cy.get('.nav__button-secondary').click();

            cy.get('#username').click().type('iepuree96@gmail.com');

            cy.get('#password').click().type('Sienna2910').type('{enter}');

            cy.get('#ember14').should('exist')

        })












    })
