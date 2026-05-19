# WebDriverIO + Cucumber — SauceDemo Login Validation

A test automation project using **WebDriverIO v9** and **Cucumber BDD** to validate login error handling on the [SauceDemo](https://www.saucedemo.com) website.

## Test Scenario

```gherkin
Feature: Login validation

  Scenario: User sees error when clicking Login without credentials
    Given User is located on the main page of saucedemo website
    When User clicks the "Login" button
    Then User should see "Epic sadface: Username is required" error message
```

## Project Structure

```
cucumber_task/
├── features/
│   ├── login.feature               # Cucumber feature file (Gherkin)
│   └── step-definitions/
│       └── login.steps.js          # Step implementations
├── test/
│   └── pages/
│       └── LoginPage.js            # Page Object Model
├── wdio.conf.minimal.js            # WebDriverIO configuration
├── package.json
└── README.md
```

## Prerequisites

- **Node.js** v18+
- **Chrome** browser installed
- **Firefox** browser installed

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

The suite runs in **parallel** on both **Chrome** and **Firefox**.

## Key Technologies

| Package | Purpose |
|---|---|
| `@wdio/cli` v9 | WebDriverIO runner |
| `@wdio/cucumber-framework` v9 | Cucumber BDD integration |
| `@cucumber/cucumber` v9 | Gherkin step definitions |
| `@wdio/spec-reporter` | Human-readable console output |
| `chromedriver` | Chrome driver (auto-managed by WDIO) |

## Page Object Model

`LoginPage.js` encapsulates all interactions with the SauceDemo login page:

| Method / Property | Description |
|---|---|
| `open()` | Navigates to `https://www.saucedemo.com` |
| `clickLogin()` | Clicks the Login button |
| `getErrorMessage()` | Returns the error message text |
| `loginButton` | `#login-button` selector |
| `errorMessage` | `[data-test="error"]` selector |

## Resources

- [WebDriverIO Documentation](https://webdriver.io/)
- [Cucumber.js Documentation](https://cucumber.io/docs/cucumber/)
- [SauceDemo Website](https://www.saucedemo.com)
