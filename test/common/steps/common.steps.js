import { Given, When, Then } from "cucumber";
import Constants from "../../../src/utility/constants";
import Driver from "../../../src/utility/driver";

// Pulling path of page specific locators for elements
let pagePath = Constants.getLocatorPath();

/**
 * Common Steps
 */
Given(/^I go to the "(.*?)" page$/, pageName => {
  global.pageContext = pageName;
  //const url = require(pagePath + `${global.pageContext}.json`).url["URL"];
  //Driver.loadUrl(Constants.getBaseUrl() + url);
});

Given(/^I am on the "(.*?)" page$/, pageName => {
  global.pageContext = pageName;
});

When(/^I switch to the "(.*?)" window$/, (window) => {
  if (window === "new") {
    window = 1;
  }
  else {
    window = 0;
  }
  let tabIds = browser.getTabIds();
  browser.switchTab(tabIds[window]);
});

When(/^I click the "(.*?)" button on the page$/, (element) => {
  const button = require(pagePath + `${global.pageContext}.json`).buttons[element];
  Driver.shouldSeeElement(button);
  if (Driver.isAndroid()) {
    Driver.triggerJQueryEvent(button, "click");
  } else {
    Driver.clickElementLoop(button);
  }
  Driver.waitForAngularToLoad();
});

When(/^I tap the "(.*?)" button on the page$/, (element) => {
  const button = require(pagePath + `${global.pageContext}.json`).buttons[element];
  Driver.shouldSeeElement(button);
  Driver.clickElementLoop(button);
});

When(/^I tap the "(.*?)" on the page$/, (element) => {
  const button = require(pagePath + `${global.pageContext}.json`).locations[element];
  Driver.shouldSeeElement(button);
  Driver.clickElementLoop(button);
});

When(/^I click the "(.*?)" link on the page$/, (element) => {
  const link = require(pagePath + `${global.pageContext}.json`).hrefs[element];
  Driver.shouldSeeElement(link);
  Driver.clickElementLoop(link);
});

Then(/^I should see the "(.*?)" button on the page$/, (element) => {
  const button = require(pagePath + `${global.pageContext}.json`).buttons[element];
  Driver.shouldSeeElement(button);
});

Then(/^I should see "(.*?)" with text "(.*?)"$/, (element, text) => {
  const locator = require(pagePath + `${global.pageContext}.json`).special[element];
  Driver.shouldSeeElementWithTextContent(locator, text);
});

When(/^I enter "(.*?)" into the "(.*?)"$/,
  (value, element) => {
    const input = require(pagePath + `${global.pageContext}.json`).inputs[element];
    Driver.fillElementWithText(input, value);
  }
);

When(/^I delete text from the "(.*?)"$/,
  (element) => {
    const input = require(pagePath + `${global.pageContext}.json`).inputs[element];
    Driver.deleteElementText(input);
  }
);

When(/^I toggle the "(.*?)" button back and forth on the page$/, (element) => {
  const button = require(pagePath + `${global.pageContext}.json`).buttons[element];
  Driver.shouldSeeElement(button);
  Driver.clickElementLoop(button);
  Driver.wait(1);
  Driver.clickElementLoop(button);
  Driver.wait(1);
});

/**
 * Step to Log into Development Mode
 */
When(/^I enter Development Mode$/, () => {
  const gmBanner = require(pagePath + `${global.pageContext}.json`).buttons.GOODMORNING_XPATH;
  const switchButton = require(pagePath + `${global.pageContext}.json`).buttons.DEV_SWITCH_BUTTON_XPATH;
  const input = require(pagePath + `${global.pageContext}.json`).inputs.TOKEN_FIELD_ID;
  Driver.developmentEnvironmentLogin(input, gmBanner, switchButton);
});

/**
 * Step to Sign into the Application with login and password created in ENV file
 */
When(/^I sign into the application$/, () => {
  const userLocation = require(pagePath + `${global.pageContext}.json`).inputs.USERNAME_FIELD;
  const pwLocation = require(pagePath + `${global.pageContext}.json`).inputs.PASSWORD_FIELD;
  const loginSelector = require(pagePath + `${global.pageContext}.json`).buttons.LOG_IN_XPATH;
  Driver.enterLoginPW(process.env.MOBILEUSER, process.env.MOBILEPASS, userLocation, pwLocation);
  Driver.clickElementLoop(loginSelector);
});
