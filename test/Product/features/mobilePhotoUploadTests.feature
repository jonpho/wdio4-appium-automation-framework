Feature: Test Mobile Photo Uploads

  @home @test3
  Scenario: Test Main Start Screen
    Given I go to the "loginPageAndroid" page
    And I sign into the application
    And I tap the "FINGER_PRINT_NOT_NOW_XPATH" button on the page
    And I go to the "policyPageAndroid" page
    And I tap the "MENU" dropdown on the page
    And I tap the "MENU_DOC_PHOTO_UPLOAD_XPATH" on the page
    And I tap the "TAKE_A_PICTURE_XPATH" button on the page
    And I tap the "PHOTO_ALLOW_ACCESS" button on the page
    And I tap the "TAKE_PHOTO_BUTTON" button on the page
    And I tap the "CONFIRM_PHOTO_BUTTON" button on the page
    And I tap the "UPLOAD_PHOTO_BUTTON_XPATH" button on the page
    And I tap the "CLAIMS_INFORMATION" checkbox on the page
    And I tap the "REASON_UPLOAD_BUTTON_XPATH" button on the page
    And I tap the "OK_SUCCESS_ALERT_XPATH" button on the page
    When I click on the back button the page
    Then I should return to the Policy page
