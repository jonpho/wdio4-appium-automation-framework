# Mobile Automation
A WebDriverIO project that supports web and mobile app test automation. The framework implements a hybrid, keyword-driven page component pattern, which makes adding locators as simple as placing two strings in a JSON file and filling in a Cucumber step.

## Tech Stack 
* Javascript (ES6)
* NodeJS
* WebDriverIO
* CucumberJS
* Appium

## Getting Started
Add the following tools to your environment:

#### NodeJS
* Install node.js from: https://nodejs.org/en/download/
* Install all the required tools and configurations using Microsoft's windows-build-tools using: `npm install --global production windows-build-tools` from an elevated PowerShell or CMD.exe (run as Administrator).
#### Android Studio
* Running android emulators, install Android Studio: https://developer.android.com/studio/
* Create an Android Emulator following: https://developer.android.com/studio/run/managing-avds
* Chrome Dev Tools (optional) - Necessary to inspect elements elements for UI selectors.

Once your tools are configured, download the project and navigate to the root directory. 

* Run: `npm install`
* Install allure reporter: `npm install -g allure-commandline --save-dev`
* If everything built successfully, you're ready to run tests.

## Running Tests
* `npm run <BROWSER>` <BROWSER> can be chrome, firefox, edge, ie11, safari, androidEmulator, iphoneSimulator and others (full list in capabilities.json)

## Appium Notes
In the capabilities.json for the androidEmulator or androidDevice scripts. The "app: ./path/to/application.apk or .ipa" needs to be set to the location the app is located on your local machine. Mac OS/Linux will look something like this "./app_location/release.apk" on Windows PCs it will look something like this "cd:\\\app_location\\\release.apk".
