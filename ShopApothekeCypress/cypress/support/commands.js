// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import LoginPage from "../support/pageObject/LoginPage";
import CustomerPage from "../support/pageObject/CustomerPage";

    const loginPage = new LoginPage();
    const customerPage = new CustomerPage();


Cypress.Commands.add('validateError', (message) => { 
    
    loginPage.getErrorMsg().invoke('text').then((text => {
        expect(text.trim()).to.eq(message)
    }))
})

Cypress.Commands.add('validateWelcomeMsg', (message) => { 
    
    customerPage.getHead().invoke('text').then((text => {
        expect(text.trim()).to.eq(message)
    }))
})

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
