Feature: Browse and Select Equipment by Category
  As an equipment rental owner
  I want to navigate through equipment categories and select specific machines
  So that I can manage my rental schedule effectively

  Background:
    Given I am authenticated as a customer account
    And I am on the main dashboard

  Scenario: Navigate to equipment selection through category hierarchy
    When I click the "Schedule" button in the navigation
    Then I should be redirected to the "Choose by Category" page
    And I should see a list of equipment categories
    
    When I expand the "Material Handling Equipment" accordion
    Then I should see the "Browse Category" button
    
    When I click the "Browse Category" button
    Then I should be redirected to the "Material Handling Equipment" page
    And I should see a list of available equipment types
    
    When I select "Mini Excavator" from the equipment list
    Then I should be redirected to the detailed "Mini Excavator" page
    And I should see the full specifications and availability
