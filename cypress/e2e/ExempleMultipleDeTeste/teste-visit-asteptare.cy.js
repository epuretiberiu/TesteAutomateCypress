

describe('Testemultiple', () => {


    //Test verificare segment din URL
    // it('verifica daca un URL contine un cuvant cheie', () => {

    //     cy.visit('https://stirileprotv.ro/stiri/international/donald-trump-pus-sub-acuzare-pentru-a-patra-oara-justitia-din-statul-georgia-a-validat-zece-acuzatii-impotriva-sa.html');
        
    //     cy.url().should('include', 'donald') // verifica un segment

    //     cy.get('#onetrust-accept-btn-handler').click();

    //     })

    // Testul cu delay

    // it('asteapta 10 secunde', () => {

    //     cy.visit('https://google.ro');

    //     cy.get('#L2AGLb > .QS5gu').click();

    //     cy.wait(10000); // 10 secunde = 10000 => 1 sec = 1000 ms

    //     cy.get('#APjFqb').type('au trecut 10 secunde');

    // })

    // Testul cu selector de timp atribuit

    // it('Selectez folosind un atribut', () => {

    //     cy.visit('https://www.google.ro');

    //     cy.get('#L2AGLb > .QS5gu').click();

    //     cy.get('[alt="Google"]').should('be.visible'); //Selector atribut alt + assertion cu visible


    // })

    //Testul cu screenshot pagina

    // it ('Fac un scrennshot la pagina', () => {

    //     cy.visit('https://google.com');

    //     cy.screenshot (); //Face screenshot la pagina si il duce intr-un folder default

    
    // })

    //Testul constanta si verificare continut input

    //it('Verific o valoare din input', () => {

        //  cy.visit('https://google.com');

        //  cy.get('#L2AGLb > .QS5gu').click();

        //  const googleSearch = cy.get('#APjFqb'); // constanta

        //  googleSearch.type('sunt acasa');
        //  googleSearch.should('have.exist', 'acasa');

        //Testul verifica existenta unei clase pe un element selectat

     


    //})

     it('Verifica o valoare', () =>{

//         cy.visit('https://libris.ro')

//         cy.get('#autoCompleteButton').should('have.class', 'onSearchClick'); //Exista clasa pe buton? 

     })





 })  