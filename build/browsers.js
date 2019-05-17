/* eslint-env node */
/* eslint-disable camelcase */

const browsers = {
    'safariMac': {
        base: 'SauceLabs',
        platform: 'macOS 10.13',
        browserName: 'safari',
        version: 'latest'
    },
    'chromeMac': {
        base: 'SauceLabs',
        platform: 'macOS 10.13',
        browserName: 'chrome',
        version: 'latest'
    },
    'firefoxMac': {
        base: 'SauceLabs',
        platform: 'macOS 10.13',
        browserName: 'firefox',
        version: 'latest'
    },
    'edgeWin10': {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'MicrosoftEdge',
        version: 'latest'
    },
    'ie11Win10': {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'internet explorer',
        version: 'latest'
    },
    'chromeWin10': {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'chrome',
        version: 'latest'
    },
    'firefoxWin10': {
        base: 'SauceLabs',
        platform: 'Windows 10',
        browserName: 'firefox',
        version: 'latest'
    },
    'iPhone': {
        base: 'SauceLabs',
        deviceName: 'iPhone X Simulator',
        deviceOrientation: 'portrait',
        platformVersion: '11.0',
        platformName: 'iOS',
        browserName: 'Safari'
    },
    'android': {
        base: 'SauceLabs',
        deviceName: 'Android Emulator',
        deviceOrientation: 'portrait',
        platformVersion: '8.0',
        platformName: 'Android',
        browserName: 'Chrome'
    }
};

const browsersKeys = Object.keys(browsers);

module.exports = {
  browsers,
  browsersKeys
};
