class LoginPage{
    

    getEmail()
    {
        return cy.get('#loginForm-eMail')
    }
    
    getPassword()
    {
        return cy.get('#loginForm-password')
    }

    getLoginButton()
    {
        return cy.get('#login-submit-btn',{ timeout: 50000 })
    }

    getErrorMsg()
    {
        return cy.get('.m-Notification > .l-flex__primary')
    }

    getCapcha()
    {
        return cy.get('.frc-container')
    }
        
    }
    
    export default LoginPage;