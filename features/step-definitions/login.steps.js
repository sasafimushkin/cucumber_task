const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@wdio/globals');
const loginPage = require('../../test/pages/LoginPage');

Given('User is located on the main page of saucedemo website', async () => {
    await loginPage.open();
    await expect(loginPage.loginButton).toBeDisplayed();
});

When('User clicks the {string} button', async (buttonName) => {
    if (buttonName === 'Login') {
        await loginPage.clickLogin();
    }
});

Then('User should see {string} error message', async (expectedMessage) => {
    const actual = await loginPage.getErrorMessage();
    expect(actual).toContain(expectedMessage);
});
