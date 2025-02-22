Feature: Login
  As a user
  I want to log into the system
  So that I can access my account

  Scenario: Successful Login
    Given I am on the login page
    When I enter "markmumba01@gmail.com" as email
    And I enter "qwerty1234" as password
    And I click the login button
    And I should see the dashboard

  Scenario: Invalid Login
    Given I am on the login page
    When I enter "invalid@example.com" as email
    And I enter "wrongpassword" as password
    And I click the login button
    Then I should see an error message "Login failed"

   Scenario: Empty Fields
    Given I am on the login page
    When I click the login button
    Then I should see validation errors for empty fields
