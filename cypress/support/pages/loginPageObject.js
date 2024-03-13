class LoginPageObject {
    visit(){
        cy.visit('https://qa-auth.assecobs.com/login?service=https://waproanyqa.assecobs.pl/');
    }

    correctUserLogin(){
        return 'waproanywhere+74@proton.me';
    }

    correctUserPassword(){
        return 'Testauto4000';
    }

    get login() {
        return cy.get('#username');
    }

    get password() {
        return cy.get('#password');
    }

    get loginBtn() {
        return cy.get('.absui-btn');
    }

    typeLogin(username) {
        this.login.clear().type(username, {force: true});
    }

    typePassword(password) {
        this.password.clear().type(password, {force: true});
    }

    clickOnLoginButton(){
        this.loginBtn.click({ multiple: true });
    }
}

export default LoginPageObject;
