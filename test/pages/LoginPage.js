class LoginPage {
    get loginButton()  { return $('#login-button'); }
    get errorMessage() { return $('[data-test="error"]'); }

    async open() {
        await browser.url('https://www.saucedemo.com');
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        await this.errorMessage.waitForDisplayed({ timeout: 3000 });
        return this.errorMessage.getText();
    }

    async isErrorMessageDisplayed() {
        return await this.errorMessage.isDisplayed();
    }
}

module.exports = new LoginPage();
