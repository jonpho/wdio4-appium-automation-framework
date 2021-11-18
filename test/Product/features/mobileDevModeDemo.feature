Feature: Mobile Demo

  @home @test1
  Scenario: Test Main Start Screen Entering Dev Mode
    Given I go to the "loginPageAndroid" page
    And I enter Development Mode
    Then I sign into the application
