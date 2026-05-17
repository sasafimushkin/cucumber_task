Feature: Login validation

  Scenario: User sees error when clicking Login without credentials
    Given User is located on the main page of saucedemo website
    When User clicks the "Login" button
    Then User should see "Epic sadface: Username is required" error message
