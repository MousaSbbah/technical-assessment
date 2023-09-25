Feature: Test Feature

  Scenario: Check the total displayed number of results for category Villas with price range between 300,000 - 350,000 BHD
    Given A user visit the property finder home page
    When A user select the "Villa" option from category
    And Click the search button
    When A user filters the results by price range: min-"300,000", max-"350,000"
    Then Check the total number of results from the API response matches the total displayed property results.

  Scenario: Click on commercial properties only checkbox and select "offices".
    Given A user visit the property finder home page
    When A user select the “show commercial properties only” checkbox
    And Click the search button
    When A user click on "Offices" category, from the returned commercial list 
    Then Check the total number of results from the API response matches the total displayed property results.
    And Verify the details of the first property in the searched result from the API response

  Scenario: Search for property by location
    Given A user visit the property finder home page
    When A user search for the "Bahrain Bay" location
    And Click the search button
    And Select the first property from the list
    Then Verify the “Available from date” should not be empty

