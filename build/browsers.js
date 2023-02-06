/* eslint-env node */

const browsers = {
    safariMac: {
        base: 'SauceLabs',
        platformName: 'macOS 10.13',
        browserName: 'safari',
        browserVersion: 'latest'
    },
    chromeMac: {
        base: 'SauceLabs',
        platformName: 'macOS 10.13',
        browserName: 'chrome',
        browserVersion: 'latest'
    },
    firefoxMac: {
        base: 'SauceLabs',
        platformName: 'macOS 10.13',
        browserName: 'firefox',
        browserVersion: 'latest'
    },
    edgeMac: {
        base: 'SauceLabs',
        platformName: 'macOS 10.13',
        browserName: 'MicrosoftEdge',
        browserVersion: 'latest'
    },
    edgeWin10Legacy: {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'MicrosoftEdge',
        version: '16'
    },
    edgeWin10: {
        base: 'SauceLabs',
        platformName: 'Windows 10',
        browserName: 'MicrosoftEdge',
        browserVersion: 'latest'
    },
    ie11Win10: {
        base: 'SauceLabs',
        platformName: 'Windows 10',
        browserName: 'internet explorer',
        browserVersion: 'latest'
    },
    chromeWin10: {
        base: 'SauceLabs',
        platformName: 'Windows 10',
        browserName: 'chrome',
        browserVersion: 'latest'
    },
    firefoxWin10: {
        base: 'SauceLabs',
        platformName: 'Windows 10',
        browserName: 'firefox',
        browserVersion: 'latest'
    },
    /* Disable iOS test for now as it passes, but also runs a second test that fails
     * tries to run both Selenium and Appiums test - ???
    iPhone: {
        base: 'SauceLabs',
        deviceName: 'iPhone 11 Simulator',
        platformName: 'iOS',
        platformVersion: '13.0',
        browserName: 'Safari',
        deviceOrientation: 'portrait',
    },
    */
    android: {
        base: 'SauceLabs',
        deviceName: 'Android GoogleAPI Emulator',
        platformName: 'Android',
        platformVersion: '9.0',
        browserName: 'Chrome',
        deviceOrientation: 'portrait'
    }
};

const browsersKeys = Object.keys(browsers);

module.exports = {
    browsers,
    browsersKeys
};
