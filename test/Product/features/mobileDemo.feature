Feature: Mobile Demo

  @home @test2
  Scenario: Test Main Start Screen
    Given I go to the "loginPageAndroid" page
    And I toggle the "REMEMBER_ME_TOGGLE_ID" button back and forth on the page
    And I tap the "KEEP_ME_LOGGED_IN_TOGGLE_ID" button on the page
    And I tap the "CONTINUE_XPATH" button on the page
    And I enter "testuser1" into the "USERNAME_FIELD"
    And I enter "test" into the "PASSWORD_FIELD"
    Then I tap the "LOG_IN_XPATH" button on the page
