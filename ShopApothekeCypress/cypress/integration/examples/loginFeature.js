/// <reference types="cypress" />
import LoginPage from "../../support/pageObject/LoginPage";
import CustomerPage from "../../support/pageObject/CustomerPage";
import "../../support/commands";

describe('Validate Login feature ', function (){
    
    let data;
    
    beforeEach(function () {
      
      cy.visit(Cypress.env("url"));
      
        cy.fixture("input").then(function (fdata) {
          data = fdata;
        })

        cy.get("body").then((body) => {
            if (body.find("Alles akzeptieren").length > 0) {
              cy.contains("Alles akzeptieren").click();
            }
          })


      })

      
      const loginPage = new LoginPage();
      const customerPage = new CustomerPage();


      it('Validate if user is able to login with valid credential', () => {

        loginPage.getEmail().type(data.email)
        loginPage.getPassword().type(data.pwd)  
        loginPage.getCapcha().click()
        loginPage.getLoginButton().should('be.enabled').click({force: true})
        cy.validateWelcomeMsg(data.welcomeMsg)
      })

      it('Validate notification error if user login with invalid credential', () => {
        loginPage.getEmail().clear()
        loginPage.getEmail().type(data.invalidEmail)
        loginPage.getPassword().type(data.invalidPwd)
        loginPage.getCapcha().click()
        loginPage.getLoginButton().should('be.enabled').click({force: true})
        cy.validateError(data.errMsg)
      })
  
   

})