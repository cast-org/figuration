/* eslint-env node */

const browsers = {
    safariMac: {
        base: 'SauceLabs',
        platform: 'macOS 10.13',
        browserName: 'safari',
        version: 'latest'
    },
    chromeMac: {
        base: 'SauceLabs',
        platform: 'macOS 10.13',
        browserName: 'chrome',
        version: 'latest'
    },
    firefoxMac: {
        base: 'SauceLabs',
        platform: 'macOS 10.13',
        browserName: 'firefox',
        version: 'latest'
    },
    edgeWin10Legacy: {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'MicrosoftEdge',
        version: '16'
    },
    edgeWin10: {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'MicrosoftEdge',
        version: 'latest'
    },
    ie11Win10: {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'internet explorer',
        version: 'latest'
    },
    chromeWin10: {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'chrome',
        version: 'latest'
    },
    firefoxWin10: {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'firefox',
        version: 'latest'
    },
    iPhone: {
        base: 'SauceLabs',
        deviceName:'iPhone 11 Simulator',
        platformName:'iOS',
        platformVersion:'13.0',
        browserName:'Safari',
        appiumVersion:'1.22.3',
        deviceOrientation:'portrait'
    },
    android: {
        base: 'SauceLabs',
        deviceName: 'Android GoogleAPI Emulator',
        platform: 'Android',
        version: '9.0',
        browserName: 'Chrome',
        appiumVersion: '1.22.1',
        deviceOrientation: 'portrait'
    }
};

const browsersKeys = Object.keys(browsers);

module.exports = {
    browsers,
    browsersKeys
};
