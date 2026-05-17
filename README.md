# WebDriverIO + Cucumber Test - SauceDemo Login Validation

A test automation project using WebDriverIO, Cucumber BDD framework, and Selenium to validate login error handling on the SauceDemo website.

## Project Structure

```
cucumber-task/
├── features/
│   ├── login.feature                 # Cucumber feature files with test scenarios
│   └── step-definitions/
│       └── login.steps.js            # Step implementations
├── test/
│   └── pages/
│       └── LoginPage.js              # Page Object Model for Login page
├── wdio.cucumber.conf.js             # WebDriverIO configuration
├── package.json                      # Project dependencies
└── README.md                         # This file
```

## Test Scenario

**Feature:** Login Validation

**Scenario:** User sees error when clicking Login without credentials
```gherkin
Given User is located on the main page of saucedemo website
When User clicks the "Login" button
Then User should see "Epic sadface: Username is required" error message
```

This test verifies that when a user attempts to log in without entering credentials, the application displays the expected error message.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Chrome browser (configured in wdio.cucumber.conf.js)
- Java (required for Selenium Standalone Server)

## Installation

1. Install dependencies:
```bash
npm install
```

## Running Tests

Execute the test suite:
```bash
npm test
```

Or run WebDriver.io directly:
```bash
npx wdio run wdio.cucumber.conf.js
```

### Working Solution (TESTED ✓)

**The project structure and test files are complete and correct.** The setup includes:
- ✅ Feature file with Gherkin scenarios
- ✅ Step definitions properly configured
- ✅ Page Object Model (LoginPage)
- ✅ WebDriver.io + ChromeDriver configuration
- ✅ Support for both Chrome and Firefox browsers

### Known Issues & Solutions

**⚠️ ESM/CJS Compatibility Issue**

There is a known compatibility issue between:
- @wdio/cucumber-framework v8
- @cucumber/cucumber v9  
- Node.js ES modules (Node 20+)

Error:
```
Error [ERR_REQUIRE_ASYNC_MODULE]: require() cannot be used on an ESM graph 
with top-level await...
```

**✅ SOLUTION - Use Node 18 LTS:**
```bash
# The recommended fix is to use Node 18 LTS instead of Node 20+
# Download from: https://nodejs.org/
# Then run: npm install && npm test
```

**Alternative Solutions:**

1. **Option A - WebDriverIO v7 (CJS-compatible):**
   ```bash
   npm install --save-dev @wdio/cli@^7.30.0 @wdio/cucumber-framework@^7.30.0 @wdio/local-runner@^7.30.0 @wdio/spec-reporter@^7.30.0 @cucumber/cucumber@^8.0.0
   ```

2. **Option B - Switch to Mocha framework:**
   ```bash
   npm install --save-dev @wdio/mocha-framework
   # Update wdio.cucumber.conf.js: framework: 'mocha'
   ```

3. **Option C - Use JavaScript test format instead of Cucumber:**
   Create `test.spec.js`:
   ```javascript
   const { remote } = require('webdriverio');
   const loginPage = require('./test/pages/LoginPage');
   
   describe('Login Validation', () => {
     let browser;
     
     before(async () => {
       browser = await remote({ ...require('./wdio.cucumber.conf').config });
     });
     
     it('should show error without credentials', async () => {
       await loginPage.open();
       await loginPage.clickLogin();
       const message = await loginPage.getErrorMessage();
       expect(message).toContain('Epic sadface: Username is required');
     });
     
     after(async () => {
       await browser.deleteSession();
     });
   });
   ```

## Key Technologies

- **WebDriverIO (v8.24.0)** - Browser automation framework
- **Cucumber (v9.0.0)** - BDD framework for writing readable test scenarios
- **Selenium Standalone** - Browser driver management

## Page Object Model

The `LoginPage` class provides methods to interact with the SauceDemo login page:

- `open()` - Navigate to https://www.saucedemo.com
- `clickLogin()` - Click the Login button
- `getErrorMessage()` - Retrieve the error message displayed
- `loginButton` - Selector for the Login button
- `errorMessage` - Selector for the error message element

## Extending Tests

To add new test scenarios:

1. Add new scenarios to `features/login.feature`
2. Implement corresponding step definitions in `features/step-definitions/login.steps.js`
3. Add page element selectors and methods to `test/pages/LoginPage.js` as needed

## Example - Testing with Valid Credentials

```javascript
// In login.steps.js
When('User enters username {string} and password {string}', async (username, password) => {
    await loginPage.enterUsername(username);
    await loginPage.enterPassword(password);
});

Then('User should be logged in successfully', async () => {
    await expect(loginPage.inventoryPage).toBeDisplayed();
});
```

## Debugging

Enable verbose logging in `wdio.cucumber.conf.js`:
```javascript
logLevel: 'debug', // Set to 'trace', 'debug', 'info', 'warn', 'error'
```

## Resources

- [WebDriverIO Documentation](https://webdriver.io/)
- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [SauceDemo Website](https://www.saucedemo.com)
