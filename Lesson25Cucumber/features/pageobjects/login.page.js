

const Page = require('./page');

class LoginPage extends Page {
    
    get inputEmail () {
        return $('.i-input-group__cell .i-input[type="email"]');
    };

    get inputPassword () {
        return $('.i-input[type="password"]');
    };

    get btnSubmit () {
        return $('.i-button_disabled[form="loginForm"]');
    };

    
    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    };

    
    open () {
        return super.open('login');
    };
}

module.exports = new LoginPage();
