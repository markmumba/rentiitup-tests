Feature: Add Machine to Equipment Inventory
  As an owner
  I want to add a new machine to my inventory
  So that I can track and manage my equipment effectively

  Background:
    Given I am logged in as an owner
    And I am on the dashboard page

  Scenario: Successfully add a new machine with valid details and image
    When I click on the "Add Machine" button
    Then I should be redirected to the add machine page
    
    When I fill in the following machine details:
      | Name          | Mini excavator                      |
      | Description   | Can carry heavy load                |
      | Base Price    | 20000                              |
      | Condition     | GOOD                                |
      | Specification| 5800CC,200kg towing,5000kg lifting |
      | Category      | Material Handling Equipment         |
    And I click the "Add Machine" submit button
    Then I should see a success message "Machine created successfully"

    When I select an image file from my device
    And I click the "Upload Images" submit button
    Then I should be redirected to the profile page

